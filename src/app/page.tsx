import {
  Check,
  Phone,
  Clock,
  Globe,
  RefreshCw,
  Shield,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  ChevronRight,
  Building2,
  Heart,
  Briefcase,
  MessageSquare,
  Palette,
  Headphones,
} from "lucide-react";
import FAQ from "@/components/FAQ";
import MobileNav from "@/components/MobileNav";
import SavingsCalculator from "@/components/SavingsCalculator";
import SocialProofToast from "@/components/SocialProofToast";
import StickyPricingCTA from "@/components/StickyPricingCTA";
import TrustBar from "@/components/TrustBar";
import AnimatedChat from "@/components/AnimatedChat";
import Link from "next/link";

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CalTech Web",
  "description":
    "Affordable website design for small businesses, churches, and non-profits. $99/month includes a custom site, unlimited updates, free redesigns, hosting, SSL, and priority support.",
  "telephone": "+15592823075",
  "email": "Brandon@CalTechWeb.com",
  "founder": {
    "@type": "Person",
    "name": "Brandon Hopkins",
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressCountry": "US",
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States",
  },
  "priceRange": "$99/month",
  "knowsAbout": [
    "Web Design",
    "Website Hosting",
    "Small Business Websites",
    "Church Websites",
    "Non-Profit Websites",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "All-Inclusive Website Design Plan",
          "description":
            "Custom website design, mobile-responsive layout, hosting, SSL, unlimited content updates, free redesigns, priority support, and basic on-page SEO - all for $99/month.",
        },
        "price": "99",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "99",
          "priceCurrency": "USD",
          "billingDuration": "P1M",
        },
      },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "800",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Arjun Kanuri",
      },
      "reviewBody":
        "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
      },
      "author": {
        "@type": "Person",
        "name": "Christina Beckstead",
      },
      "reviewBody":
        "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    },
  ],
};

// ─── Announcement Bar ────────────────────────────────────────────────────────

