"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is there a setup fee or long-term contract?",
    a: "No setup fee, ever. And no contracts - your service is month-to-month. If you decide to leave, just let us know and we'll cancel without penalty. We'd rather earn your business every month than lock you in.",
  },
  {
    q: "What does \"unlimited updates\" actually mean?",
    a: "It means exactly that - unlimited. Need new photos added? Update your hours or menu? Add a page for a new service? Just send us a message and we'll handle it, usually within the hour. There's no cap on how many requests you can make.",
  },
  {
    q: "How fast will my website be live?",
    a: "Most new websites are designed, built, and live within 5–7 business days. You'll have a chance to review and approve everything before it goes live. If you need something faster, reach out and we'll do our best.",
  },
  {
    q: "I already have a website. Can you switch me over?",
    a: "Absolutely. We can migrate your existing site, do a complete redesign, or start fresh - whatever makes the most sense for your business. Your domain stays yours. We'll handle the technical side of the move.",
  },
  {
    q: "Do you work with clients outside of California?",
    a: "Yes - we serve clients nationwide. While CalTech Web is based in California, we work with small businesses, churches, and non-profits across the country. Everything is handled remotely so location is never a barrier.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Brandon personally guarantees your satisfaction. If you're not happy, you get a full refund - and you keep your website. No questions asked. We've maintained this guarantee since day one because we stand behind our work.",
  },
  {
    q: "Does $99/month include hosting?",
    a: "Yes. Hosting, SSL certificate, backups, and security are all included in the $99/month. You won't get a separate bill for hosting. The only other cost you'd have is your domain name (usually $15–20/year from a registrar of your choice).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about the $99/month plan.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white">
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

        {/* Bottom nudge */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Still have a question?{" "}
          <a
            href="mailto:Brandon@CalTechWeb.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            Email Brandon directly
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
