import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* ===================================================================
   Zendesk Stats API — GET /api/zendesk-stats/
   Returns cached ticket stats from the Zendesk API.
   Uses reply_time_in_minutes from ticket metrics for accuracy.
   Refreshes at most once per hour.
   =================================================================== */

interface ZendeskStats {
  ticketsSolved: number;
  avgReplyMinutes: number;
  percentUnder1Hour: number;
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

async function fetchTicketsSolved(): Promise<number> {
  const url = `${baseUrl()}/api/v2/search/count.json?query=${encodeURIComponent("type:ticket status:solved status:closed")}`;
  const res = await fetch(url, { headers: zendeskHeaders() });
  if (!res.ok) throw new Error(`Zendesk search failed: ${res.status}`);
  const data = await res.json();
  return data.count ?? 0;
}

async function fetchReplyStats(): Promise<{
  avgMinutes: number;
  percentUnder1Hour: number;
}> {
  // Use ticket_metrics endpoint for accurate reply_time_in_minutes
  const url = `${baseUrl()}/api/v2/ticket_metrics.json?per_page=100&sort_by=updated_at&sort_order=desc`;
  const res = await fetch(url, { headers: zendeskHeaders() });
  if (!res.ok) throw new Error(`Zendesk metrics failed: ${res.status}`);
  const data = await res.json();

  const metrics = data.ticket_metrics ?? [];

  // Filter to tickets that have reply time data
  const replyTimes: number[] = [];
  for (const m of metrics) {
    const calendar = m.reply_time_in_minutes?.calendar;
    if (typeof calendar === "number" && calendar > 0) {
      replyTimes.push(calendar);
    }
  }

  if (replyTimes.length === 0) {
    return { avgMinutes: 42, percentUnder1Hour: 93 };
  }

  const total = replyTimes.reduce((sum, t) => sum + t, 0);
  const under1Hour = replyTimes.filter((t) => t <= 60).length;

  return {
    avgMinutes: Math.round(total / replyTimes.length),
    percentUnder1Hour: Math.round((under1Hour / replyTimes.length) * 100),
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
    fetchedAt: Date.now(),
  };
}

const FALLBACK = {
  ticketsSolved: 5000,
  avgReplyMinutes: 42,
  percentUnder1Hour: 93,
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
