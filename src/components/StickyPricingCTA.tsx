"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, Check, Phone } from "lucide-react";

export default function StickyPricingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      // Show after user scrolls past ~600px (below the fold / past the hero)
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`hidden md:block fixed bottom-6 right-6 z-40 w-64 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
      role="complementary"
      aria-label="Pricing reminder"
    >
      <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header strip */}
        <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
              All-Inclusive Plan
            </div>
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-sm font-bold text-white">$</span>
              <span className="text-3xl font-extrabold text-white leading-none">99</span>
              <span className="text-sm text-blue-200 mb-0.5">/mo</span>
            </div>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss pricing reminder"
            className="p-1 text-blue-300 hover:text-white transition-colors -mt-2 -mr-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Feature pills */}
        <div className="px-4 py-3 space-y-1.5">
          {[
            "Unlimited updates",
            "Free redesigns",
            "Hosting & SSL included",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={3} />
              </div>
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          <a
            href="#get-started"
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors shadow-md"
          >
            Get My Website
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="tel:5592823075"
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            (559) 282-3075
          </a>
        </div>
      </div>
    </div>
  );
}
