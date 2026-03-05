import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies | CalTech Web",
  description:
    "See real results from CalTech Web clients. From traffic growth to custom features, these case studies show what's possible for $99/month.",
};

const caseStudies = [
  {
    href: "/case-studies/madera-county-farm-bureau/",
    client: "Madera County Farm Bureau",
    industry: "Agriculture / Non-Profit",
    headline: "55% Traffic Increase & 1,000+ Pages Built",
    description:
      "How CalTech Web helped the Madera County Farm Bureau transform their digital presence with a custom scholarship portal, membership management, and comprehensive content, all for $99/month.",
    stats: [
      { value: "55%", label: "Traffic Growth" },
      { value: "1,000+", label: "Pages Built" },
      { value: "3+ yrs", label: "Partnership" },
    ],
  },
  {
    href: "/case-studies/medical-practice-website-design/",
    client: "Dr. Arjun Kanuri",
    industry: "Medical Practice",
    headline: "40% Traffic Increase & 2× Appointment Conversions in 90 Days",
    description:
      "A busy plastic surgery practice with an outdated website. Here's exactly what we changed and the measurable results: 40% more organic traffic, doubled appointment conversions, and 12+ additional patient inquiries per month, all within 90 days.",
    stats: [
      { value: "+40%", label: "Organic Traffic" },
      { value: "2×", label: "Conversions" },
      { value: "5 days", label: "Launch Time" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Real Clients. Real Results.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what&apos;s possible when you partner with CalTech Web for $99/month, all-inclusive.
            </p>
          </div>
        </section>

        {/* Case Study Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid gap-8">
            {caseStudies.map(({ href, client, industry, headline, description, stats }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                        {industry}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {client}
                      </h2>
                    </div>
                    <TrendingUp className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
                  </div>

                  <p className="text-lg font-semibold text-gray-700 mb-3">{headline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {stats.map(({ value, label }) => (
                      <div key={label}>
                        <div className="text-2xl font-extrabold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500">{label}</div>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">Ready to Be Our Next Case Study?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get a professional website for $99/month, hosting, updates, and support all included.
            </p>
            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 transition-colors shadow-lg"
            >
              Schedule a Free Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
