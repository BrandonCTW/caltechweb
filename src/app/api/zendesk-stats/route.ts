import { NextResponse } from "next/server";

/* ===================================================================
   Zendesk Stats API — GET /api/zendesk-stats/
   Returns cached ticket stats from the Zendesk API.
   Refreshes at most once per hour.
   =================================================================== */

interface ZendeskStats {
  ticketsSolved: number;
  avgResolutionMinutes: number;
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

async function fetchResolutionStats(): Promise<{
  avgMinutes: number;
  percentUnder1Hour: number;
}> {
  // Fetch the last 100 solved tickets to compute avg resolution time
  const url = `${baseUrl()}/api/v2/search.json?query=${encodeURIComponent("type:ticket status:solved status:closed")}&sort_by=updated_at&sort_order=desc&per_page=100`;
  const res = await fetch(url, { headers: zendeskHeaders() });
  if (!res.ok) throw new Error(`Zendesk search failed: ${res.status}`);
  const data = await res.json();

  const tickets = data.results ?? [];
  if (tickets.length === 0) {
    return { avgMinutes: 0, percentUnder1Hour: 0 };
  }

  let totalMinutes = 0;
  let under1Hour = 0;

  for (const ticket of tickets) {
    const created = new Date(ticket.created_at).getTime();
    const updated = new Date(ticket.updated_at).getTime();
    const minutes = (updated - created) / (1000 * 60);

    totalMinutes += minutes;
    if (minutes <= 60) under1Hour++;
  }

  return {
    avgMinutes: Math.round(totalMinutes / tickets.length),
    percentUnder1Hour: Math.round((under1Hour / tickets.length) * 100),
  };
}

async function fetchStats(): Promise<ZendeskStats> {
  const [ticketsSolved, resolutionStats] = await Promise.all([
    fetchTicketsSolved(),
    fetchResolutionStats(),
  ]);

  return {
    ticketsSolved,
    avgResolutionMinutes: resolutionStats.avgMinutes,
    percentUnder1Hour: resolutionStats.percentUnder1Hour,
    fetchedAt: Date.now(),
  };
}

export async function GET() {
  // Check env vars
  if (!process.env.ZENDESK_EMAIL || !process.env.ZENDESK_API_TOKEN) {
    return NextResponse.json(
      {
        ticketsSolved: 5000,
        avgResolutionMinutes: 42,
        percentUnder1Hour: 93,
        live: false,
      },
      {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      }
    );
  }

  // Return cache if fresh
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL) {
    return NextResponse.json({ ...cache, live: true }, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  }

  try {
    cache = await fetchStats();
    return NextResponse.json({ ...cache, live: true }, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch (err) {
    console.error("Zendesk stats error:", err);
    // Return stale cache or fallback
    if (cache) {
      return NextResponse.json({ ...cache, live: true }, {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      });
    }
    return NextResponse.json(
      {
        ticketsSolved: 5000,
        avgResolutionMinutes: 42,
        percentUnder1Hour: 93,
        live: false,
      },
      {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      }
    );
  }
}
