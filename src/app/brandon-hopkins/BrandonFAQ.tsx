"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { brandonFaqs } from "./faq-data";

export default function BrandonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Questions About Working With Brandon
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Straight answers about what it&apos;s like to have Brandon build and
            manage your website.
          </p>
        </div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
          {brandonFaqs.map(({ q, a }, i) => {
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
          Have another question?{" "}
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
