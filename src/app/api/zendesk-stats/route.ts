import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* ===================================================================
   Zendesk Stats API — GET /api/zendesk-stats/
   Returns ticket stats from the Zendesk API (all-time).

   - ticketsSolved: all-time count of solved/closed tickets
   - medianResolutionMinutes: median full resolution time (excl >48h)
   - percentUnder24Hours: % fully resolved within 24 hours (excl >48h)

   Caches in memory for 1 hour + Vercel edge cache (s-maxage).
   =================================================================== */

interface ZendeskStats {
  ticketsSolved: number;
  medianResolutionMinutes: number;
  percentUnder24Hours: number;
  sampleSize: number;
  fetchedAt: number;
}

let cache: ZendeskStats | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function zendeskHeaders(): HeadersInit {
  const email = process.env.ZENDESK_EMAIL;
  const token = process.env.ZENDESK_API_TOKEN;
  const encoded = Buffer.from(`${email}/token:${token}`).toString("base64");
  return {
    Authorization: `Basic ${encoded}`,
    "Content-Type": "application/json",
  };
}

function baseUrl(): string {
  const subdomain = process.env.ZENDESK_SUBDOMAIN || "caltechweb";
  return `https://${subdomain}.zendesk.com`;
}

async function zendeskFetch(path: string) {
  const res = await fetch(`${baseUrl()}${path}`, { headers: zendeskHeaders() });
  if (!res.ok) throw new Error(`Zendesk API ${res.status}: ${path}`);
  return res.json();
}

async function fetchTicketsSolved(): Promise<number> {
  const query = encodeURIComponent("type:ticket status:solved status:closed");
  const data = await zendeskFetch(`/api/v2/search/count.json?query=${query}`);
  return data.count ?? 0;
}

async function fetchResolutionStats(): Promise<{
  medianMinutes: number;
  percentUnder24Hours: number;
  sampleSize: number;
}> {
  // Paginate all ticket_metrics for full_resolution_time
  // Exclude tickets sitting >48h (waiting on clients, not support speed)
  const MAX_REPLY_MINUTES = 48 * 60;
  const resolutionTimes: number[] = [];

  for (let page = 1; page <= 100; page++) {
    const data = await zendeskFetch(
      `/api/v2/ticket_metrics.json?per_page=100&page=${page}`
    );
    const metrics = data.ticket_metrics ?? [];
    if (metrics.length === 0) break;

    for (const m of metrics) {
      const calendar = m.full_resolution_time_in_minutes?.calendar;
      if (typeof calendar === "number" && calendar > 0 && calendar <= MAX_REPLY_MINUTES) {
        resolutionTimes.push(calendar);
      }
    }

    if (metrics.length < 100) break;
  }

  if (resolutionTimes.length === 0) {
    return { medianMinutes: 0, percentUnder24Hours: 0, sampleSize: 0 };
  }

  resolutionTimes.sort((a, b) => a - b);
  const median = resolutionTimes[Math.floor(resolutionTimes.length / 2)];
  const under24h = resolutionTimes.filter((t) => t <= 1440).length;

  return {
    medianMinutes: median,
    percentUnder24Hours: Math.round((under24h / resolutionTimes.length) * 100),
    sampleSize: resolutionTimes.length,
  };
}

async function fetchStats(): Promise<ZendeskStats> {
  const [ticketsSolved, resolutionStats] = await Promise.all([
    fetchTicketsSolved(),
    fetchResolutionStats(),
  ]);

  return {
    ticketsSolved,
    medianResolutionMinutes: resolutionStats.medianMinutes,
    percentUnder24Hours: resolutionStats.percentUnder24Hours,
    sampleSize: resolutionStats.sampleSize,
    fetchedAt: Date.now(),
  };
}

const FALLBACK: ZendeskStats = {
  ticketsSolved: 5000,
  medianResolutionMinutes: 45,
  percentUnder24Hours: 98,
  sampleSize: 0,
  fetchedAt: 0,
};

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET() {
  if (!process.env.ZENDESK_EMAIL || !process.env.ZENDESK_API_TOKEN) {
    return NextResponse.json({ ...FALLBACK, live: false }, { headers: CACHE_HEADERS });
  }

  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL) {
    return NextResponse.json({ ...cache, live: true }, { headers: CACHE_HEADERS });
  }

  try {
    cache = await fetchStats();
    return NextResponse.json({ ...cache, live: true }, { headers: CACHE_HEADERS });
  } catch (err) {
    console.error("Zendesk stats error:", err);
    if (cache) {
      return NextResponse.json({ ...cache, live: true }, { headers: CACHE_HEADERS });
    }
    return NextResponse.json({ ...FALLBACK, live: false }, { headers: CACHE_HEADERS });
  }
}
