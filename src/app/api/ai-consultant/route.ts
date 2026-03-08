import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ===================================================================
   AI Consultant Inquiry API — POST /api/ai-consultant/
   Accepts multi-step form data and sends a detailed email via Resend.
   =================================================================== */

interface AIConsultantPayload {
  // Step 1: About Your Business
  companyName: string;
  industry: string;
  employeeCount: string;
  annualRevenue: string;
  // Step 2: AI Situation
  currentAiUsage: string;
  biggestChallenges: string[];
  // Step 3: Goals
  successVision: string;
  timeline: string;
  preferredFormat: string;
  // Step 4: Contact
  name: string;
  email: string;
  phone: string;
  howDidYouFindUs: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function buildEmailHtml(payload: AIConsultantPayload & { submittedAt: string }) {
  const challenges = payload.biggestChallenges?.join(", ") || "None specified";

  return `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e3a5f 0%, #1a56db 100%); color: white; padding: 20px 28px; border-radius: 10px 10px 0 0;">
        <h2 style="margin: 0; font-size: 20px;">New AI Consulting Inquiry</h2>
        <p style="margin: 4px 0 0; opacity: 0.8; font-size: 14px;">From ${payload.companyName} — ${payload.industry}</p>
      </div>
      <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 28px; border-radius: 0 0 10px 10px;">

        <h3 style="color: #1e3a5f; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151; width: 160px;">Name</td><td style="padding: 7px 0; color: #111827;">${payload.name}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 7px 0; color: #111827;"><a href="mailto:${payload.email}" style="color: #1a56db;">${payload.email}</a></td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">Phone</td><td style="padding: 7px 0; color: #111827;"><a href="tel:${payload.phone}" style="color: #1a56db;">${payload.phone}</a></td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">How Found Us</td><td style="padding: 7px 0; color: #111827;">${payload.howDidYouFindUs}</td></tr>
        </table>

        <h3 style="color: #1e3a5f; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-top: 1px solid #f3f4f6; padding-top: 20px;">Business Profile</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151; width: 160px;">Company</td><td style="padding: 7px 0; color: #111827;">${payload.companyName}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">Industry</td><td style="padding: 7px 0; color: #111827;">${payload.industry}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">Employees</td><td style="padding: 7px 0; color: #111827;">${payload.employeeCount}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">Annual Revenue</td><td style="padding: 7px 0; color: #111827;">${payload.annualRevenue}</td></tr>
        </table>

        <h3 style="color: #1e3a5f; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-top: 1px solid #f3f4f6; padding-top: 20px;">AI Situation</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151; width: 160px;">Current AI Usage</td><td style="padding: 7px 0; color: #111827;">${payload.currentAiUsage}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151; vertical-align: top;">Biggest Challenges</td><td style="padding: 7px 0; color: #111827;">${challenges}</td></tr>
        </table>

        <h3 style="color: #1e3a5f; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-top: 1px solid #f3f4f6; padding-top: 20px;">Goals & Timeline</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151; width: 160px;">Timeline</td><td style="padding: 7px 0; color: #111827;">${payload.timeline}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151;">Preferred Format</td><td style="padding: 7px 0; color: #111827;">${payload.preferredFormat}</td></tr>
          <tr><td style="padding: 7px 0; font-weight: bold; color: #374151; vertical-align: top;">Success Vision</td><td style="padding: 7px 0; color: #111827; white-space: pre-wrap;">${payload.successVision}</td></tr>
        </table>

        <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 16px; margin-top: 8px;">
          <p style="margin: 0; color: #0c4a6e; font-size: 13px;"><strong>Submitted:</strong> ${new Date(payload.submittedAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT</p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AIConsultantPayload;

    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    if (!body.companyName || body.companyName.trim().length < 1) {
      return NextResponse.json({ error: "Company name is required." }, { status: 400 });
    }

    const payload = {
      ...body,
      name: body.name.trim(),
      email: body.email.trim(),
      companyName: body.companyName.trim(),
      submittedAt: new Date().toISOString(),
    };

    const { error } = await getResend().emails.send({
      from: "CalTech Web Forms <forms@mail.caltechweb.com>",
      to: "brandon@caltechweb.com",
      cc: "brandon@caltechweb.com",
      replyTo: payload.email,
      subject: `New AI Consulting Inquiry: ${payload.companyName} (${payload.industry})`,
      html: buildEmailHtml(payload),
      text: [
        `New AI Consulting Inquiry`,
        ``,
        `CONTACT`,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `How Found Us: ${payload.howDidYouFindUs}`,
        ``,
        `BUSINESS`,
        `Company: ${payload.companyName}`,
        `Industry: ${payload.industry}`,
        `Employees: ${payload.employeeCount}`,
        `Revenue: ${payload.annualRevenue}`,
        ``,
        `AI SITUATION`,
        `Current AI Usage: ${payload.currentAiUsage}`,
        `Biggest Challenges: ${payload.biggestChallenges?.join(", ")}`,
        ``,
        `GOALS`,
        `Success Vision: ${payload.successVision}`,
        `Timeline: ${payload.timeline}`,
        `Preferred Format: ${payload.preferredFormat}`,
        ``,
        `Submitted: ${payload.submittedAt}`,
      ].join("\n"),
    });

    if (error) {
      console.error("[ai-consultant-form] Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to process your request. Please try again." },
        { status: 500 }
      );
    }

    console.log("[ai-consultant-form]", JSON.stringify({ name: payload.name, company: payload.companyName, email: payload.email }));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[ai-consultant-form] Error:", err);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
