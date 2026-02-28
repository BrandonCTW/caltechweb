import type { Metadata } from "next";
import {
  Check,
  Phone,
  Shield,
  Star,
  ArrowRight,
  Zap,
  RefreshCw,
  Clock,
  X,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  HeadphonesIcon,
  Lock,
  MessageSquare,
  Palette,
  Headphones,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Pricing - $99/month All-Inclusive | CalTech Web",
  description:
    "Transparent web design pricing at $99/month. Custom design, unlimited updates, hosting, SSL, and priority support included. No contracts.",
  alternates: { canonical: "https://caltechweb.com/web-design-pricing/" },
  openGraph: {
    title: "Web Design Pricing - $99/month All-Inclusive | CalTech Web",
    description:
      "Everything your website needs for one flat monthly fee. Custom design, unlimited updates, hosting, and fast support - all for $99/month.",
    url: "https://caltechweb.com/web-design-pricing/",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "All-Inclusive Website Design Plan",
  description:
    "Custom website design, unlimited updates, free redesigns, hosting, SSL, and priority support - all for $99/month.",
  url: "https://caltechweb.com/web-design-pricing/",
  provider: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
  },
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "99",
      priceCurrency: "USD",
      billingDuration: "P1M",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "800",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Mike Fuentes",
      },
      reviewBody:
        "$99/month is reasonable to get rid of a headache for me. Huge THANK YOU to CalTech Web for producing such a great website for us!",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Dr. Arjun Kanuri",
      },
      reviewBody:
        "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Bryan Newberry",
      },
      reviewBody:
        "Managing my church website and personal ministry website was a significant time commitment, taking up at least 3 hours of my week. Since I enlisted the help of CalTech Web, they have been maintaining my website for many years now. Their services have been invaluable, saving me precious time that I can now devote to furthering my ministry.",
    },
  ],
};

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
      name: "Pricing",
      item: "https://caltechweb.com/web-design-pricing/",
    },
  ],
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          Simple, transparent pricing - no surprises
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Everything Your Website Needs.{" "}
          <span className="text-orange-400">$99/month.</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          One flat monthly fee covers your custom website design, unlimited
          updates, free redesigns, hosting, SSL, and priority support. No hidden
          fees. No contracts. No surprises.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "No Setup Fee",
            "No Contracts",
            "Cancel Anytime",
            "Money-Back Guarantee",
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
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </a>
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
  { value: "5–7", label: "Days to Launch" },
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

// ─── Single Plan Card ─────────────────────────────────────────────────────────

const includedFeatures = [
  { text: "Custom website design tailored to your brand", highlight: true },
  { text: "Unlimited content updates - text, images, pages", highlight: true },
  { text: "Free redesign whenever you want a fresh look", highlight: true },
  { text: "Website hosting - fully managed", highlight: false },
  { text: "SSL certificate (https security)", highlight: false },
  { text: "Daily backups & uptime monitoring", highlight: false },
  { text: "Mobile-responsive on all devices", highlight: false },
  { text: "Basic on-page SEO setup", highlight: false },
  { text: "Priority support - 93% of requests done in <1 hour", highlight: true },
  { text: "Google Analytics integration", highlight: false },
  { text: "Contact forms & click-to-call setup", highlight: false },
  { text: "Domain connection (you keep ownership)", highlight: false },
];