function AnnouncementBar() {
  return (
    <div className="bg-blue-600 text-white text-center py-2.5 px-4 text-sm font-medium leading-snug">
      <span className="hidden sm:inline">Professional websites for small businesses - </span>
      <span className="font-extrabold">$99/month</span>
      <span className="opacity-60 mx-1.5">·</span>
      <span>Unlimited updates, hosting &amp; support all included.</span>
      <span className="opacity-60 mx-1.5 hidden sm:inline">·</span>
      <Link
        href="/web-design-pricing"
        className="hidden sm:inline underline font-semibold hover:text-blue-100 transition-colors ml-0.5"
      >
        Schedule a Call →
      </Link>
    </div>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="CalTech Web" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/web-design-portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
            <Link href="/web-design-pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/brandon-hopkins" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/affordable-church-websites" className="hover:text-blue-600 transition-colors">Church Websites</Link>
          </nav>

          {/* Phone + CTA (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (559) 282-3075
            </a>
            <Link
              href="#get-started"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
            >
              Schedule a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              800+ websites managed across California & nationwide
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Professional Website Design{" "}
              <span className="text-orange-400">for Just $99/month</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Get a stunning, mobile-ready website with unlimited updates, free
              redesigns, and fast support - all included. No contracts, no hidden
              fees.
            </p>

            {/* What's included pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                "Unlimited Updates",
                "Free Redesigns",
                "Hosting Included",
                "1-Hour Support",
                "No Contracts",
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Get My Website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:5592823075"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (559) 282-3075
              </a>
            </div>

            {/* Guarantee note */}
            <p className="mt-6 text-sm text-blue-200 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green-400" />
              Not satisfied? Get a full refund - and keep your website.
            </p>
          </div>

          {/* Right: stacked client showcase */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Layered browser stack - 3 real-looking client sites */}
            <div className="relative h-[340px]">
              {/* Card 3 (back) - Dr. Kanuri healthcare site */}
              <div
                className="absolute top-0 right-0 w-[88%] rounded-2xl border border-white/15 shadow-xl overflow-hidden opacity-60"
                style={{ transform: "rotate(3deg) translateY(8px)" }}
              >
                <div className="bg-gray-200/80 px-2.5 py-1.5 flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 bg-white/60 rounded h-3.5 px-2 flex items-center">
                    <span className="text-[7px] text-gray-500">drarjunkanuri.com</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 px-3 py-3">
                  <div className="text-[9px] font-bold text-white">Plastic &amp; Reconstructive Surgery</div>
                  <div className="text-[7px] text-blue-200 mt-0.5">Board certified · Serving DC/MD/VA</div>
                  <div className="mt-2 bg-white text-blue-700 text-[7px] font-bold px-2 py-0.5 rounded-full inline-block">Book Consultation</div>
                </div>
                <div className="bg-white px-3 py-2 h-12" />
              </div>

              {/* Card 2 (middle) - Calvary Chapel Los Alamitos */}
              <div
                className="absolute top-6 left-0 w-[88%] rounded-2xl border border-white/20 shadow-xl overflow-hidden opacity-80"
                style={{ transform: "rotate(-2deg) translateY(4px)" }}
              >
                <div className="bg-gray-200/80 px-2.5 py-1.5 flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 bg-white/60 rounded h-3.5 px-2 flex items-center">
                    <span className="text-[7px] text-gray-500">calvarychapella.com</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-700 to-indigo-600 px-3 py-3">
                  <div className="text-[9px] font-bold text-white">Calvary Chapel Los Alamitos</div>
                  <div className="text-[7px] text-purple-200 mt-0.5">Sermons, events &amp; online giving</div>
                  <div className="mt-2 bg-white text-purple-700 text-[7px] font-bold px-2 py-0.5 rounded-full inline-block">Watch Live</div>
                </div>
                <div className="bg-white px-3 py-2">
                  <div className="flex gap-1">
                    <div className="flex-1 bg-purple-50 rounded-md py-1 text-center">
                      <span className="text-[6px] text-purple-700 font-semibold">Sermons</span>
                    </div>
                    <div className="flex-1 bg-purple-50 rounded-md py-1 text-center">
                      <span className="text-[6px] text-purple-700 font-semibold">Events</span>
                    </div>
                    <div className="flex-1 bg-purple-50 rounded-md py-1 text-center">
                      <span className="text-[6px] text-purple-700 font-semibold">Give</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 1 (front) - Madera County Farm Bureau */}
              <div
                className="absolute top-14 left-[6%] w-[88%] rounded-2xl border border-white/25 shadow-2xl overflow-hidden"
                style={{ transform: "rotate(0.5deg)" }}
              >
                {/* Browser chrome */}
                <div className="bg-gray-100 px-2.5 py-1.5 flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 bg-white rounded h-3.5 px-2 flex items-center gap-0.5">
                    <Shield className="w-2 h-2 text-green-500 shrink-0" />
                    <span className="text-[7px] text-gray-600 font-medium">maderacountyfarmbureau.com</span>
                  </div>
                </div>
                {/* Site nav */}
                <div className="h-7 flex items-center justify-between px-3 bg-gradient-to-r from-green-600 to-emerald-600">
                  <span className="text-white font-bold text-[8px] tracking-wide">Madera Farm Bureau</span>
                  <div className="flex gap-2">
                    <span className="text-white/80 text-[7px]">Members</span>
                    <span className="text-white/80 text-[7px]">Scholarships</span>
                    <span className="text-white/80 text-[7px]">Events</span>
                  </div>
                </div>
                {/* Hero */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 px-4 py-4">
                  <div className="inline-flex items-center gap-1 bg-white/15 border border-white/20 px-1.5 py-0.5 rounded-full mb-1.5">
                    <Star className="w-2 h-2 text-yellow-400 fill-yellow-400" />
                    <span className="text-[7px] text-green-100 font-medium">Madera County, CA</span>
                  </div>
                  <div className="text-[11px] font-extrabold text-white leading-tight mb-1">Madera County Farm Bureau</div>
                  <div className="text-[8px] text-green-200 mb-2.5">Membership, scholarships, payments & agricultural advocacy</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-white text-green-600 text-[7px] font-bold px-2.5 py-1 rounded-full">Join Now</span>
                    <span className="border border-white/30 text-white/80 text-[7px] px-2 py-1 rounded-full">Scholarships</span>
                  </div>
                </div>
                {/* Feature row */}
                <div className="bg-white px-3 py-2.5">
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: "Membership", color: "text-green-600 bg-green-50" },
                      { label: "Scholarships", color: "text-emerald-600 bg-emerald-50" },
                      { label: "Events", color: "text-teal-700 bg-teal-50" },
                    ].map(({ label, color }) => (
                      <div key={label} className={`${color} rounded-lg py-1.5 text-center`}>
                        <div className="text-[7px] font-semibold leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* +62% reservations floating badge */}
              <div className="absolute -bottom-1 right-2 bg-green-500 text-white rounded-full px-3 py-1.5 shadow-lg shadow-green-500/30 z-10">
                <span className="text-xs font-bold">+62% reservations</span>
              </div>
            </div>

            {/* Stat mini-cards row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-white">800+</div>
                <div className="text-xs text-blue-300 mt-0.5 leading-tight">Sites<br/>managed</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-orange-400">93%</div>
                <div className="text-xs text-blue-300 mt-0.5 leading-tight">Updates in<br/>&lt;1 hour</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-green-400">5–7</div>
                <div className="text-xs text-blue-300 mt-0.5 leading-tight">Day avg<br/>launch</div>
              </div>
            </div>

            {/* Brandon attribution */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
              <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-9 h-9 rounded-full object-cover shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">Brandon Hopkins, Founder</div>
                <div className="text-xs text-blue-300">Personally guarantees every website</div>
              </div>
              <Shield className="w-5 h-5 text-green-400 ml-auto shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}


// ─── Industries Ticker ───────────────────────────────────────────────────────

function IndustriesTicker() {
  const industries = [
    "Restaurants",
    "Churches",
    "Non-Profits",
    "HVAC & Plumbing",
    "Healthcare",
    "Real Estate",
    "General Contractors",
    "Law Firms",
    "Retail Shops",
    "Dental Offices",
    "Auto Repair",
    "Landscaping",
    "Beauty Salons",
    "Gyms & Fitness",
    "Accounting Firms",
    "Childcare Centers",
  ];

  // Duplicate for seamless infinite loop
  const doubled = [...industries, ...industries];

  return (
    <div className="bg-gray-50 border-y border-gray-100 py-3 overflow-hidden">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          width: "max-content",
          animation: "marquee 40s linear infinite",
        }}
      >
        {doubled.map((industry, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            {industry}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Comparison Table ────────────────────────────────────────────────────────

function Comparison() {
  const features = [
    "Custom website design",
    "Unlimited content updates",
    "Free redesigns anytime",
    "Hosting & SSL included",
    "Support done in < 1 hour",
    "No long-term contract",
    "Personal account manager",
  ];

  const columns = [
    {
      name: "CalTech Web",
      price: "$99/mo",
      highlight: true,
      values: [true, true, true, true, true, true, true],
    },
    {
      name: "Typical Agency",
      price: "$500–$2,000/mo",
      highlight: false,
      values: [true, false, false, false, false, false, false],
    },
    {
      name: "DIY Builder",
      price: "$20–$50/mo",
      highlight: false,
      values: [false, true, false, false, false, true, false],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100 mb-4">
            <Check className="w-4 h-4 text-green-600" />
            See how we compare
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why $99/Month Is a No-Brainer
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Compare what you get with CalTech Web versus the alternatives - at a fraction of the cost.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                {/* Feature column header */}
                <th className="w-[38%] pb-4 text-left" />
                {columns.map(({ name, price, highlight }) => (
                  <th
                    key={name}
                    className={`pb-4 text-center w-[20%] ${highlight ? "" : ""}`}
                  >
                    <div
                      className={`mx-1 rounded-t-2xl px-3 pt-5 pb-4 ${
                        highlight
                          ? "bg-blue-600 text-white"
                          : "bg-gray-50 text-gray-700 border border-b-0 border-gray-200"
                      }`}
                    >
                      {highlight && (
                        <div className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1">
                          Best Value
                        </div>
                      )}
                      <div className={`text-base font-bold ${highlight ? "text-white" : "text-gray-900"}`}>
                        {name}
                      </div>
                      <div
                        className={`text-sm font-semibold mt-1 ${
                          highlight ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {price}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => {
                const isLast = fi === features.length -1;
                return (
                  <tr key={feature}>
                    <td
                      className={`py-3.5 pr-4 text-sm font-medium text-gray-700 border-b border-gray-100 ${
                        isLast ? "rounded-bl-2xl" : ""
                      }`}
                    >
                      {feature}
                    </td>
                    {columns.map(({ name, values, highlight }) => (
                      <td
                        key={name}
                        className={`py-3.5 text-center border-b ${
                          highlight
                            ? "bg-blue-50 border-blue-100"
                            : "bg-gray-50 border-gray-100"
                        } ${isLast ? "border-b-0" : ""} mx-1`}
                      >
                        {values[fi] ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
                            <span className="w-3 h-0.5 bg-red-300 rounded-full block" />
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
              {/* CTA row */}
              <tr>
                <td className="pt-6" />
                {columns.map(({ name, highlight }) => (
                  <td key={name} className="pt-6 text-center px-1">
                    {highlight ? (
                      <Link
                        href="/web-design-pricing"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-all shadow-md"
                      >
                        Get My Website
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        {name === "Typical Agency"
                          ? "You manage everything"
                          : "You build it yourself"}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── What's Included ─────────────────────────────────────────────────────────

function WhatIsIncluded() {
  const items = [
    {
      icon: Globe,
      title: "Custom Website Design",
      desc: "A professionally designed, mobile-responsive website tailored to your business - built to impress and convert.",
    },
    {
      icon: RefreshCw,
      title: "Unlimited Updates",
      desc: "Need to update your hours, add a photo, or change your menu? Just ask - we handle it, usually within the hour.",
    },
    {
      icon: Shield,
      title: "Hosting & Security",
      desc: "Fast, reliable hosting with SSL certificates and regular backups included at no extra charge.",
    },
    {
      icon: Star,
      title: "Free Redesigns",
      desc: "Ready for a fresh look? We'll completely redesign your site at no extra cost - whenever you want.",
    },
    {
      icon: Clock,
      title: "Priority Support",
      desc: "93% of our support requests are completed in under 1 hour. Brandon and his team are always just an email away.",
    },
    {
      icon: TrendingUp,
      title: "SEO-Ready Foundation",
      desc: "Every site is built with clean code, fast load times, and on-page SEO basics so Google can find you.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
            Everything included at $99/month
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            One Price. Everything Included.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No hidden fees. No upsells. No surprises. Just everything your small
            business website needs - for a flat $99 a month.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Schedule a Call",
      desc: "Tell us about your business and what you need. We'll walk through your goals and get the ball rolling - no obligation, no pressure.",
      detail: "Takes less than 60 seconds",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      accent: "text-blue-600",
      border: "border-blue-200",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "We Build Your Site",
      desc: "Our team designs your site and launches it in 5–7 business days on average. You approve it before it goes live.",
      detail: "5–7 day average turnaround",
      gradient: "from-violet-500 to-violet-600",
      lightBg: "bg-violet-50",
      accent: "text-violet-600",
      border: "border-violet-200",
      icon: Palette,
    },
    {
      step: "03",
      title: "We Handle Everything",
      desc: "Updates, fixes, redesigns - just send us a message. We've got your website so you can focus on your business.",
      detail: "93% done in under 1 hour",
      gradient: "from-green-500 to-green-600",
      lightBg: "bg-green-50",
      accent: "text-green-600",
      border: "border-green-200",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
            <Zap className="w-4 h-4" />
            Simple 3-step process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Up and Running in Days, Not Months
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Getting your small business online has never been this simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Arrow connectors between cards on desktop */}
          <div className="hidden md:flex absolute top-[60px] left-[33.33%] -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm items-center justify-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="hidden md:flex absolute top-[60px] left-[66.66%] -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm items-center justify-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {steps.map(({ step, title, desc, detail, gradient, lightBg, accent, border, icon: Icon }) => (
            <div
              key={step}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

              <div className="p-7">
                {/* Step badge + icon row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-extrabold shadow-md`}>
                    {step}
                  </div>
                  <div className={`w-10 h-10 rounded-lg ${lightBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${accent}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">{desc}</p>

                {/* Detail chip */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${lightBg} border ${border} text-xs font-semibold ${accent}`}>
                  <Check className="w-3.5 h-3.5" />
                  {detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-all shadow-md hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Transformation Before / After ───────────────────────────────────────────

function Transformation() {
  const painPoints = [
    "Not mobile-friendly",
    "No clear call-to-action",
    "Looks unprofessional",
    "Last updated years ago",
    "Costing you customers",
  ];

  const benefits = [
    "Mobile-perfect design",
    "Bold CTA above the fold",
    "Looks trustworthy & modern",
    "Updated anytime in <1 hr",
    "Actively wins you business",
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
            <Zap className="w-4 h-4" />
            The CalTech Web Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            From Outdated to Outstanding
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            See what a $99/month redesign actually looks like - versus the kind of site
            that&apos;s silently costing you customers right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-start">
          {/* ── BEFORE ── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-bold">
                <span className="text-base leading-none">✗</span>
                Before CalTech Web
              </span>
            </div>

            {/* Browser frame */}
            <div className="rounded-xl border-2 border-red-100 shadow-lg overflow-hidden">
              {/* Chrome bar */}
              <div className="bg-gray-200 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                </div>
                <div className="flex-1 bg-white rounded h-5 px-2 flex items-center">
                  <span className="text-[9px] text-gray-400">http://mybusiness.com</span>
                </div>
              </div>

              {/* Old site mock */}
              <div className="bg-white">
                {/* Cluttered nav */}
                <div className="bg-gray-100 border-b-2 border-gray-300 px-3 py-2 flex items-center justify-between">
                  <span
                    className="text-[11px] font-bold text-gray-800 tracking-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    MY BUSINESS NAME INC.
                  </span>
                  <div className="flex gap-3 text-[9px] text-blue-800 underline">
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Gallery</span>
                    <span>Contact</span>
                  </div>
                </div>

                {/* Gray-box hero */}
                <div className="bg-gray-300 h-28 flex flex-col items-center justify-center border-b border-gray-400">
                  <div
                    className="text-[13px] font-bold text-gray-700 mb-1"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Welcome to Our Website!
                  </div>
                  <div className="text-[9px] text-gray-600">
                    Serving the community since 1998
                  </div>
                </div>

                {/* Text dump + basic grid */}
                <div className="p-3">
                  <div
                    className="text-[9px] text-gray-700 leading-relaxed mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    We offer many services to our valued customers. Please browse our
                    site to learn more about what we do. We have been in business for
                    many years and pride ourselves on quality service. Call us for more
                    info.
                  </div>
                  <div className="grid grid-cols-3 gap-1 mb-3">
                    {["Service 1", "Service 2", "Service 3"].map((s) => (
                      <div
                        key={s}
                        className="bg-gray-100 border border-gray-300 p-1.5 text-center"
                      >
                        <div className="text-[8px] font-bold text-gray-700">{s}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[8px] text-gray-400 border-t border-gray-200 pt-2">
                    Last updated: November 2019 &nbsp;|&nbsp; © 2019 My Business Inc.
                  </div>
                </div>
              </div>
            </div>

            {/* Pain points */}
            <div className="mt-4 flex flex-wrap gap-2">
              {painPoints.map((pain) => (
                <span
                  key={pain}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-medium"
                >
                  <span className="text-red-400 font-bold leading-none">✗</span> {pain}
                </span>
              ))}
            </div>
          </div>

          {/* ── VS divider ── */}
          <div className="hidden lg:flex flex-col items-center justify-center self-stretch">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="my-4 w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center text-xs font-extrabold text-gray-400">
              VS
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          </div>

          {/* ── AFTER ── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-bold">
                <Check className="w-3.5 h-3.5" />
                After CalTech Web
              </span>
            </div>

            {/* Browser frame */}
            <div className="rounded-xl border-2 border-green-100 shadow-lg overflow-hidden">
              {/* Chrome bar */}
              <div className="bg-gray-200 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 bg-white rounded h-5 px-2 flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5 text-green-500 shrink-0" />
                  <span className="text-[9px] text-gray-700 font-medium">
                    mybusiness.com
                  </span>
                </div>
              </div>

              {/* New site mock */}
              <div className="bg-white">
                {/* Clean nav */}
                <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between shadow-sm">
                  <span className="text-[10px] font-extrabold text-gray-900">
                    My<span className="text-blue-600">Business</span>
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[8px] text-gray-500">Services</span>
                    <span className="text-[8px] text-gray-500">About</span>
                    <span className="bg-orange-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                      Free Quote
                    </span>
                  </div>
                </div>

                {/* Modern hero */}
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 px-4 py-5">
                  <div className="inline-flex items-center gap-1 bg-white/15 border border-white/20 px-2 py-0.5 rounded-full mb-2">
                    <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-[8px] text-blue-100 font-medium">
                      800+ websites managed
                    </span>
                  </div>
                  <div className="text-[12px] font-extrabold text-white mb-1 leading-tight">
                    Professional Services
                    <br />
                    for Every Budget
                  </div>
                  <div className="text-[8.5px] text-blue-200 mb-3 leading-snug">
                    Trusted by businesses across California &amp; nationwide
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-500 text-white text-[8px] font-bold px-3 py-1 rounded-full">
                      Get Free Quote →
                    </span>
                    <span className="border border-white/30 text-white/80 text-[8px] px-2 py-1 rounded-full">
                      (559) 282-3075
                    </span>
                  </div>
                </div>

                {/* Feature cards + mini stats */}
                <div className="px-3 py-3 space-y-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: "Fast Response", bg: "bg-blue-50", text: "text-blue-700" },
                      { label: "Mobile Ready", bg: "bg-green-50", text: "text-green-700" },
                      { label: "SEO-Optimized", bg: "bg-purple-50", text: "text-purple-700" },
                    ].map(({ label, bg, text }) => (
                      <div
                        key={label}
                        className={`${bg} ${text} rounded-lg p-1.5 text-center`}
                      >
                        <div className="text-[8px] font-semibold leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-2 py-1.5">
                    <span className="text-[8px] text-green-800 font-semibold">
                      +40% traffic · 2× conversions
                    </span>
                    <span className="text-[8px] text-green-600 font-bold">↑</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium"
                >
                  <Check className="w-3 h-3 shrink-0" /> {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-5 text-sm">
            Ready to make the switch? Your new website can be live in 5–7 days.
          </p>
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Preview ───────────────────────────────────────────────────────

function PortfolioPreview() {
  const sites = [
    {
      category: "Non-Profit Organization",
      name: "Madera County Farm Bureau",
      desc: "55% traffic increase with 1,000+ page site for membership & scholarships.",
      colorFrom: "#16a34a",
      colorTo: "#059669",
      accentBg: "bg-green-600",
      accentText: "text-green-600",
      badge: "bg-green-50 text-green-700 border-green-100",
      navItems: ["Members", "Scholarships", "Events"],
      stat: "+55% traffic",
      statColor: "text-green-600",
      headline: "Madera County Farm Bureau",
      subheadline: "Membership, scholarships, events & agricultural advocacy",
      cta: "Join Now",
      features: ["Membership", "Scholarships", "Events"],
    },
    {
      category: "Church & Ministry",
      name: "Calvary Chapel Los Alamitos",
      desc: "Pastor saves 3+ hours/week with fully managed church site.",
      colorFrom: "#7c3aed",
      colorTo: "#4f46e5",
      accentBg: "bg-purple-600",
      accentText: "text-purple-600",
      badge: "bg-purple-50 text-purple-700 border-purple-100",
      navItems: ["Sermons", "Events", "Give"],
      stat: "3+ hrs saved/week",
      statColor: "text-purple-600",
      headline: "Welcome Home",
      subheadline: "Sermons, events, and online giving - all managed by CalTech Web",
      cta: "Watch Live",
      features: ["Sermons", "Events", "Give"],
    },
    {
      category: "Healthcare Professional",
      name: "Dr. Arjun Kanuri",
      desc: "40% more traffic. Doubled new-patient conversions. 9-year client.",
      colorFrom: "#2563eb",
      colorTo: "#0891b2",
      accentBg: "bg-blue-600",
      accentText: "text-blue-600",
      badge: "bg-blue-50 text-blue-700 border-blue-100",
      navItems: ["Procedures", "About", "Consult"],
      stat: "+40% traffic",
      statColor: "text-blue-600",
      headline: "Plastic & Reconstructive Surgery",
      subheadline: "Board certified · Serving DC/MD/VA · 9-year CalTech Web client",
      cta: "Book Consultation",
      features: ["Services", "Insurance", "Telehealth"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
            <Globe className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Websites That Win Business
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From restaurants to churches to healthcare practices - we design sites that look great and turn visitors into customers.
          </p>
        </div>

        {/* Site preview cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {sites.map(({ category, name, desc, colorFrom, colorTo, accentBg, accentText, badge, navItems, stat, statColor, headline, subheadline, cta, features }) => (
            <div
              key={name}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* Browser chrome */}
              <div className="bg-gray-100 px-3 pt-3 pb-2 border-b border-gray-200">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="bg-white rounded-md h-4 w-2/3 flex items-center px-2">
                  <span className="text-[8px] text-gray-400 truncate">{name.toLowerCase().replace(/\s+/g, "")}.com</span>
                </div>
              </div>

              {/* Mock website preview */}
              <div className="h-48 overflow-hidden">
                {/* Site navbar */}
                <div
                  className="h-9 flex items-center justify-between px-3"
                  style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }}
                >
                  <span className="text-white font-bold text-[9px] tracking-wide">{name}</span>
                  <div className="flex gap-2.5">
                    {navItems.map((item) => (
                      <span key={item} className="text-white/80 text-[8px] font-medium">{item}</span>
                    ))}
                  </div>
                </div>
                {/* Hero content */}
                <div className="bg-white px-3 pt-3 pb-2">
                  <div className="text-[11px] font-extrabold text-gray-900 leading-tight mb-1">{headline}</div>
                  <div className="text-[8.5px] text-gray-500 leading-snug mb-2.5">{subheadline}</div>
                  <span className={`inline-block ${accentBg} text-white text-[8px] font-bold px-3 py-1 rounded-full`}>
                    {cta}
                  </span>
                </div>
                {/* Feature cards row */}
                <div className="px-3 pt-1.5 flex gap-1.5">
                  {features.map((feature) => (
                    <div key={feature} className="flex-1 bg-gray-50 border border-gray-100 rounded-lg py-2 px-1 text-center">
                      <div className={`text-[8px] font-semibold ${accentText} leading-tight`}>{feature}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="p-5 border-t border-gray-100">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badge}`}>
                    {category}
                  </span>
                  <span className={`text-xs font-bold ${statColor} shrink-0`}>{stat}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/web-design-portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-blue-600 text-blue-700 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Case Study ──────────────────────────────────────────────────────────────

function CaseStudy() {
  return (
    <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-blue-200 mb-6">
              <TrendingUp className="w-4 h-4 text-green-400" />
              Real Results, Real Client
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              40% More Traffic. Double the Conversions.
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Dr. Arjun Kanuri came to CalTech Web with an outdated site that
              wasn&apos;t bringing in new patients. After a full redesign, his
              traffic jumped 40% and conversions doubled - in just 3 months.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
                <div className="text-4xl font-extrabold text-orange-400 mb-1">40%</div>
                <div className="text-sm text-blue-200">Increase in website traffic</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
                <div className="text-4xl font-extrabold text-green-400 mb-1">2×</div>
                <div className="text-sm text-blue-200">More conversions in 3 months</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-lg font-bold text-white shrink-0">
                AK
              </div>
              <div>
                <div className="font-semibold text-white">Dr. Arjun Kanuri</div>
                <div className="text-sm text-blue-300">CalTech Web Client</div>
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg text-blue-100 leading-relaxed mb-6 italic">
              &ldquo;I was skeptical about the $99/month price - I figured I&apos;d get what
              I paid for. But CalTech Web blew me away. They redesigned my site,
              my traffic went up 40%, and I&apos;m getting twice as many new
              patients. Brandon&apos;s team responds faster than any vendor I&apos;ve
              ever worked with.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-white/15">
              <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-sm font-bold text-white shrink-0">
                AK
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Dr. Arjun Kanuri</div>
                <div className="text-xs text-blue-300">Healthcare Professional, CalTech Web Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
      name: "Dr. Arjun Kanuri, MD, MBA",
      role: "Plastic & Reconstructive Surgery, DC/MD/VA",
      initials: "AK",
      color: "bg-teal-600",
    },
    {
      quote:
        "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
      name: "Christina Beckstead",
      role: "Executive Director, Madera County Farm Bureau",
      initials: "CB",
      color: "bg-green-600",
    },
    {
      quote:
        "Managing my church website and personal ministry website was a significant time commitment, taking up at least 3 hours of my week, if not more. Since I enlisted the help of CalTech Web, they have been maintaining my website for many years now. Their services have been invaluable, saving me precious time that I can now devote to furthering my ministry.",
      name: "Bryan Newberry",
      role: "Pastor, Calvary Chapel Los Alamitos",
      initials: "BN",
      color: "bg-purple-600",
    },
    {
      quote:
        "$99/month is reasonable to get rid of a headache for me. Huge THANK YOU to CalTech Web for producing such a great website for us!",
      name: "Mike Fuentes",
      role: "Owner, Fuentes Concrete, Inc.",
      initials: "MF",
      color: "bg-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold border border-yellow-100 mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            What Our Clients Say
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by 800+ Businesses Nationwide
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From church pastors to restaurant owners to non-profits - real clients sharing real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{name}</div>
                  <div className="text-xs text-gray-500">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Join 800+ businesses who trust CalTech Web.{" "}
            <Link href="/web-design-pricing" className="text-blue-600 font-semibold hover:underline">
              Get started today →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Who We Serve ─────────────────────────────────────────────────────────────

function WhoWeServe() {
  const categories = [
    {
      title: "Small Businesses",
      desc: "Restaurants, contractors, retail shops, service providers - if you need customers to find you online, we build sites that deliver.",
      icon: Building2,
      href: "/quote",
    },
    {
      title: "Churches & Non-Profits",
      desc: "We have deep experience with church websites and non-profit organizations. We understand your mission matters more than your budget.",
      icon: Heart,
      href: "/affordable-church-websites",
    },
    {
      title: "Professionals",
      desc: "Doctors, lawyers, consultants, real estate agents - a polished site builds trust and brings in more referrals and leads.",
      icon: Briefcase,
      href: "/quote",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Built for California Small Businesses
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We specialize in affordable websites for the businesses that need
            them most - and we serve clients nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ title, desc, icon: Icon, href }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-600 transition-colors">
                <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 mt-5 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Meet Brandon ────────────────────────────────────────────────────────────

function MeetBrandon() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left: Brandon card */}
            <div className="lg:col-span-2 bg-blue-600 p-10 flex flex-col items-center justify-center text-center text-white">
              {/* Avatar */}
              <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-24 h-24 rounded-full object-cover border-4 border-white/30 mb-5 shadow-lg" />
              <div className="text-xl font-extrabold text-white mb-1">Brandon Hopkins</div>
              <div className="text-sm text-blue-200 mb-6">Founder &amp; Owner, CalTech Web</div>

              {/* Quick stats */}
              <div className="w-full space-y-3">
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-blue-100">Websites managed</span>
                  <span className="font-extrabold text-white">800+</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-blue-100">Support tickets closed</span>
                  <span className="font-extrabold text-white">5,000+</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-blue-100">Avg. response time</span>
                  <span className="font-extrabold text-orange-300">&lt;1 hour</span>
                </div>
              </div>
            </div>

            {/* Right: Brandon's message */}
            <div className="lg:col-span-3 p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-5 w-fit">
                A note from Brandon
              </div>

              <blockquote className="text-xl text-gray-800 font-medium leading-relaxed mb-6 italic">
                &ldquo;I started CalTech Web because small businesses deserve a great website - not just the ones who can afford a $5,000 agency. At $99 a month, you get my personal attention, fast responses, and a site that actually works for your business.&rdquo;
              </blockquote>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                I personally review every project and guarantee your satisfaction. If you&apos;re not happy, you get a full refund - and you keep your website. I&apos;ve held that promise with every single client since day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/web-design-pricing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5"
                >
                  Get My Website
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:5592823075"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    (559) 282-3075
                  </a>
                  <a
                    href="mailto:Brandon@CalTechWeb.com"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Brandon@CalTechWeb.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Support Demo ────────────────────────────────────────────────────────────

function SupportDemo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold border border-orange-100 mb-4">
              <Clock className="w-4 h-4" />
              Support That Actually Responds
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Send a Message.<br />Get It Done Fast.
            </h2>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              No tickets. No waiting days. No &ldquo;we&apos;ll look into it.&rdquo; Just send us what you need and we handle it - usually before you finish your next cup of coffee.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">5,000+ support tickets closed</div>
                  <div className="text-xs text-gray-500">Every single one handled personally</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">93% completed in under 1 hour</div>
                  <div className="text-xs text-gray-500">That&apos;s our guarantee - not just a goal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: animated support chat */}
          <AnimatedChat />
        </div>
      </div>
    </section>
  );
}

// ─── Client Wins Ticker ──────────────────────────────────────────────────────

function ClientWinsTicker() {
  const wins = [
    { text: "Dr. Arjun Kanuri - +40% traffic, 2× conversions, 9-year client", kind: "stat" as const },
    { text: "Madera County Farm Bureau - +55% traffic, 1,000+ page site", kind: "stat" as const },
    { text: "Sermon upload for Calvary Chapel Los Alamitos - completed in 38 minutes", kind: "update" as const },
    { text: "Central Baptist Church - event calendar update live in 42 minutes", kind: "update" as const },
    { text: "Fuentes Concrete, Inc. - professional contractor site launched in 6 days", kind: "launch" as const },
    { text: "Christina Beckstead - recommends CalTech Web for all nonprofit websites", kind: "stat" as const },
    { text: "Pastor Bryan Newberry - saves 3+ hours/week on website management", kind: "stat" as const },
    { text: "California Women for Agriculture - advocacy site live in 6 days", kind: "launch" as const },
    { text: "Photo gallery update for ALV Floors - done in 28 minutes", kind: "update" as const },
    { text: "Origami Owl / Chrissy Weems - e-commerce jewelry site launched", kind: "launch" as const },
    { text: "TurboThao Nails - service menu and booking page added same day", kind: "launch" as const },
    { text: "Kingdom International - ministry page updated in 45 minutes", kind: "update" as const },
  ];

  const doubled = [...wins, ...wins];

  const iconMap = { stat: "↑", update: "✓", launch: "⚡" } as const;
  const colorMap = {
    stat: "text-green-400",
    update: "text-blue-300",
    launch: "text-yellow-300",
  } as const;

  return (
    <div className="bg-gray-950 py-3.5 overflow-hidden border-y border-gray-800">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          width: "max-content",
          animation: "marquee-reverse 80s linear infinite",
        }}
      >
        {doubled.map(({ text, kind }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm text-gray-400"
          >
            <span className={`font-bold shrink-0 ${colorMap[kind]}`}>
              {iconMap[kind]}
            </span>
            {text}
            <span className="text-gray-700 ml-6 shrink-0">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Inline Quote Form ───────────────────────────────────────────────────────

function InlineQuoteForm() {
  return (
    <section id="get-started" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-sm font-semibold text-blue-100 mb-4">
            <Zap className="w-4 h-4 text-yellow-300" />
            Takes less than 60 seconds
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Get Your Website Started
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Tell us a little about your business and we&apos;ll get your
            new website underway - no obligation, no sales pressure.
          </p>
        </div>

        <form
          action="/web-design-pricing"
          method="get"
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="business"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Business Type
              </label>
              <select
                id="business"
                name="business"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm bg-white"
              >
                <option value="">Select your type…</option>
                <option value="restaurant">Restaurant / Food</option>
                <option value="church">Church / Non-Profit</option>
                <option value="healthcare">Healthcare / Medical</option>
                <option value="retail">Retail / Shop</option>
                <option value="contractor">Contractor / Trades</option>
                <option value="professional">Professional Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email or Phone
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                placeholder="you@yourbusiness.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              Get My Website
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-400">
              Or call us directly at{" "}
              <a
                href="tel:5592823075"
                className="text-blue-600 font-semibold hover:underline"
              >
                (559) 282-3075
              </a>
            </p>
          </div>
        </form>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-blue-100">
          {[
            "No obligation",
            "No sales pressure",
            "Response in under 24 hours",
            "Cancel anytime",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-300 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brandon's Guarantee ─────────────────────────────────────────────────────

function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-200">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            {/* Guarantee seal */}
            <div className="relative inline-flex items-center justify-center w-36 h-36 mb-8 mx-auto">
              {/* Outer dashed ring (slightly rotated for classic seal look) */}
              <div
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-white/35"
                style={{ transform: "rotate(15deg)" }}
              />
              {/* Inner solid ring */}
              <div className="absolute inset-3.5 rounded-full border-2 border-white/30" />
              {/* Filled background circle */}
              <div className="absolute inset-3.5 rounded-full bg-white/10" />
              {/* Content */}
              <div className="relative flex flex-col items-center justify-center text-center gap-0.5">
                <Shield className="w-5 h-5 text-white mb-0.5" />
                <span className="text-3xl font-extrabold text-white leading-none">100%</span>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.15em] leading-none">
                  Money Back
                </span>
                <div className="w-14 h-px bg-white/30 my-1" />
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.15em] leading-none">
                  Guarantee
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Brandon&apos;s Personal Guarantee
            </h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              I personally stand behind every website we build. If you&apos;re not
              100% satisfied, I&apos;ll give you a full refund - and you keep your
              website. No questions asked.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <div className="font-bold text-white">Brandon Hopkins</div>
                <div className="text-sm text-blue-200">Founder, CalTech Web</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/web-design-pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 text-lg font-bold hover:bg-blue-50 transition-all shadow-md"
              >
                Get My Website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:5592823075"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (559) 282-3075
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

function Pricing() {
  const included = [
    { text: "Custom website design", highlight: false },
    { text: "Mobile-responsive layout", highlight: false },
    { text: "Unlimited content updates", highlight: true },
    { text: "Free redesigns - whenever you want", highlight: true },
    { text: "Hosting & SSL certificate", highlight: false },
    { text: "Priority support (93% done in <1 hour)", highlight: true },
    { text: "Basic on-page SEO", highlight: false },
    { text: "Regular backups", highlight: false },
    { text: "No long-term contracts", highlight: false },
    { text: "Personal account manager", highlight: false },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100 mb-4">
            <Check className="w-4 h-4" />
            No hidden fees, ever
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            One plan. Everything included. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Savings callout above card */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl px-5 py-3.5 mb-5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900">Save $4,800+/year vs. a typical agency</div>
              <div className="text-xs text-gray-500">Average agency charges $500–$2,000/mo for less. You get more for $99.</div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border-2 border-blue-600 shadow-2xl shadow-blue-100 overflow-hidden">
            {/* Best Value ribbon */}
            <div className="absolute top-5 -right-8 bg-orange-500 text-white text-xs font-bold px-10 py-1 rotate-45 shadow-md z-10">
              Best Value
            </div>

            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-9 text-white text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />

              <div className="relative">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-3">
                  All-Inclusive Plan
                </div>
                <div className="flex items-end justify-center gap-1 mb-1">
                  <span className="text-2xl font-bold mt-2">$</span>
                  <span className="text-7xl font-extrabold leading-none">99</span>
                  <span className="text-xl text-blue-200 mb-2">/mo</span>
                </div>
                <p className="text-blue-200 text-sm mb-4">Everything your website needs - nothing extra to pay</p>

                {/* Comparison strikethrough */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="text-sm text-blue-200 line-through decoration-red-400">$500–$2,000/mo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
                  <span className="text-sm font-bold text-white">$99/mo</span>
                </div>
              </div>
            </div>

            {/* Included list */}
            <div className="px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Everything included:</div>
              <ul className="space-y-3 mb-8">
                {included.map(({ text, highlight }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${highlight ? "bg-green-500" : "bg-green-100"}`}>
                      <Check className={`w-3 h-3 ${highlight ? "text-white" : "text-green-600"}`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${highlight ? "text-gray-900 font-semibold" : "text-gray-700"}`}>{text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/web-design-pricing"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Get My Website
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-center text-xs text-gray-400 mt-4">
                No contracts · Cancel anytime · Refund guaranteed
              </p>
            </div>

            {/* Social proof strip at bottom */}
            <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 flex items-center justify-center gap-3">
              {/* Avatar stack */}
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
                Join <span className="font-bold text-gray-900">800+</span> businesses already on this plan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  const reasons = [
    {
      icon: Zap,
      title: "Live in 5–7 days",
      desc: "Your site is up and running before the week is out.",
    },
    {
      icon: Shield,
      title: "Money-back guarantee",
      desc: "Not happy? Full refund - and you keep your website.",
    },
    {
      icon: Clock,
      title: "Support in under 1 hour",
      desc: "93% of requests done before your next cup of coffee.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold">
            <Zap className="w-4 h-4" />
            Take the next step
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 text-center leading-tight">
          Your business deserves a{" "}
          <span className="text-blue-600">great website.</span>
          <br className="hidden sm:block" />
          All-in for{" "}
          <span className="text-orange-500">$99/month.</span>
        </h2>

        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto text-center leading-relaxed">
          Join 800+ small businesses, churches, and non-profits who trust CalTech
          Web. Getting started is easy. Schedule a call and we'll take it from there.
        </p>

        {/* Three quick reasons */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{title}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-snug">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            (559) 282-3075
          </a>
        </div>

        {/* Brandon's personal close */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 max-w-2xl mx-auto shadow-sm">
          <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-11 h-11 rounded-full object-cover shrink-0" />
          <p className="text-sm text-gray-600 italic leading-relaxed text-center sm:text-left">
            &ldquo;I personally review every new project and stand behind every
            website we build.{" "}
            <span className="font-semibold text-gray-800 not-italic">
              If you&apos;re not satisfied, you get a full refund - and keep your
              site.
            </span>{" "}
            That&apos;s my promise.&rdquo;
          </p>
          <div className="shrink-0 text-right sm:ml-auto">
            <div className="text-sm font-bold text-gray-900 whitespace-nowrap">Brandon Hopkins</div>
            <div className="text-xs text-gray-400 whitespace-nowrap">Founder, CalTech Web</div>
          </div>
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
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
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

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Web Design", "Website Hosting", "Monthly Updates", "Free Redesigns", "SEO Basics"].map((s) => (
                <li key={s}>
                  <Link href="/web-design-pricing" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm">
              {["Small Businesses", "Church Websites", "Non-Profits", "Healthcare", "Real Estate"].map((s) => (
                <li key={s}>
                  <Link href="/web-design-portfolio" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", href: "/brandon-hopkins" },
                { label: "Portfolio", href: "/web-design-portfolio" },
                { label: "Pricing", href: "/web-design-pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Get My Website", href: "/web-design-pricing" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} CalTech Web. All rights reserved. California-based, serving clients nationwide.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Sticky Mobile CTA ───────────────────────────────────────────────────────

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Safe area padding for iOS home indicator */}
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 pt-3 pb-4" style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}>
        <div className="flex gap-3">
          <a
            href="tel:5592823075"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link
            href="#get-started"
            className="flex-[2] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors shadow-md"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <Nav />
      <main className="pb-[76px] md:pb-0">
        {/* ── Awareness: hook + credibility ── */}
        <Hero />
        <TrustBar />
        <IndustriesTicker />

        {/* ── Value proposition: what you get & what it costs ── */}
        <Comparison />
        <WhatIsIncluded />
        <Pricing />
        <SavingsCalculator />

        {/* ── Process: how easy it is ── */}
        <HowItWorks />

        {/* ── Proof: results, portfolio, testimonials ── */}
        <Transformation />
        <PortfolioPreview />
        <CaseStudy />
        <Testimonials />

        {/* ── Trust: who we serve, meet Brandon, support quality ── */}
        <WhoWeServe />
        <MeetBrandon />
        <SupportDemo />

        {/* ── Conversion: final push ── */}
        <ClientWinsTicker />
        <InlineQuoteForm />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <SocialProofToast />
      <StickyPricingCTA />
    </>
  );
}
