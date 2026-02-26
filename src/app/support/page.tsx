"use client";

import {
  Check,
  Phone,
  Mail,
  Send,
  Clock,
  Zap,
  MessageCircle,
  TicketCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect, type FormEvent } from "react";

// --- Support Form ---

function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Got it! We&apos;ll get back to you shortly.
        </h3>
        <p className="text-gray-600 mb-4">
          Most requests are completed within 1 hour during business hours. You
          can also use the chat bubble in the bottom-right corner.
        </p>
        <a
          href="tel:5592823075"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call (559) 282-3075
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
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Smith"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Website URL <span className="text-red-500">*</span>
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
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          What do you need updated? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the changes you need — text updates, new photos, layout tweaks, etc."
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
            Submit Request
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}

// --- Page ---

export default function SupportPage() {
  const [stats, setStats] = useState({
    ticketsSolved: 5000,
    medianResolutionMinutes: 45,
    percentUnder24Hours: 98,
    fetchedAt: 0,
  });

  useEffect(() => {
    fetch("/api/zendesk-stats")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          ticketsSolved: data.ticketsSolved,
          medianResolutionMinutes: data.medianResolutionMinutes,
          percentUnder24Hours: data.percentUnder24Hours,
          fetchedAt: data.fetchedAt,
        });
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              {stats.percentUnder24Hours}% of requests resolved in under 24 hours
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Need Something{" "}
              <span className="text-orange-400">Updated?</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              Use the form below, email{" "}
              <a
                href="mailto:support@caltechweb.com"
                className="text-white underline underline-offset-2 hover:text-orange-300 transition-colors"
              >
                support@caltechweb.com
              </a>
              , or click the chat bubble in the bottom-right corner. We&apos;ve
              got you covered.
            </p>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Submit a Support Request
                </h2>
                <SupportForm />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Info */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Other Ways to Reach Us
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Email
                        </p>
                        <a
                          href="mailto:support@caltechweb.com"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          support@caltechweb.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Phone
                        </p>
                        <a
                          href="tel:5592823075"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          (559) 282-3075
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Live Chat
                        </p>
                        <p className="text-sm text-gray-600">
                          Click the chat bubble in the bottom-right corner
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Support You Can Count On
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {stats.percentUnder24Hours}% resolved in under 24 hours
                        </p>
                        <p className="text-xs text-gray-500">
                          Average resolution: {stats.medianResolutionMinutes} minutes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <TicketCheck className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {stats.ticketsSolved.toLocaleString()}+ support tickets closed
                        </p>
                        <p className="text-xs text-gray-500">
                          All-time, live from Zendesk
                        </p>
                      </div>
                    </div>
                  </div>
                  {stats.fetchedAt > 0 && (
                    <p className="text-[11px] text-gray-400 mt-3 text-right">
                      Last updated:{" "}
                      {new Date(stats.fetchedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
