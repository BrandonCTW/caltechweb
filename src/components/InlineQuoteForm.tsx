"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";
import Link from "next/link";

export default function InlineQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({ name: "", business: "", contact: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    try {
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "caltechweb.com",
          name: fields.name,
          email: fields.contact,
          message: `Business Type: ${fields.business || "not specified"}\nContact: ${fields.contact}`,
          source: "homepage-quote",
        }),
      });
    } catch {
      // Submit optimistically — don't block user on network errors
    } finally {
      setSending(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <section id="get-started" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-2xl inline-block w-full">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" strokeWidth={3} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Got it, we'll be in touch soon!
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Brandon personally reviews every request. Expect to hear back within a few hours, usually sooner.
            </p>
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm"
            >
              Need it faster? Call (559) 282-3075
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-sm font-semibold text-blue-100 mb-4">
            <Zap className="w-4 h-4 text-yellow-300" />
            Takes less than 60 seconds
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Get Your Website Started
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Tell us a little about your business and we&apos;ll get your
            new website underway, no obligation, no sales pressure.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={fields.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="business"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Business Type
              </label>
              <select
                id="business"
                name="business"
                value={fields.business}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm bg-white"
              >
                <option value="">Select your type…</option>
                <option value="restaurant">Restaurant / Food</option>
                <option value="church">Church / Non-Profit</option>
                <option value="healthcare">Healthcare / Medical</option>
                <option value="retail">Retail / Shop</option>
                <option value="contractor">Contractor / Trades</option>
                <option value="professional">Professional Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email or Phone
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                placeholder="you@yourbusiness.com"
                value={fields.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? "Sending…" : "Get My Website"}
              {!sending && <ArrowRight className="w-5 h-5" />}
            </button>
            <p className="text-sm text-gray-400">
              Or call us directly at{" "}
              <a
                href="tel:5592823075"
                className="text-blue-600 font-semibold hover:underline"
              >
                (559) 282-3075
              </a>
            </p>
          </div>
        </form>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-blue-100">
          {[
            "No obligation",
            "No sales pressure",
            "Response in under 24 hours",
            "Cancel anytime",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-300 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
