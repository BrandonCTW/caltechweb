"use client";

import {
  Check,
  Phone,
  Send,
  Video,
  Monitor,
  Smartphone,
  Zap,
  Search,
  MousePointer,
  Shield,
  Star,
  ArrowRight,
  ChevronDown,
  Clock,
  Play,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, type FormEvent } from "react";

// --- Request Audit Form ---

function AuditRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;

    try {
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "caltechweb.com",
          name: data.name,
          email: data.email,
          website: data.website,
          message: `Phone: ${data.phone || "not provided"}\n\nVideo Audit Request for: ${data.website}\n\n${data.notes || ""}`,
          source: "video-audit",
        }),
      });
    } catch {
      // Submit regardless of network errors
    } finally {
      setSending(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Audit Request Received!
        </h3>
        <p className="text-gray-600 mb-2">
          Brandon will personally review your site and send you the video within{" "}
          <strong>1–2 business days</strong>.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Check your inbox, and your spam folder just in case.
        </p>
        <a
          href="tel:5592823075"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Questions? Call (559) 282-3075
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Jane Smith"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="jane@yourbusiness.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Your Website URL <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          id="website"
          name="website"
          required
          placeholder="https://www.yourwebsite.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Phone Number{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Anything specific you want reviewed?{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="e.g. We're not getting enough leads, our bounce rate is high, the mobile experience feels off..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? (
          "Sending..."
        ) : (
          <>
            Request My Free Video Audit
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        No obligation. No sales pitch. Just honest feedback on your website.
      </p>
    </form>
  );
}

// --- FAQ ---

const faqs = [
  {
    q: "Is the video audit really free?",
    a: "Yes, 100% free. Brandon personally records a video reviewing your website and emails it to you. No obligation, no sales pitch, no credit card. You keep the video regardless of what you decide.",
  },
  {
    q: "How long does it take to receive my audit?",
    a: "Most audits are recorded and delivered within 1–2 business days of your request. You'll receive an email with the video link directly from Brandon.",
  },
  {
    q: "How long is the video?",
    a: "Typically 5–15 minutes, depending on how much there is to cover. Brandon keeps it focused and actionable, not a 45-minute lecture.",
  },
  {
    q: "What does the audit cover?",
    a: "Brandon reviews your site's design and first impression, mobile experience, page load speed, SEO basics (title tags, headings, meta descriptions), calls-to-action, trust signals, and overall conversion potential. You'll know exactly where your site is losing visitors.",
  },
  {
    q: "Do I need to have an existing website to get an audit?",
    a: "Yes. The free video audit is for businesses that already have a website up. If you're starting from scratch, head over to the pricing page. Your new site will be live in 5–7 business days for $99/month.",
  },
  {
    q: "Will you try to sell me something?",
    a: "The audit is honest feedback, period. If your site needs work, Brandon will tell you what and why. If you're interested in having CalTech Web fix it, great, but there is no pressure and no follow-up sales calls.",
  },
  {
    q: "What if my site is already good?",
    a: "Then Brandon will tell you that too. The goal is honest, useful feedback, not manufactured criticism to drum up business.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Questions About the Free Audit
          </h2>
          <p className="text-gray-500">
            Everything you need to know before requesting your video review.
          </p>
        </div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900 leading-snug">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Still have a question?{" "}
          <a
            href="mailto:Brandon@CalTechWeb.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            Email Brandon
          </a>{" "}
          or call{" "}
          <a
            href="tel:5592823075"
            className="text-blue-600 font-semibold hover:underline"
          >
            (559) 282-3075
          </a>
          .
        </p>
      </div>
    </section>
  );
}

// --- Sticky Mobile CTA ---

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div
        className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 pt-3 pb-4"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-3">
          <a
            href="tel:5592823075"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="#request-audit"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            <Video className="w-4 h-4" />
            Get Free Audit
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Page ---

