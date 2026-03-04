import { NextRequest, NextResponse } from "next/server";
import * as postmark from "postmark";

/* ===================================================================
   Contact / Audit Request API — POST /api/contact/
   Accepts { name, email, website, source, message } and sends an
   email via Postmark to the site owner.
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

function getPostmarkClient() {
  return new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN!);
}

const SOURCE_LABELS: Record<string, string> = {
  "contact-page": "Contact Page",
  "free-quote": "Free Quote Request",
  "rfp-rfq": "RFP / RFQ Submission",
  "support": "Support Request",
  unknown: "Website Form",
};

function buildEmailHtml(payload: {
  name: string;
  email: string;
  website: string;
  source: string;
  message: string;
  submittedAt: string;
}) {
  const sourceLabel = SOURCE_LABELS[payload.source] || payload.source;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #f97316; color: white; padding: 16px 24px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">New Lead: ${sourceLabel}</h2>
      </div>
      <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #111827;">${payload.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
            <td style="padding: 8px 0; color: #111827;"><a href="mailto:${payload.email}">${payload.email}</a></td>
          </tr>
          ${payload.website ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Website</td>
            <td style="padding: 8px 0; color: #111827;">${payload.website}</td>
          </tr>` : ""}
          ${payload.message ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #111827;">${payload.message.replace(/\n/g, "<br>")}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Source</td>
            <td style="padding: 8px 0; color: #111827;">${sourceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted</td>
            <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">${new Date(payload.submittedAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
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

    const sourceLabel = SOURCE_LABELS[payload.source] || payload.source;
    const toAddress = process.env.POSTMARK_TO_EMAIL || "Brandon@CalTechWeb.com";
    const fromAddress = process.env.POSTMARK_FROM_EMAIL || "noreply@caltechweb.com";

    await getPostmarkClient().sendEmail({
      From: `CalTech Web <${fromAddress}>`,
      To: toAddress,
      ReplyTo: payload.email,
      Subject: `New ${sourceLabel} from ${payload.name}`,
      HtmlBody: buildEmailHtml(payload),
      TextBody: [
        `New ${sourceLabel}`,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.website ? `Website: ${payload.website}` : "",
        payload.message ? `Message: ${payload.message}` : "",
        `Source: ${sourceLabel}`,
        `Submitted: ${payload.submittedAt}`,
      ]
        .filter(Boolean)
        .join("\n"),
      MessageStream: "outbound",
    });

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
