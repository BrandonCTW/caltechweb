"use client";

import { useState } from "react";
import { ArrowRight, TrendingDown, DollarSign } from "lucide-react";

const options = [
  { label: "No website yet", monthly: 0, desc: "Starting fresh" },
  { label: "$50–150/mo", monthly: 100, desc: "DIY builder (Wix, Squarespace)" },
  { label: "$300/mo", monthly: 300, desc: "Part-time freelancer" },
  { label: "$600/mo", monthly: 600, desc: "Small agency" },
  { label: "$1,500/mo", monthly: 1500, desc: "Mid-size agency" },
];

const CALTECH_ANNUAL = 99 * 12; // $1,188

export default function SavingsCalculator() {
  const [selectedIndex, setSelectedIndex] = useState(3); // default: $600/mo agency
  const selected = options[selectedIndex];
  const currentAnnual = selected.monthly * 12;
  const savedAnnual = currentAnnual -CALTECH_ANNUAL;
  const savedPercent =
    currentAnnual > 0 ? Math.round((savedAnnual / currentAnnual) * 100) : 0;

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold border border-green-200 mb-4">
            <DollarSign className="w-4 h-4" />
            See Your Savings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How Much Could You Save?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Select what you&apos;re currently paying and see your real annual savings
            with CalTech Web.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 sm:p-10">
          {/* Option selector */}
          <p className="text-sm font-semibold text-gray-700 mb-4">
            What are you currently paying for your website?
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`flex-shrink-0 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all text-left cursor-pointer ${
                  selectedIndex === i
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div>{opt.label}</div>
                <div
                  className={`text-xs font-normal mt-0.5 ${
                    selectedIndex === i ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>

          {/* Result panel */}
          <div
            className={`rounded-2xl p-6 transition-all ${
              savedAnnual > 0
                ? "bg-green-50 border border-green-100"
                : "bg-blue-50 border border-blue-100"
            }`}
          >
            {selected.monthly === 0 ? (
              /* No current website */
              <div className="text-center py-2">
                <div className="text-2xl font-extrabold text-blue-700 mb-2">
                  Get a professional website for just $99/month
                </div>
                <p className="text-blue-600 text-sm">
                  That&apos;s $1,188/year - custom design, unlimited updates, hosting,
                  and support all included.
                </p>
              </div>
            ) : (
              /* Has a current spend */
              <div className="grid sm:grid-cols-3 gap-4 items-center text-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    You currently pay
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900">
                    ${currentAnnual.toLocaleString()}
                    <span className="text-base font-normal text-gray-400">/yr</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    (${selected.monthly}/mo)
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    With CalTech Web
                  </div>
                  <div className="text-3xl font-extrabold text-blue-700">
                    $1,188
                    <span className="text-base font-normal text-blue-400">/yr</span>
                  </div>
                  <div className="text-xs text-blue-400 mt-0.5">($99/mo)</div>
                </div>
              </div>
            )}

            {savedAnnual > 0 && (
              <div className="mt-5 pt-5 border-t border-green-200 text-center">
                <p className="text-green-800 font-bold text-lg">
                  You&apos;d save{" "}
                  <span className="text-3xl font-extrabold text-green-700">
                    ${savedAnnual.toLocaleString()}
                  </span>{" "}
                  per year - {" "}
                  <span className="text-green-600">{savedPercent}% less</span>{" "}
                  than what you&apos;re paying now.
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/web-design-pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5"
            >
              Get My Website
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400">
              No long-term contracts &middot; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
