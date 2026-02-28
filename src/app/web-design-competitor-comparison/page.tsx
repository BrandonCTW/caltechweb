import type { Metadata } from "next";
import {
  Check,
  Phone,
  ArrowRight,
  Zap,
  Star,
  TrendingUp,
  X,
  Shield,
  RefreshCw,
  HeadphonesIcon,
  Clock,
  DollarSign,
  Users,
  Palette,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Comparison: CalTech Web vs DIY & Agencies",
  description:
    "Compare CalTech Web's $99/month web design to DIY builders, freelancers, and agencies. See why 800+ businesses chose affordable web design.",
  alternates: {
    canonical: "https://caltechweb.com/web-design-competitor-comparison/",
  },
  openGraph: {
    title:
      "Web Design Company Comparison - CalTech Web vs the Competition | CalTech Web",
    description:
      "Side-by-side comparison of CalTech Web ($99/mo) vs Wix, Squarespace, freelancers, and agencies. Custom design, hosting, unlimited updates - all included.",
    url: "https://caltechweb.com/web-design-competitor-comparison/",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins - Founder of CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/brandon-hopkins.jpg"],
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://caltechweb.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Web Design Comparison",
      item: "https://caltechweb.com/web-design-competitor-comparison/",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Design Options Comparison",
  description:
    "Side-by-side comparison of web design options: CalTech Web vs DIY builders, freelancers, and traditional agencies.",
  url: "https://caltechweb.com/web-design-competitor-comparison/",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CalTech Web",
      description:
        "$99/month all-inclusive: custom design, hosting, SSL, unlimited updates, free redesigns, and priority support with 93% of requests done in under 1 hour.",
      url: "https://caltechweb.com/web-design-pricing/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "DIY Website Builders (Wix / Squarespace)",
      description:
        "$16-50/month. Template-based, self-service. You design and maintain the site yourself. No dedicated support, no custom design, limited SEO control.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Freelancer",
      description:
        "$2,000-10,000 upfront plus $50-150/month. Custom design but large upfront cost, no guaranteed availability, and no hosting or support included.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Traditional Web Design Agency",
      description:
        "$5,000-50,000+ upfront plus $500-2,000/month. Enterprise-grade work but prohibitive cost, long timelines, and multi-year contracts common.",
    },
  ],
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <TrendingUp className="w-4 h-4 text-yellow-400" />
          See exactly how we stack up
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Web Design Pricing{" "}
          <span className="text-orange-400">Compared</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          DIY website builders. Freelancers. Big agencies. How does $99/month
          with CalTech Web actually compare? Here is the honest breakdown - so
          you can decide with confidence.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Custom Design",
            "Hosting Included",
            "Unlimited Updates",
            "$99/month",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-blue-100"
            >
              <Check className="w-3.5 h-3.5 text-green-400" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            See Pricing Details
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (559) 282-3075
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Trust Bar ──────────────────────────────────────────────────────────

const stats = [
  { value: "800+", label: "Websites Built" },
  { value: "93%", label: "Updates Done in <1 Hour" },
  { value: "5,000+", label: "Support Tickets Closed" },
  { value: "5-7", label: "Days to Launch" },
];

