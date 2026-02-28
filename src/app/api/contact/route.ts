import { NextRequest, NextResponse } from "next/server";

/* ===================================================================
   Contact / Audit Request API — POST /api/contact/
   Accepts { name, email, website, source, message } and forwards the
   lead to a Discord webhook (if configured) or logs it server-side.
   =================================================================== */

interface ContactPayload {
  name: string;
  email: string;
  website?: string;
  source?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    // --- Validation ---
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name is required and must be at least 2 characters." },
        { status: 400 }
      );
    }

    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const payload = {
      name: body.name.trim(),
      email: body.email.trim(),
      website: body.website?.trim() || "",
      source: body.source || "unknown",
      message: body.message || "",
      submittedAt: new Date().toISOString(),
    };

    // --- Discord webhook (if DISCORD_WEBHOOK_URL is set) ---
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (webhookUrl) {
      const embed = {
        title: `New Lead: ${payload.source}`,
        color: 0xf97316, // orange-500
        fields: [
          { name: "Name", value: payload.name, inline: true },
          { name: "Email", value: payload.email, inline: true },
          ...(payload.website
            ? [{ name: "Website", value: payload.website, inline: false }]
            : []),
          ...(payload.message
            ? [{ name: "Message", value: payload.message, inline: false }]
            : []),
          { name: "Source", value: payload.source, inline: true },
        ],
        timestamp: payload.submittedAt,
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      });
    }

    // --- Always log server-side for reliability ---
    console.log("[contact-form]", JSON.stringify(payload));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact-form] Error:", err);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