function PricingCard() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-blue-600" />
            One plan. Everything included.
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            All-Inclusive Website Plan
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            No choosing between tiers. No add-ons. Every client gets the full
            package - because you deserve a website that actually works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Card */}
          <div className="relative bg-white rounded-3xl border-2 border-blue-600 shadow-2xl shadow-blue-100 overflow-hidden">
            {/* Best Value ribbon */}
            <div className="absolute top-5 -right-8 bg-orange-500 text-white text-xs font-bold px-10 py-1 rotate-45 shadow-md z-10">
              Best Value
            </div>

            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-10 text-white text-center relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
              <div className="relative">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-3">
                  All-Inclusive Monthly Plan
                </div>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-2xl font-bold mt-2">$</span>
                  <span className="text-8xl font-extrabold leading-none">99</span>
                  <span className="text-xl text-blue-200 mb-2">/mo</span>
                </div>
                <p className="text-blue-200 text-sm mb-4">
                  Everything your website needs - nothing extra to pay
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="text-sm text-blue-200 line-through decoration-red-400">
                    $500–$2,000/mo
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
                  <span className="text-sm font-bold text-white">$99/mo</span>
                </div>
              </div>
            </div>

            {/* Feature list */}
            <div className="px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
                Everything included:
              </div>
              <ul className="space-y-3.5 mb-8">
                {includedFeatures.map(({ text, highlight }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        highlight ? "bg-green-500" : "bg-green-100"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          highlight ? "text-white" : "text-green-600"
                        }`}
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        highlight
                          ? "text-gray-900 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Get My Website
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-center text-xs text-gray-400 mt-4">
                No contracts · Cancel anytime · Refund guaranteed
              </p>
            </div>

            {/* Social proof strip */}
            <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {[
                  { initials: "AK", bg: "bg-blue-600" },
                  { initials: "MG", bg: "bg-green-600" },
                  { initials: "KT", bg: "bg-orange-600" },
                  { initials: "SM", bg: "bg-purple-600" },
                  { initials: "DR", bg: "bg-red-500" },
                ].map(({ initials, bg }) => (
                  <div
                    key={initials}
                    className={`w-7 h-7 rounded-full ${bg} flex items-center justify-center text-white text-[9px] font-bold border-2 border-white`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                Join{" "}
                <span className="font-bold text-gray-900">800+</span> businesses
                already on this plan
              </span>
            </div>
          </div>

          {/* Right: key selling points */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why $99/month is the smartest decision for your business
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: RefreshCw,
                    color: "text-blue-600 bg-blue-50",
                    title: "Unlimited updates included",
                    body: "Need to change your menu, add a new service, update your hours? Just email or call Brandon. Your website stays current - always.",
                  },
                  {
                    icon: Zap,
                    color: "text-orange-600 bg-orange-50",
                    title: "Live in 5–7 business days",
                    body: "Most agencies take 4–12 weeks. We design, build, and launch your website in under a week.",
                  },
                  {
                    icon: HeadphonesIcon,
                    color: "text-green-600 bg-green-50",
                    title: "93% of support requests done in under 1 hour",
                    body: "5,000+ support tickets closed. When something needs fixing or updating, it happens fast - not next Tuesday.",
                  },
                  {
                    icon: Shield,
                    color: "text-purple-600 bg-purple-50",
                    title: "Brandon's personal money-back guarantee",
                    body: "Not happy with your website? Get a full refund - and you keep the site files. No risk, no hassle.",
                  },
                  {
                    icon: Lock,
                    color: "text-gray-600 bg-gray-50",
                    title: "No contracts. Ever.",
                    body: "Month-to-month only. Cancel anytime - though 93% of clients have been with us for over 2 years.",
                  },
                ].map(({ icon: Icon, color, title, body }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-shadow"
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
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Savings Comparison ───────────────────────────────────────────────────────

const competitors = [
  {
    name: "CalTech Web",
    price: "$99/mo",
    highlight: true,
    badge: "Best Value",
    features: {
      "Custom design": true,
      "Unlimited updates": true,
      "Free redesigns": true,
      "Hosting & SSL included": true,
      "Support in <1 hour": true,
      "No contracts": true,
      "Dedicated account manager": true,
      "5–7 day launch": true,
    },
  },
  {
    name: "Typical Agency",
    price: "$500–2,000/mo",
    highlight: false,
    badge: null,
    features: {
      "Custom design": true,
      "Unlimited updates": false,
      "Free redesigns": false,
      "Hosting & SSL included": false,
      "Support in <1 hour": false,
      "No contracts": false,
      "Dedicated account manager": "sometimes",
      "5–7 day launch": false,
    },
  },
  {
    name: "DIY Builder",
    price: "$20–50/mo",
    highlight: false,
    badge: null,
    features: {
      "Custom design": false,
      "Unlimited updates": true,
      "Free redesigns": false,
      "Hosting & SSL included": true,
      "Support in <1 hour": false,
      "No contracts": true,
      "Dedicated account manager": false,
      "5–7 day launch": false,
    },
  },
];

const featureRows = [
  "Custom design",
  "Unlimited updates",
  "Free redesigns",
  "Hosting & SSL included",
  "Support in <1 hour",
  "No contracts",
  "Dedicated account manager",
  "5–7 day launch",
];

function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            See how we compare
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            More value. Less cost.
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            CalTech Web bundles everything a typical agency charges extra for - 
            at a fraction of the price.
          </p>
        </div>

        {/* Savings callout */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl px-6 py-4 mb-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">
              Save $4,800–$22,812/year vs. a typical agency
            </div>
            <div className="text-sm text-gray-500">
              Agency clients pay $500–$2,000/month for similar work. You pay
              $99. That&apos;s up to $22,812 back in your pocket every year.
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-gray-500 font-semibold w-[36%]">
                  Feature
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`px-4 py-4 text-center font-bold ${
                      c.highlight ? "text-blue-600 bg-blue-50/60" : "text-gray-700"
                    }`}
                  >
                    <div>{c.name}</div>
                    <div
                      className={`text-xs font-normal mt-0.5 ${
                        c.highlight ? "text-blue-500" : "text-gray-400"
                      }`}
                    >
                      {c.price}
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
                    const val = c.features[feature as keyof typeof c.features];
                    return (
                      <td
                        key={c.name}
                        className={`px-4 py-3.5 text-center ${
                          c.highlight ? "bg-blue-50/40" : ""
                        }`}
                      >
                        {val === true ? (
                          <div className="flex justify-center">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                c.highlight ? "bg-green-500" : "bg-green-100"
                              }`}
                            >
                              <Check
                                className={`w-3.5 h-3.5 ${
                                  c.highlight ? "text-white" : "text-green-600"
                                }`}
                                strokeWidth={3}
                              />
                            </div>
                          </div>
                        ) : val === false ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                              <X className="w-3.5 h-3.5 text-red-400" strokeWidth={3} />
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400 italic">
                            {val}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-400 mt-3">No setup fee · No contracts · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}