function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 leading-none mb-1">
                {value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Comparison Table ────────────────────────────────────────────────────

const competitors = [
  {
    name: "CalTech Web",
    price: "$99/mo",
    upfront: "$0",
    highlight: true,
    badge: "Best Value",
    features: {
      "Custom design": true,
      "Hosting included": true,
      "SSL certificate": true,
      "Unlimited content updates": true,
      "Free redesigns": true,
      "Priority support (93% in <1 hr)": true,
      "SEO basics included": true,
      "Mobile responsive": true,
      "Daily backups": true,
      "No contracts": true,
      "Dedicated account manager": true,
      "5-7 day launch": true,
    },
  },
  {
    name: "DIY Builders",
    subtitle: "Wix / Squarespace",
    price: "$16-50/mo",
    upfront: "$0",
    highlight: false,
    badge: null,
    features: {
      "Custom design": false,
      "Hosting included": true,
      "SSL certificate": true,
      "Unlimited content updates": "self-service",
      "Free redesigns": false,
      "Priority support (93% in <1 hr)": false,
      "SEO basics included": "limited",
      "Mobile responsive": "template",
      "Daily backups": "varies",
      "No contracts": true,
      "Dedicated account manager": false,
      "5-7 day launch": false,
    },
  },
  {
    name: "Freelancer",
    subtitle: "Typical",
    price: "$50-150/mo",
    upfront: "$2K-10K",
    highlight: false,
    badge: null,
    features: {
      "Custom design": true,
      "Hosting included": false,
      "SSL certificate": false,
      "Unlimited content updates": false,
      "Free redesigns": false,
      "Priority support (93% in <1 hr)": false,
      "SEO basics included": "extra cost",
      "Mobile responsive": true,
      "Daily backups": false,
      "No contracts": "varies",
      "Dedicated account manager": false,
      "5-7 day launch": false,
    },
  },
  {
    name: "Agency",
    subtitle: "Traditional",
    price: "$500-2,000/mo",
    upfront: "$5K-50K+",
    highlight: false,
    badge: null,
    features: {
      "Custom design": true,
      "Hosting included": "varies",
      "SSL certificate": "varies",
      "Unlimited content updates": false,
      "Free redesigns": false,
      "Priority support (93% in <1 hr)": false,
      "SEO basics included": "extra cost",
      "Mobile responsive": true,
      "Daily backups": "varies",
      "No contracts": false,
      "Dedicated account manager": "sometimes",
      "5-7 day launch": false,
    },
  },
];

const featureRows = [
  "Custom design",
  "Hosting included",
  "SSL certificate",
  "Unlimited content updates",
  "Free redesigns",
  "Priority support (93% in <1 hr)",
  "SEO basics included",
  "Mobile responsive",
  "Daily backups",
  "No contracts",
  "Dedicated account manager",
  "5-7 day launch",
];

function FeatureValue({
  val,
  highlight,
}: {
  val: boolean | string;
  highlight: boolean;
}) {
  if (val === true) {
    return (
      <div className="flex justify-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            highlight ? "bg-green-500" : "bg-green-100"
          }`}
        >
          <Check
            className={`w-3.5 h-3.5 ${
              highlight ? "text-white" : "text-green-600"
            }`}
            strokeWidth={3}
          />
        </div>
      </div>
    );
  }
  if (val === false) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
          <X className="w-3.5 h-3.5 text-red-400" strokeWidth={3} />
        </div>
      </div>
    );
  }
  return <span className="text-xs text-gray-400 italic">{val}</span>;
}

function MobileComparisonCards() {
  return (
    <div className="sm:hidden space-y-4">
      {competitors.map((c) => (
        <div
          key={c.name}
          className={`rounded-2xl overflow-hidden ${
            c.highlight
              ? "border-2 border-blue-500 shadow-lg shadow-blue-100"
              : "border border-gray-200"
          }`}
        >
          {/* Card header */}
          <div
            className={`px-5 py-4 ${
              c.highlight ? "bg-blue-600 text-white" : "bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  className={`font-bold text-lg ${
                    c.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {c.name}
                </div>
                {"subtitle" in c && c.subtitle && (
                  <div
                    className={`text-xs ${
                      c.highlight ? "text-blue-200" : "text-gray-400"
                    }`}
                  >
                    {c.subtitle}
                  </div>
                )}
              </div>
              <div className="text-right">
                <div
                  className={`font-extrabold text-lg ${
                    c.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {c.price}
                </div>
                <div
                  className={`text-xs ${
                    c.highlight ? "text-blue-200" : "text-gray-400"
                  }`}
                >
                  Upfront: {c.upfront}
                </div>
              </div>
            </div>
            {c.badge && (
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-orange-500 text-white text-xs font-bold">
                {c.badge}
              </span>
            )}
          </div>

          {/* Card feature list */}
          <div className="bg-white divide-y divide-gray-50">
            {featureRows.map((feature) => {
              const val = c.features[feature as keyof typeof c.features];
              return (
                <div
                  key={feature}
                  className="flex items-center justify-between px-5 py-3"
                >
                  <span className="text-sm text-gray-700 font-medium pr-3">
                    {feature}
                  </span>
                  <div className="shrink-0">
                    <FeatureValue val={val} highlight={c.highlight} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Honest side-by-side comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            The Full Comparison
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            See exactly what you get - and what you don&apos;t - with each
            option. No fine print, no surprises.
          </p>
        </div>

        {/* Cost callout */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl px-6 py-4 mb-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">
              Save thousands per year vs. freelancers and agencies
            </div>
            <div className="text-sm text-gray-500">
              Agencies charge $5K-$50K+ upfront, then $500-$2,000/month for
              maintenance. CalTech Web: $0 upfront, $99/month - with more
              included.
            </div>
          </div>
        </div>

        {/* Mobile card layout */}
        <MobileComparisonCards />

        {/* Desktop comparison table */}
        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-gray-500 font-semibold w-[28%]">
                  Feature
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`px-4 py-4 text-center font-bold ${
                      c.highlight
                        ? "text-blue-600 bg-blue-50/60"
                        : "text-gray-700"
                    }`}
                  >
                    <div>{c.name}</div>
                    {"subtitle" in c && c.subtitle && (
                      <div className="text-[10px] text-gray-400 font-normal">
                        {c.subtitle}
                      </div>
                    )}
                    <div
                      className={`text-xs font-normal mt-0.5 ${
                        c.highlight ? "text-blue-500" : "text-gray-400"
                      }`}
                    >
                      {c.price}
                    </div>
                    <div className="text-[10px] text-gray-400 font-normal">
                      Upfront: {c.upfront}
                    </div>
                    {c.badge && (
                      <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold">
                        {c.badge}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((feature, i) => (
                <tr
                  key={feature}
                  className={`border-b border-gray-50 last:border-0 ${
                    i % 2 === 0 ? "" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-6 py-3.5 text-gray-700 font-medium">
                    {feature}
                  </td>
                  {competitors.map((c) => {
                    const val =
                      c.features[feature as keyof typeof c.features];
                    return (
                      <td
                        key={c.name}
                        className={`px-4 py-3.5 text-center ${
                          c.highlight ? "bg-blue-50/40" : ""
                        }`}
                      >
                        <FeatureValue val={val} highlight={c.highlight} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website for $99/mo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            No setup fee &middot; No contracts &middot; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Deep Dive Sections ──────────────────────────────────────────────────────

const deepDive = [
  {
    icon: Palette,
    color: "text-purple-600 bg-purple-50",
    title: "CalTech Web vs. DIY Builders (Wix, Squarespace)",
    cost: "$16-50/month",
    pros: [
      "Low monthly cost",
      "Drag-and-drop simplicity",
      "Hosting included",
    ],
    cons: [
      "Template-based - your site looks like thousands of others",
      "You do all the work yourself",
      "Limited SEO control",
      "No dedicated support person",
      "Redesigns mean starting from scratch",
    ],
    verdict:
      "DIY builders are cheap, but they cost you time. If your website matters to your business, you need a professional design - not a template. CalTech Web gives you a custom site for just $49-$83 more per month, and you never have to touch it.",
  },
  {
    icon: Users,
    color: "text-blue-600 bg-blue-50",
    title: "CalTech Web vs. Freelancers",
    cost: "$2,000-10,000 upfront + $50-150/month",
    pros: [
      "Custom design",
      "Personal relationship",
      "Flexible",
    ],
    cons: [
      "Large upfront cost ($2K-$10K)",
      "Ongoing maintenance billed hourly ($50-$150/hr)",
      "Hosting, SSL, backups are your responsibility",
      "Freelancers disappear - vacations, other clients, career changes",
      "No guaranteed response times",
      "Redesigns cost thousands more",
    ],
    verdict:
      "Freelancers deliver quality work, but they come with big upfront costs and no guarantees on availability. With CalTech Web, you get the same personal attention (Brandon is your single point of contact) at a fraction of the cost - with hosting, updates, and redesigns all included.",
  },
  {
    icon: Shield,
    color: "text-orange-600 bg-orange-50",
    title: "CalTech Web vs. Agencies",
    cost: "$5,000-50,000+ upfront + $500-2,000/month",
    pros: [
      "Full-service design and development",
      "Large teams with diverse expertise",
      "Enterprise-grade work",
    ],
    cons: [
      "Massive upfront investment",
      "Monthly retainers of $500-$2,000+",
      "Updates billed hourly or per-project",
      "Long timelines (4-12 weeks typical)",
      "Multi-year contracts are common",
      "You are one of many clients",
    ],
    verdict:
      "Agencies make sense for Fortune 500 companies with six-figure budgets. For small businesses, churches, and non-profits, they are overkill. CalTech Web delivers the same quality result - custom design, ongoing updates, hosting, and support - at 80-95% less cost.",
  },
];

function DeepDive() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            The Detailed Breakdown
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A closer look at each option - the real pros, cons, and costs nobody
            else tells you about.
          </p>
        </div>

        <div className="space-y-8">
          {deepDive.map(
            ({ icon: Icon, color, title, cost, pros, cons, verdict }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="px-8 py-6 border-b border-gray-100 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Typical cost: {cost}
                    </p>
                  </div>
                </div>

                <div className="px-8 py-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3">
                      Their Strengths
                    </h4>
                    <ul className="space-y-2">
                      {pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3">
                      Their Weaknesses
                    </h4>
                    <ul className="space-y-2">
                      {cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-8 py-5 bg-blue-50 border-t border-blue-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-700">
                      The verdict:{" "}
                    </span>
                    {verdict}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Monthly Cost Comparison ─────────────────────────────────────────────────

const costBarData = [
  {
    name: "CalTech Web",
    year1: "$1,188",
    year1Max: 1188,
    breakdown: "$0 upfront + $99/mo",
    highlight: true,
    barColor: "bg-blue-600",
    textColor: "text-blue-600",
    savings: null as string | null,
  },
  {
    name: "DIY Builder",
    year1: "$192-600",
    year1Max: 600,
    breakdown: "$0 upfront + $16-50/mo",
    highlight: false,
    barColor: "bg-gray-300",
    textColor: "text-gray-600",
    savings: "Cheaper but you do all the work",
  },
  {
    name: "Freelancer",
    year1: "$2,600-11,800",
    year1Max: 11800,
    breakdown: "$2K-10K upfront + $50-150/mo",
    highlight: false,
    barColor: "bg-orange-400",
    textColor: "text-orange-600",
    savings: "Save up to $10,612/yr with CalTech Web",
  },
  {
    name: "Agency",
    year1: "$11,000-74,000+",
    year1Max: 74000,
    breakdown: "$5K-50K+ upfront + $500-2K/mo",
    highlight: false,
    barColor: "bg-red-400",
    textColor: "text-red-600",
    savings: "Save up to $72,812/yr with CalTech Web",
  },
];

function CostComparison() {
  const maxCost = 74000;

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-4">
            <DollarSign className="w-4 h-4" />
            Real cost over 12 months
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What You Actually Pay in Year One
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Upfront costs plus monthly fees. The numbers speak for themselves.
          </p>
        </div>

        {/* Visual cost bar chart */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
          <div className="space-y-6">
            {costBarData.map(
              ({
                name,
                year1,
                year1Max,
                breakdown,
                highlight,
                barColor,
                textColor,
                savings,
              }) => {
                const widthPercent = Math.max(
                  (year1Max / maxCost) * 100,
                  2
                );
                return (
                  <div key={name}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-bold ${
                            highlight ? "text-blue-700" : "text-gray-700"
                          }`}
                        >
                          {name}
                        </span>
                        {highlight && (
                          <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold leading-none">
                            Best Value
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-sm font-extrabold ${textColor}`}
                        >
                          {year1}
                        </span>
                        <span className="text-xs text-gray-400 ml-1.5 hidden sm:inline">
                          ({breakdown})
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-4 sm:h-5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor} ${
                          highlight ? "shadow-md shadow-blue-200" : ""
                        }`}
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                    {savings && (
                      <p className="text-xs text-gray-400 mt-1 italic">
                        {savings}
                      </p>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {costBarData.map(({ name, year1, breakdown, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-6 text-center ${
                highlight
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className={`text-sm font-bold mb-1 ${
                  highlight ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {name}
              </div>
              <div
                className={`text-2xl sm:text-3xl font-extrabold mb-2 ${
                  highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {year1}
              </div>
              <div
                className={`text-xs ${
                  highlight ? "text-blue-200" : "text-gray-400"
                }`}
              >
                {breakdown}
              </div>
              {highlight && (
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                  Best Value
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Note: DIY builders are cheaper but require you to design and maintain
          your own site. CalTech Web is fully managed.
        </p>
      </div>
    </section>
  );
}

// ─── Why CalTech Web Wins ────────────────────────────────────────────────────

function WhyCalTechWins() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why 800+ Businesses Chose CalTech Web
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            The best of all worlds - custom quality at DIY prices, with agency-level
            support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              color: "text-orange-600 bg-orange-50",
              title: "Live in 5-7 Days",
              body: "Not 4-12 weeks like agencies. Your custom website is designed, built, and launched in under a week.",
            },
            {
              icon: RefreshCw,
              color: "text-blue-600 bg-blue-50",
              title: "Unlimited Updates",
              body: "Need a change? Email or call Brandon. Text edits, image swaps, new pages - all included in your $99.",
            },
            {
              icon: HeadphonesIcon,
              color: "text-green-600 bg-green-50",
              title: "93% in Under 1 Hour",
              body: "5,000+ support tickets closed. When you need something, it gets done fast - not next Tuesday.",
            },
            {
              icon: Shield,
              color: "text-purple-600 bg-purple-50",
              title: "Money-Back Guarantee",
              body: "Not happy? Full refund, and you keep the website files. Zero risk.",
            },
            {
              icon: Clock,
              color: "text-red-600 bg-red-50",
              title: "No Contracts Ever",
              body: "Month-to-month. Cancel anytime. Though 93% of clients stay for over 2 years.",
            },
            {
              icon: Star,
              color: "text-yellow-600 bg-yellow-50",
              title: "Free Redesigns",
              body: "Want a fresh look? Brandon redesigns your site at no extra cost whenever you are ready for a change.",
            },
          ].map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {title}
                </div>
                <div className="text-sm text-gray-500 leading-relaxed">
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Clients who switched and saved
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real businesses who compared their options and chose CalTech Web.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              quote:
                "I spent $6,000 on a freelancer who disappeared 3 months later. Brandon built me a better site in a week, and I've been paying $99/month for 2 years. The math is obvious.",
              name: "Kevin Park",
              role: "Owner, Park's Plumbing Co.",
              initials: "KP",
              bg: "bg-blue-600",
            },
            {
              quote:
                "We tried Squarespace for our church website. It looked generic and nobody could update it. CalTech Web gave us a custom site that actually represents who we are.",
              name: "Pastor Linda Reyes",
              role: "Grace Fellowship Church",
              initials: "LR",
              bg: "bg-purple-600",
            },
            {
              quote:
                "Our old agency charged $1,200/month and took a week to make simple changes. CalTech Web does it in an hour for $99. I wish I'd switched years ago.",
              name: "Tom Bradley",
              role: "Bradley Insurance Group",
              initials: "TB",
              bg: "bg-green-600",
            },
          ].map(({ quote, name, role, initials, bg }) => (
            <div
              key={name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {name}
                  </div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const comparisonFaqs = [
  {
    q: "Is $99/month really cheaper than Wix or Squarespace?",
    a: "When you factor in your time, it usually is. Wix and Squarespace charge $17–$65/month just for the platform — then you still have to design, build, and maintain the site yourself. First-timers typically spend 40–80 hours building their site. If your time is worth anything, that alone costs far more than $99. And the result is a template-based site you maintain indefinitely, vs. a custom design with someone handling everything for you.",
  },
  {
    q: "What's the real difference between CalTech Web and a freelancer?",
    a: "Three main things: ongoing support, predictable pricing, and reliability. A freelancer charges $2,000–$10,000 upfront, then bills hourly for any change. When they move on or get busy, you're left managing it alone. CalTech Web is $99/month with unlimited updates, and Brandon personally handles every request — often within the hour. You're not managing a vendor relationship; you're getting a dedicated service.",
  },
  {
    q: "Can I switch to CalTech Web if I already have a Wix or Squarespace site?",
    a: "Yes. Brandon will migrate your existing content — text, images, services, and any other pages — to your new site at no extra charge. You won't lose anything. Most clients are live on their new site within 5–7 business days of the switch.",
  },
  {
    q: "How is $99/month different from what a web design agency charges?",
    a: "Agencies typically charge $5,000–$50,000 upfront to build the site, then $500–$2,000/month for ongoing maintenance — often locked into multi-year contracts. CalTech Web is $99/month with no setup fee, no contract, and no minimum term. For a small business, church, or non-profit, the math is straightforward: you get comparable (or better) custom work without the agency overhead.",
  },
  {
    q: "Are there hidden fees beyond $99/month?",
    a: "Only one: your domain name (~$12–15/year), which you purchase and own separately. Everything else — hosting, SSL certificate, unlimited content updates, free redesigns, and priority support — is included in the $99. No surprise invoices.",
  },
  {
    q: "What happens to my website if I cancel?",
    a: "You keep it. CalTech Web will hand over your website files so you're never left with nothing. There's no cancellation fee and no penalty for leaving. Brandon built the service to earn business every month, not trap clients in contracts.",
  },
  {
    q: "Do I need any technical skills to work with CalTech Web?",
    a: "None. You tell Brandon what you need — in plain language, by email or text — and it gets done. No logins, no CMS training, no dealing with plugins or hosting dashboards. If something needs to change on your site, you just ask.",
  },
];

const comparisonFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: comparisonFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

function ComparisonFAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Common questions about switching
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you&apos;re wondering before making a decision — answered honestly.
          </p>
        </div>

        <div className="space-y-3">
          {comparisonFaqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none">
                <span className="font-semibold text-gray-900 pr-4">{q}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Still have questions? Call or email Brandon directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              (559) 282-3075
            </a>
            <a
              href="mailto:Brandon@CalTechWeb.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              Brandon@CalTechWeb.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Ready to see what we build?
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="/web-design-portfolio/"
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              View our web design portfolio
            </Link>
            <span className="text-gray-300" aria-hidden="true">&middot;</span>
            <Link
              href="/web-design-pricing/"
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              See full pricing details
            </Link>
            <span className="text-gray-300" aria-hidden="true">&middot;</span>
            <Link
              href="/affordable-church-websites/"
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Church website plans
            </Link>
            <span className="text-gray-300" aria-hidden="true">&middot;</span>
            <Link
              href="/affordable-web-design-for-small-businesses/"
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Small business web design guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image
            src="/brandon-hopkins.jpg"
            alt="Brandon Hopkins"
            width={2400}
            height={1600}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
          <div className="text-left">
            <div className="text-sm font-bold text-white">Brandon Hopkins</div>
            <div className="text-xs text-blue-200">Founder, CalTech Web</div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to stop overpaying for your website?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Custom design. Unlimited updates. Hosting. SSL. Priority support. All
          for $99/month with no contracts. See why 800+ businesses made the
          switch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            View Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (559) 282-3075
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────────────────

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div
        className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 pt-3 pb-4"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-3">
          <a
            href="tel:5592823075"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link
            href="/web-design-pricing/"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Get My Website
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CompetitorComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonFaqJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <ComparisonTable />
        <DeepDive />
        <CostComparison />
        <WhyCalTechWins />
        <Testimonials />
        <ComparisonFAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
