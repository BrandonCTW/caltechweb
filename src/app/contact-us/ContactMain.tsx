"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Check,
  Shield,
  ArrowUpRight,
} from "lucide-react";
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

// ─── Main Content Section ────────────────────────────────────────────────────

export default function ContactMain() {
  return (
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
                  "We schedule a quick call to discuss your goals",
                  "You receive a custom design mockup to review",
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

            {/* Internal links */}
            <div className="border-t border-gray-100 pt-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Learn More</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/web-design-pricing/"
                    className="flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    Web design pricing — $99/month
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-design-portfolio/"
                    className="flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    View our web design portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affordable-church-websites/"
                    className="flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    Affordable church websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brandon-hopkins/"
                    className="flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    About Brandon Hopkins — CEO & Founder
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