// ─── Perfect For Section ─────────────────────────────────────────────────────

const audiences = [
  {
    icon: "🏪",
    title: "Small Businesses",
    examples: "HVAC, plumbing, landscaping, auto repair, cleaning services",
    pain: "Tired of paying agencies $500+/mo for a website that never gets updated",
  },
  {
    icon: "⛪",
    title: "Churches & Non-Profits",
    examples: "Congregations, ministries, food banks, community organizations",
    pain: "Need a professional site on a tight budget with frequent event updates",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Cafes",
    examples: "Family restaurants, coffee shops, catering, food trucks",
    pain: "Menu changes, seasonal specials, and hours that need updating weekly",
  },
  {
    icon: "⚖️",
    title: "Professional Services",
    examples: "Law firms, accountants, consultants, real estate agents",
    pain: "Want a polished online presence without managing it themselves",
  },
  {
    icon: "💈",
    title: "Salons & Wellness",
    examples: "Hair salons, spas, fitness studios, chiropractors, dentists",
    pain: "Need booking info, team bios, and service pages that stay current",
  },
  {
    icon: "🏗️",
    title: "Contractors & Trades",
    examples: "Roofers, electricians, painters, general contractors",
    pain: "Too busy running the business to worry about a website",
  },
];

function PerfectFor() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-4">
            <Check className="w-4 h-4" />
            Built for businesses like yours
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Who Is This Plan Perfect For?
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            If your business needs a professional website without the
            professional price tag, you&apos;re in the right place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map(({ icon, title, examples, pain }) => (
            <div
              key={title}
              className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                {pain}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-500">Examples:</span>{" "}
                {examples}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-5">
            Don&apos;t see your industry?{" "}
            <span className="font-semibold text-gray-700">
              We work with all types of businesses.
            </span>{" "}
            If you need a website, we can help.
          </p>
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── What Happens After You Sign Up ──────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sign Up & Share Your Vision",
      desc: "Click 'Get My Website' and you're in. Brandon personally reaches out within 24 hours to learn about your business, brand, and goals.",
      detail: "Personal call within 24 hours",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      accent: "text-blue-600",
      border: "border-blue-200",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Your Site Gets Designed & Built",
      desc: "We handle everything - design, content layout, mobile responsiveness, hosting setup. You approve the final design before anything goes live.",
      detail: "Live in 5-7 business days",
      gradient: "from-violet-500 to-violet-600",
      lightBg: "bg-violet-50",
      accent: "text-violet-600",
      border: "border-violet-200",
      icon: Palette,
    },
    {
      step: "03",
      title: "Launch & Ongoing Support",
      desc: "Your site goes live and you get unlimited updates from that day forward. Need a change? Just call, email, or text Brandon directly.",
      detail: "93% of updates done in <1 hour",
      gradient: "from-green-500 to-green-600",
      lightBg: "bg-green-50",
      accent: "text-green-600",
      border: "border-green-200",
      icon: Headphones,
    },
    {
      step: "04",
      title: "Grow Without Limits",
      desc: "New pages, content refreshes, full redesigns - it's all included. Your website evolves with your business at no extra cost.",
      detail: "Free redesigns for life",
      gradient: "from-orange-500 to-orange-600",
      lightBg: "bg-orange-50",
      accent: "text-orange-600",
      border: "border-orange-200",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
            <Zap className="w-4 h-4" />
            Simple 4-step process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Happens After You Sign Up
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            From sign-up to launch in under a week. Here&apos;s exactly what to
            expect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Arrow connectors between cards on large screens */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="hidden lg:flex absolute top-[60px] z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm items-center justify-center"
              style={{ left: `${i * 25}%`, transform: "translateX(-50%)" }}
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}

          {steps.map(
            ({
              step,
              title,
              desc,
              detail,
              gradient,
              lightBg,
              accent,
              border,
              icon: Icon,
            }) => (
              <div
                key={step}
                className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                <div className="p-6">
                  {/* Step badge + icon row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-extrabold shadow-md`}
                    >
                      {step}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-lg ${lightBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${accent}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-4">
                    {desc}
                  </p>

                  {/* Detail chip */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${lightBg} border ${border} text-xs font-semibold ${accent}`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {detail}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-400 mt-3">
            Your new website could be live by next week
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "$99/month is reasonable to get rid of a headache for me. Huge THANK YOU to CalTech Web for producing such a great website for us!",
    name: "Mike Fuentes",
    role: "Owner, Fuentes Concrete, Inc.",
    initials: "MF",
    bg: "bg-orange-600",
  },
  {
    quote:
      "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
    name: "Dr. Arjun Kanuri, MD, MBA",
    role: "Plastic & Reconstructive Surgery, DC/MD/VA",
    initials: "AK",
    bg: "bg-teal-600",
  },
  {
    quote:
      "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    name: "Christina Beckstead",
    role: "Executive Director, Madera County Farm Bureau",
    initials: "CB",
    bg: "bg-green-600",
  },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Clients who made the switch
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real businesses. Real savings. Real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initials, bg }) => (
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

const faqs = [
  {
    q: "Is there really no setup fee?",
    a: "Correct. You pay $99 your first month and every month after. There's no onboarding fee, no design fee, no launch fee. Everything is included in the $99.",
  },
  {
    q: "What counts as an 'unlimited update'?",
    a: "Content changes - text edits, image swaps, new pages, menu updates, staff photos, contact info, event listings, and more. We don't bill by the hour or per request. Just send us what you need and we handle it.",
  },
  {
    q: "Can I really cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. If you want to cancel, just let us know. We'll hand over your website files so you're never left with nothing.",
  },
  {
    q: "What's NOT included in the $99?",
    a: "Your domain name registration (~$12–15/year) is the one thing you purchase separately. Everything else - hosting, SSL, design, updates, support - is included.",
  },
  {
    q: "How long does it take to get my new website?",
    a: "Most websites are live within 5–7 business days of receiving your content (logo, photos, text, etc.). We've launched same-week sites when clients needed them fast.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll migrate your existing content to your new site at no extra charge. You don't lose anything - we just make it better.",
  },
  {
    q: "Do you work with businesses outside California?",
    a: "Absolutely. CalTech Web serves small businesses, churches, and non-profits across all 50 states. Everything is handled remotely - no in-person meetings required.",
  },
  {
    q: "What's Brandon's money-back guarantee?",
    a: "If you're not satisfied with your website, Brandon will refund your most recent month's payment - and you keep your website. No risk.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Pricing questions, answered
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Still not sure? Here are the answers to the questions Brandon hears
            most.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
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
            Have a question that&apos;s not here? Call or email Brandon directly.
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
      </div>
    </section>
  );
}

// ─── Guarantee ────────────────────────────────────────────────────────────────

function Guarantee() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Guarantee seal */}
        <div className="relative inline-flex items-center justify-center w-28 h-28 mb-8 mx-auto">
          <svg
            viewBox="0 0 112 112"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            <circle
              cx="56"
              cy="56"
              r="53"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="56" cy="56" r="44" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
            <circle cx="56" cy="56" r="34" fill="white" fillOpacity="0.1" />
          </svg>
          <div className="relative z-10 text-center">
            <div className="text-[9px] font-bold uppercase tracking-widest text-blue-200 mb-0.5">
              100%
            </div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-white">
              Money Back
            </div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-blue-200">
              Guarantee
            </div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Zero risk. Brandon&apos;s personal guarantee.
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          If you&apos;re not completely satisfied with your website, Brandon will
          personally refund your most recent payment - and you keep your website
          files. No questions asked. No hassle. That&apos;s a promise.
        </p>
        <div className="flex items-center justify-center gap-3 mb-10">
          <Image src="/brandon-hopkins.jpg" alt="Brandon Hopkins" width={88} height={88} sizes="44px" className="w-11 h-11 rounded-full object-cover shrink-0" />
          <div className="text-left">
            <div className="text-sm font-bold text-white">Brandon Hopkins</div>
            <div className="text-xs text-blue-200">Founder, CalTech Web</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </a>
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
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Get My Website
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <PricingCard />
        <ComparisonTable />
        <PerfectFor />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
