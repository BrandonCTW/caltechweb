import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    industryColor: "bg-green-100 text-green-700",
    headline: "55% Traffic Increase & 1,000+ Pages Built",
    description:
      "How CalTech Web helped the Madera County Farm Bureau transform their digital presence with a custom scholarship portal, membership management, and comprehensive content — all for $99/month.",
    image: "/portfolio/madera-county-farm-bureau.png",
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
    industryColor: "bg-blue-100 text-blue-700",
    headline: "40% Traffic Increase & 2× Appointment Conversions in 90 Days",
    description:
      "A busy plastic surgery practice with an outdated website. Here's exactly what we changed and the measurable results: 40% more organic traffic, doubled appointment conversions, and 12+ additional patient inquiries per month, all within 90 days.",
    image: "/portfolio/arjun-kanuri-after.png",
    stats: [
      { value: "+40%", label: "Organic Traffic" },
      { value: "2×", label: "Conversions" },
      { value: "5 days", label: "Launch Time" },
    ],
  },
  {
    href: "/case-studies/sutoer-solutions/",
    client: "Sutoer Solutions",
    industry: "Staffing & Recruiting",
    industryColor: "bg-purple-100 text-purple-700",
    headline: "Custom Job Database with a Password-Protected Admin Portal",
    description:
      "A 25-year-old IT and finance staffing firm needed a modern website and a way to manage job listings without calling a developer. CalTech Web built a custom job database with a clean admin backend, all for $99/month.",
    image: "/portfolio/sutoer-solutions.png",
    stats: [
      { value: "Custom", label: "Job Database" },
      { value: "0", label: "Developers Needed" },
      { value: "$99/mo", label: "Total Cost" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Real Clients. Real Results.
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              See what&apos;s possible when you partner with CalTech Web for $99/month, all-inclusive.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-blue-500">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">3+</div>
                <div className="text-blue-200 text-sm">Years Average Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">$99/mo</div>
                <div className="text-blue-200 text-sm">All-Inclusive Pricing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="text-blue-200 text-sm">Client Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-10">
            {caseStudies.map(({ href, client, industry, industryColor, headline, description, image, stats }, index) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto min-h-[280px] overflow-hidden bg-gray-100 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={image}
                      alt={`${client} website`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${industryColor}`}>
                      {industry}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {client}
                    </h2>
                    <p className="text-base font-semibold text-gray-700 mb-3">{headline}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6 pb-6 border-b border-gray-100">
                      {stats.map(({ value, label }) => (
                        <div key={label}>
                          <div className="text-2xl font-extrabold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">Ready to Be Our Next Case Study?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get a professional website for $99/month — hosting, updates, and support all included.
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
