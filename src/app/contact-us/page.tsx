"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Check,
  ChevronDown,
  MessageSquare,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(
      `Website inquiry from ${fields.name}${fields.businessType ? ` (${fields.businessType})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone || "Not provided"}\nBusiness Type: ${fields.businessType || "Not specified"}\n\nMessage:\n${fields.message}`
    );
    window.location.href = `mailto:Brandon@CalTechWeb.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Thanks for reaching out. Brandon personally reviews every message and
          typically responds within a few hours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
        >
          Back to home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(559) 555-0100"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Type of Business
          </label>
          <select
            id="businessType"
            name="businessType"
            value={fields.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
          >
            <option value="">Select one…</option>
            <option value="Small Business">Small Business</option>
            <option value="Church / Non-Profit">Church / Non-Profit</option>
            <option value="Restaurant / Food">Restaurant / Food</option>
            <option value="Healthcare / Medical">Healthcare / Medical</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Contractor / Trades">Contractor / Trades</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Tell us about your project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="A little about your business and what you're looking for…"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-[0.98] transition-all shadow-md"
      >
        Send Message
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
        <Shield className="w-3.5 h-3.5" />
        Your info is never shared or sold. Brandon reads every message personally.
      </p>
    </form>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "Brandon personally responds to every inquiry, usually within a few hours on business days. If your need is urgent, the fastest way to reach us is by phone: (559) 282-3075.",
  },
  {
    q: "Is there a setup fee or contract?",
    a: "No setup fee, ever - and no contracts. Everything is month-to-month. You can cancel anytime with no penalty.",
  },
  {
    q: "What does the $99/month include?",
    a: "Everything: custom website design, unlimited content updates, hosting, SSL certificate, backups, security monitoring, free redesigns whenever you want a fresh look, and priority support. The only extra is your domain name (typically $15–20/year).",
  },
  {
    q: "How long does it take to launch a new site?",
    a: "Most new websites are live within 5–7 business days. You'll review and approve the design before anything goes public.",
  },
  {
    q: "I already have a website. Can you take it over?",
    a: "Absolutely. We can migrate your existing site, redesign it completely, or make incremental improvements - whatever fits your goals. Your domain always stays yours.",
  },
  {
    q: "Do you work with businesses outside California?",
    a: "Yes - CalTech Web serves clients nationwide. Everything is handled remotely, so location is never a barrier.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Brandon personally guarantees your satisfaction. If you're not happy, you get a full refund and keep your website. No questions asked.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Quick answers to the questions we hear most.
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
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
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
          <a href="mailto:Brandon@CalTechWeb.com" className="text-blue-600 font-semibold hover:underline">
            Email Brandon
          </a>{" "}
          or call{" "}
          <a href="tel:5592823075" className="text-blue-600 font-semibold hover:underline">
            (559) 282-3075
          </a>
          .
        </p>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact CalTech Web",
            url: "https://caltechweb.com/contact-us/",
            description:
              "Get in touch with Brandon Hopkins at CalTech Web. Affordable website design starting at $99/month for small businesses, churches, and non-profits.",
            mainEntity: {
              "@type": "Organization",
              name: "CalTech Web",
              telephone: "+15592823075",
              email: "Brandon@CalTechWeb.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+15592823075",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-200 mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            Brandon reads every message personally
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Let&apos;s Talk About Your Website
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Whether you&apos;re starting from scratch or looking to upgrade, we&apos;ll help you
            get a professional site live in 5–7 days - for just $99/month, all-inclusive.
          </p>

          {/* Quick contact options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call (559) 282-3075
            </a>
            <a
              href="mailto:Brandon@CalTechWeb.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Brandon@CalTechWeb.com
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Phone</p>
                      <a
                        href="tel:5592823075"
                        className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors"
                      >
                        (559) 282-3075
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                      <a
                        href="mailto:Brandon@CalTechWeb.com"
                        className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors"
                      >
                        Brandon@CalTechWeb.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Response Time</p>
                      <p className="text-gray-800 font-semibold text-sm">
                        Usually within a few hours
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        93% of support requests done in under 1 hour
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What to expect */}
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <h3 className="text-sm font-bold text-blue-900 mb-3">What Happens Next</h3>
                <ol className="space-y-2.5">
                  {[
                    "Brandon reviews your message personally",
                    "We chat about your goals and timeline",
                    "We discuss your goals and get started",
                    "Your site is live in 5–7 business days",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-blue-800">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust signals */}
              <div className="space-y-2">
                {[
                  "800+ websites managed",
                  "No contracts, cancel anytime",
                  "Satisfaction guaranteed or full refund",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