export default function VideoWebsiteAuditPage() {
  const auditChecklist = [
    { icon: Monitor, label: "First impression & design quality" },
    { icon: Smartphone, label: "Mobile responsiveness & usability" },
    { icon: Zap, label: "Page load speed" },
    { icon: Search, label: "SEO basics (titles, headings, meta)" },
    { icon: MousePointer, label: "Calls-to-action & conversion flow" },
    { icon: Shield, label: "Trust signals & credibility" },
    { icon: TrendingUp, label: "Overall conversion potential" },
    { icon: AlertCircle, label: "Quick wins vs. bigger issues" },
  ];

  const testimonials = [
    {
      quote:
        "Brandon sent me a 10-minute video walking through everything wrong with my old site. I had no idea my contact form wasn't even working. We fixed it and started getting leads that week.",
      name: "Rachel Torres",
      role: "Owner, Torres Cleaning Services",
      initials: "RT",
      color: "bg-purple-600",
    },
    {
      quote:
        "The free audit was more useful than a $500 consultation I paid for elsewhere. Brandon is straightforward and clearly knows what he's talking about. We switched to CalTech Web right after.",
      name: "James Whitfield",
      role: "Owner, Whitfield Auto Repair",
      initials: "JW",
      color: "bg-blue-600",
    },
    {
      quote:
        "I was skeptical about a free video review but he actually spent 12 minutes on my site and gave me specific, actionable feedback. That alone was worth it even before I became a client.",
      name: "Sandra Morales",
      role: "Licensed Realtor, Central Valley CA",
      initials: "SM",
      color: "bg-teal-600",
    },
  ];

  return (
    <>
      <Header />
      <main className="pb-[76px] md:pb-0">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <Video className="w-4 h-4 text-orange-400" />
              Free, no obligation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Free Video Website{" "}
              <span className="text-orange-400">Audit</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Brandon personally records a screen-share video reviewing your
              website, covering design, mobile, speed, SEO, and conversions. You get the
              video. No sales pitch. No obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#request-audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                <Video className="w-5 h-5" />
                Request My Free Audit
              </a>
              <a
                href="tel:5592823075"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (559) 282-3075
              </a>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                { icon: Clock, text: "Delivered within 1–2 business days" },
                { icon: Star, text: "800+ websites reviewed" },
                { icon: Shield, text: "100% free, no credit card needed" },
                { icon: Play, text: "5–15 minute personal video" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Brandon Covers + Form */}
        <section className="py-16 sm:py-24 bg-white" id="request-audit">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left: What you get */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
                    <Video className="w-4 h-4" />
                    What Brandon reviews
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                    A Complete Look at Your Website
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    Brandon screen-records himself navigating your website and
                    narrates everything he notices, the good and the bad. You
                    get an expert eye on your site for free.
                  </p>
                </div>

                <ul className="space-y-3">
                  {auditChecklist.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Brandon callout */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                    BH
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 leading-relaxed italic">
                      &ldquo;Most business owners have no idea what their
                      website visitors experience. I record myself going through
                      your site as if I&rsquo;m a customer, and I tell you
                      exactly what I see.&rdquo;
                    </p>
                    <p className="text-xs text-gray-400 mt-2 font-semibold">
                      Brandon Hopkins, Founder of CalTech Web
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Request Your Free Video Audit
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form and Brandon will send your video within
                  1–2 business days.
                </p>
                <AuditRequestForm />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100 mb-4">
                <Check className="w-4 h-4" />
                Simple 3-step process
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                How the Free Audit Works
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                From request to video in your inbox, here&apos;s what to expect.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  color: "from-blue-500 to-blue-600",
                  lightBg: "bg-blue-50",
                  accent: "text-blue-600",
                  title: "Submit Your Website URL",
                  body: "Fill out the form above with your name, email, and your website address. Takes about 60 seconds.",
                  detail: "Takes 60 seconds",
                },
                {
                  step: "02",
                  color: "from-violet-500 to-violet-600",
                  lightBg: "bg-violet-50",
                  accent: "text-violet-600",
                  title: "Brandon Records Your Audit",
                  body: "Brandon personally screen-records himself walking through your website and narrating what he sees. Every audit is unique.",
                  detail: "Delivered in 1–2 business days",
                },
                {
                  step: "03",
                  color: "from-green-500 to-green-600",
                  lightBg: "bg-green-50",
                  accent: "text-green-600",
                  title: "Watch & Act on the Feedback",
                  body: "You receive a video link by email. Watch it, take notes, and use the feedback however you like, whether that's with us or anyone else.",
                  detail: "No strings attached",
                },
              ].map(({ step, color, lightBg, accent, title, body, detail }) => (
                <div
                  key={step}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${color}`} />
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-lg font-extrabold shadow-md mb-5`}
                    >
                      {step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {body}
                    </p>
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${lightBg} text-xs font-semibold ${accent}`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      {detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold border border-yellow-100 mb-4">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                What clients say
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Real People. Real Feedback.
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Businesses that requested a free video audit before becoming
                CalTech Web clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, role, initials, color }) => (
                <div
                  key={name}
                  className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed text-sm flex-1">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div
                      className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                    >
                      {initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {name}
                      </div>
                      <div className="text-xs text-gray-400">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA Strip */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
              <Video className="w-8 h-8 text-blue-200" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to see your site through a customer&apos;s eyes?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Request your free video audit above, or call Brandon directly. If
              you&apos;re ready to get a new site built, check out the pricing page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#request-audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Video className="w-5 h-5" />
                Get My Free Audit
              </a>
              <Link
                href="/web-design-pricing/"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
