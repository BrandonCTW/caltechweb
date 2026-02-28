"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const faqs: { q: string; a: ReactNode }[] = [
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
    a: (
      <>
        Everything: custom website design, unlimited content updates, hosting, SSL certificate,
        backups, security monitoring, free redesigns whenever you want a fresh look, and priority
        support. The only extra is your domain name (typically $15–20/year).{" "}
        <Link href="/web-design-pricing/" className="text-blue-600 font-semibold hover:underline">
          See the full pricing breakdown.
        </Link>
      </>
    ),
  },
  {
    q: "How long does it take to launch a new site?",
    a: "Most new websites are live within 5–7 business days. You'll review and approve the design before anything goes public.",
  },
  {
    q: "I already have a website. Can you take it over?",
    a: (
      <>
        Absolutely. We can migrate your existing site, redesign it completely, or make incremental
        improvements - whatever fits your goals. Your domain always stays yours.{" "}
        <Link href="/web-design-portfolio/" className="text-blue-600 font-semibold hover:underline">
          Browse our portfolio
        </Link>{" "}
        to see examples of recent work.
      </>
    ),
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

export default function ContactFAQ() {
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
