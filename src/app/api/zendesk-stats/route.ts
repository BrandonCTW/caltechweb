import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // ISR: revalidate every hour

/* ===================================================================
   Zendesk Stats API — GET /api/zendesk-stats/
   Returns ticket stats from the Zendesk API.

   - ticketsSolved: all-time count of solved/closed tickets
   - avgReplyMinutes: avg first reply time (last 90 days, excl >48h)
   - percentUnder1Hour: % replied within 1 hour (same window)

   Caches in memory for 1 hour + Vercel edge cache (s-maxage).
   =================================================================== */

interface ZendeskStats {
  ticketsSolved: number;
  avgReplyMinutes: number;
  percentUnder1Hour: number;
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

async function fetchReplyStats(): Promise<{
  avgMinutes: number;
  percentUnder1Hour: number;
  sampleSize: number;
}> {
  // Rolling 90-day window
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90);
  const cutoffMs = cutoff.getTime();

  const MAX_REPLY_MINUTES = 48 * 60; // Exclude tickets waiting >48h on clients
  const MAX_PAGES = 10; // Up to 1000 metrics, plenty for 90 days

  const replyTimes: number[] = [];

  for (let page = 1; page <= MAX_PAGES; page++) {
    const data = await zendeskFetch(
      `/api/v2/ticket_metrics.json?per_page=100&page=${page}`
    );
    const metrics = data.ticket_metrics ?? [];
    if (metrics.length === 0) break;

    let allBeforeCutoff = true;

    for (const m of metrics) {
      // Skip metrics older than 90 days
      const createdAt = new Date(m.created_at).getTime();
      if (createdAt < cutoffMs) {
        allBeforeCutoff = true;
        continue;
      }
      allBeforeCutoff = false;

      const calendar = m.reply_time_in_minutes?.calendar;
      if (typeof calendar === "number" && calendar > 0 && calendar <= MAX_REPLY_MINUTES) {
        replyTimes.push(calendar);
      }
    }

    // If every metric on this page was before the cutoff, stop paginating
    if (allBeforeCutoff && metrics.length > 0) break;
    // If Zendesk returned fewer than a full page, we've reached the end
    if (metrics.length < 100) break;
  }

  if (replyTimes.length === 0) {
    return { avgMinutes: 0, percentUnder1Hour: 0, sampleSize: 0 };
  }

  const total = replyTimes.reduce((sum, t) => sum + t, 0);
  const under1Hour = replyTimes.filter((t) => t <= 60).length;

  return {
    avgMinutes: Math.round(total / replyTimes.length),
    percentUnder1Hour: Math.round((under1Hour / replyTimes.length) * 100),
    sampleSize: replyTimes.length,
  };
}

async function fetchStats(): Promise<ZendeskStats> {
  const [ticketsSolved, replyStats] = await Promise.all([
    fetchTicketsSolved(),
    fetchReplyStats(),
  ]);

  return {
    ticketsSolved,
    avgReplyMinutes: replyStats.avgMinutes,
    percentUnder1Hour: replyStats.percentUnder1Hour,
    sampleSize: replyStats.sampleSize,
    fetchedAt: Date.now(),
  };
}

const FALLBACK: ZendeskStats = {
  ticketsSolved: 5000,
  avgReplyMinutes: 42,
  percentUnder1Hour: 93,
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
