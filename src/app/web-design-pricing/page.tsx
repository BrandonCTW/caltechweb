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
  TrendingUp,
  HeadphonesIcon,
  Lock,
} from "lucide-react";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
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
        name: "Marcus Thompson",
      },
      datePublished: "2024-06-15",
      reviewBody:
        "I was paying $800/month to an agency. I switched to CalTech Web 18 months ago and honestly can't believe the difference. My site looks better, gets updated faster, and I'm saving almost $9,000 a year.",
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
        name: "Pastor James Watkins",
      },
      datePublished: "2024-03-22",
      reviewBody:
        "As a church, every dollar matters. $99/month for a professional website with unlimited updates - Brandon even redesigned our site for free when we updated our branding. Couldn't ask for more.",
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
        name: "Elena Rodriguez",
      },
      datePublished: "2024-09-10",
      reviewBody:
        "I thought $99/month was a gimmick. It's not. I've been with CalTech Web for 3 years and they've updated my site probably 50 times. No extra charges. Just fast, reliable service.",
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

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const links = [
    { label: "Portfolio", href: "/web-design-portfolio/" },
    { label: "Pricing", href: "/web-design-pricing/" },
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/brandon-hopkins/" },
    { label: "Church Websites", href: "/affordable-church-websites/" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="CalTech Web" width={1520} height={512} className="h-7 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                href === "/web-design-pricing/"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5592823075"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
}

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

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "I was paying $800/month to an agency. I switched to CalTech Web 18 months ago and honestly can't believe the difference. My site looks better, gets updated faster, and I'm saving almost $9,000 a year.",
    name: "Marcus Thompson",
    role: "Owner, Thompson HVAC & Plumbing",
    initials: "MT",
    bg: "bg-blue-600",
  },
  {
    quote:
      "As a church, every dollar matters. $99/month for a professional website with unlimited updates - Brandon even redesigned our site for free when we updated our branding. Couldn't ask for more.",
    name: "Pastor James Watkins",
    role: "Valley Community Church",
    initials: "JW",
    bg: "bg-purple-600",
  },
  {
    quote:
      "I thought $99/month was a gimmick. It's not. I've been with CalTech Web for 3 years and they've updated my site probably 50 times. No extra charges. Just fast, reliable service.",
    name: "Elena Rodriguez",
    role: "Owner, Elena's Authentic Kitchen",
    initials: "ER",
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
          <Image src="/brandon-hopkins.jpg" alt="Brandon Hopkins" width={2400} height={1600} className="w-11 h-11 rounded-full object-cover shrink-0" />
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

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="CalTech Web" width={1520} height={512} className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="tel:5592823075" className="hover:text-white transition-colors">
                (559) 282-3075
              </a>
              <a href="mailto:Brandon@CalTechWeb.com" className="hover:text-white transition-colors">
                Brandon@CalTechWeb.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Design",
                "Website Hosting",
                "Monthly Updates",
                "Free Redesigns",
                "SEO Basics",
              ].map((s) => (
                <li key={s}>
                  <Link href="/web-design-pricing/" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Small Businesses", href: "/affordable-web-design-company/" },
                { label: "Church Websites", href: "/affordable-church-websites/" },
                { label: "Non-Profits", href: "/nonprofit-website-design-tips/" },
                { label: "Construction", href: "/affordable-construction-company-website/" },
                { label: "Real Estate", href: "/affordable-real-estate-company-website/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Brandon", href: "/brandon-hopkins/" },
                { label: "Portfolio", href: "/web-design-portfolio/" },
                { label: "Blog", href: "/blog/" },
                { label: "Free Report Card", href: "/free-website-report-card/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} CalTech Web. All rights reserved.
            California-based, serving clients nationwide.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
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
      <Nav />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <PricingCard />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
