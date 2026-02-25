import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Globe,
  Star,
  TrendingUp,
  Check,
  ExternalLink,
  Quote,
  Building2,
  Heart,
  Briefcase,
  Utensils,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Portfolio - 800+ Sites Built | CalTech Web",
  description:
    "Browse our portfolio of 800+ websites built for small businesses, churches, non-profits, restaurants, and medical practices - all for just $99/month.",
  alternates: { canonical: "https://caltechweb.com/web-design-portfolio" },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/web-design-portfolio",
    siteName: "CalTech Web",
    title: "Web Design Portfolio - 800+ Sites Built | CalTech Web",
    description:
      "Browse our portfolio of 800+ websites built for small businesses, churches, non-profits, restaurants, and medical practices - all for just $99/month.",
  },
};

// ─── Nav ─────────────────────────────────────────────────────────────────────

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
            <Link href="/web-design-portfolio" className="text-blue-600 font-semibold">Portfolio</Link>
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
              href="/web-design-pricing"
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          800+ websites designed &amp; managed nationwide
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Real Websites for{" "}
          <span className="text-orange-400">Real Businesses</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Every site below was built for{" "}
          <span className="font-bold text-white">$99/month</span> - custom
          design, hosting, unlimited updates, and fast support all included.
          No templates. No cookie-cutter layouts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 transition-colors shadow-lg"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:border-white/60 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Category Filter ──────────────────────────────────────────────────────────

const categories = [
  { label: "All", icon: Globe },
  { label: "Small Business", icon: Briefcase },
  { label: "Church", icon: Heart },
  { label: "Non-Profit", icon: Heart },
  { label: "Restaurant", icon: Utensils },
  { label: "Medical", icon: Stethoscope },
  { label: "Contractor", icon: Building2 },
];

function CategoryBar() {
  return (
    <section className="border-b border-gray-100 bg-white sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Items ──────────────────────────────────────────────────────────

type PortfolioItem = {
  name: string;
  category: string;
  tagline: string;
  gradient: string;
  accentColor: string;
  result?: string;
  featured?: boolean;
};

const portfolioItems: PortfolioItem[] = [
  {
    name: "Dr. Arjun Kanuri",
    category: "Medical",
    tagline: "Plastic surgery practice site with patient booking",
    gradient: "from-teal-600 to-cyan-500",
    accentColor: "bg-teal-50 text-teal-700",
    result: "+40% traffic increase, 2x conversions",
    featured: true,
  },
  {
    name: "Calvary Chapel Los Alamitos",
    category: "Church",
    tagline: "Church & ministry site with sermon uploads",
    gradient: "from-indigo-600 to-purple-600",
    accentColor: "bg-indigo-50 text-indigo-700",
    result: "Saves pastor 3+ hours/week",
  },
  {
    name: "Fuentes Concrete, Inc.",
    category: "Contractor",
    tagline: "Lead-generating contractor site with project gallery",
    gradient: "from-orange-500 to-red-500",
    accentColor: "bg-orange-50 text-orange-700",
    result: "Steady stream of new leads monthly",
  },
  {
    name: "Origami Owl / Chrissy Weems",
    category: "Small Business",
    tagline: "E-commerce jewelry site with product catalog",
    gradient: "from-pink-500 to-fuchsia-500",
    accentColor: "bg-pink-50 text-pink-700",
    result: "Online sales increased after launch",
  },
  {
    name: "Madera County Farm Bureau",
    category: "Non-Profit",
    tagline: "Membership management with scholarship system",
    gradient: "from-green-500 to-emerald-500",
    accentColor: "bg-green-50 text-green-700",
    result: "+55% traffic increase, 1,000+ pages",
  },
  {
    name: "ALV Floors",
    category: "Contractor",
    tagline: "Local SEO-optimized home services site",
    gradient: "from-blue-600 to-blue-500",
    accentColor: "bg-blue-50 text-blue-700",
    result: "Ranks on first page of Google locally",
  },
  {
    name: "Kingdom International",
    category: "Church",
    tagline: "Ministry site with outreach & event calendar",
    gradient: "from-violet-600 to-purple-500",
    accentColor: "bg-violet-50 text-violet-700",
  },
  {
    name: "TurboThao Nails",
    category: "Small Business",
    tagline: "Beauty salon site with service menu & booking",
    gradient: "from-amber-500 to-yellow-400",
    accentColor: "bg-amber-50 text-amber-700",
    result: "New client bookings up after relaunch",
  },
  {
    name: "Specialized Plastic Surgery",
    category: "Medical",
    tagline: "Procedure showcase with before/after gallery",
    gradient: "from-sky-500 to-blue-500",
    accentColor: "bg-sky-50 text-sky-700",
    result: "Consistent new patient inquiries from web",
  },
  {
    name: "California Women for Agriculture",
    category: "Non-Profit",
    tagline: "Advocacy site with events, membership & resources",
    gradient: "from-rose-500 to-pink-500",
    accentColor: "bg-rose-50 text-rose-700",
    result: "Membership engagement up since relaunch",
  },
  {
    name: "Longhorn Fire Alarm Design",
    category: "Small Business",
    tagline: "Professional services site with quote request",
    gradient: "from-slate-600 to-gray-600",
    accentColor: "bg-slate-50 text-slate-700",
  },
  {
    name: "Central Baptist Church",
    category: "Church",
    tagline: "Church site with sermon archive & online giving",
    gradient: "from-teal-600 to-green-500",
    accentColor: "bg-teal-50 text-teal-700",
    result: "Online giving adoption grew steadily",
  },
];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        item.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Mock browser preview */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 bg-black/20 backdrop-blur-sm px-3 py-2 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="mx-2 flex-1 bg-white/20 rounded px-2 py-0.5 text-white/70 text-xs truncate">
            caltechweb.com/portfolio/{item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}
          </span>
        </div>

        {/* Mock site layout */}
        <div className="absolute inset-0 top-9 flex flex-col items-center justify-center px-6 text-center">
          <div className="text-white font-extrabold text-xl sm:text-2xl mb-1 drop-shadow">{item.name}</div>
          <div className="text-white/80 text-sm">{item.tagline}</div>
          {item.result && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold">
              <TrendingUp className="w-3 h-3" />
              {item.result}
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-1.5 rounded-lg bg-white/90 shadow text-gray-600">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-gray-900 text-base leading-snug">{item.name}</h3>
          <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${item.accentColor}`}>
            {item.category}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{item.tagline}</p>
        {item.result && (
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-green-700">
            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
            {item.result}
          </div>
        )}
      </div>
    </div>
  );
}

function PortfolioGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.name} item={item} />
          ))}
        </div>

        {/* Load more hint */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Showing 12 of <span className="font-semibold text-gray-700">800+</span> websites
          </p>
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
          >
            Want one like these? Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Case Study ─────────────────────────────────────────────────────

function CaseStudy() {
  const results = [
    { stat: "40%", label: "Traffic Increase" },
    { stat: "2×", label: "Conversions" },
    { stat: "3 mos", label: "To See Results" },
    { stat: "$99", label: "Per Month" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-sm font-semibold text-green-700">
            <TrendingUp className="w-4 h-4" />
            Featured Case Study
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mock site preview */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-teal-700 to-cyan-600 h-80 flex flex-col">
              {/* Browser chrome */}
              <div className="bg-black/20 px-4 py-2.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="ml-2 flex-1 bg-white/20 rounded px-2 py-0.5 text-white/70 text-xs">
                  drkanuri.com
                </span>
              </div>

              {/* Mock site content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-extrabold text-xl mb-1">Dr. Arjun Kanuri</div>
                <div className="text-white/80 text-sm mb-4">Plastic &amp; Reconstructive Surgery</div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                    Book Appointment →
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                    New Patients Welcome
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-14 right-4 bg-green-500 text-white rounded-xl px-3 py-2 shadow-lg text-center">
              <div className="text-2xl font-extrabold leading-none">+40%</div>
              <div className="text-xs font-medium opacity-90">Traffic</div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              How a Plastic Surgeon Doubled Conversions in 3 Months
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Dr. Arjun Kanuri has been a CalTech Web client for over 9 years.
              His practice site was redesigned with a modern, mobile-first layout,
              clear patient booking flow, and trust-building content that showcases
              his expertise in plastic and reconstructive surgery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {results.map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-extrabold text-blue-600 mb-1">{stat}</div>
                  <div className="text-xs text-gray-500 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative bg-gray-50 rounded-2xl p-6 mb-8">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-blue-200" />
              <blockquote className="pl-4 text-gray-700 text-sm leading-relaxed italic">
                "Brandon's expertise and genuine care for my success have been game-changers.
                Thanks to CalTech Web, my professional image has never looked better, and my
                business is thriving like never before."
              </blockquote>
              <div className="flex items-center gap-3 mt-4 pl-4">
                <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">
                  AK
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Dr. Arjun Kanuri, MD, MBA</div>
                  <div className="text-xs text-gray-500">Plastic & Reconstructive Surgery, DC/MD/VA</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/web-design-pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-md"
            >
              I Want Results Like This
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── What Every Site Includes ─────────────────────────────────────────────────

const includes = [
  "Custom design - no templates",
  "Mobile-responsive layout",
  "Hosting &amp; SSL included",
  "Unlimited content updates",
  "Free redesign anytime",
  "On-page SEO setup",
  "5–7 day average launch",
  "Priority support (93% in 1 hr)",
];

function WhatsIncluded() {
  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              Every Site in Our Portfolio Costs{" "}
              <span className="text-orange-400">$99/month</span>
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              No surprises. No upsells. Everything you need to look
              professional and grow online - bundled into one flat monthly fee.
            </p>
            <Link
              href="/web-design-pricing"
              className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:text-white transition-colors text-sm"
            >
              See full pricing details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-400" />
                </div>
                <span
                  className="text-sm text-blue-100"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Ready to Join 800+ Happy Clients?
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Tell us about your business and we'll get started on your new site.
          It can be live in as few as 5 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 transition-colors shadow-lg"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call (559) 282-3075
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          Not happy? Get a refund and keep your website. That's Brandon's personal guarantee.
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} CalTech Web. Affordable website design at $99/month.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:Brandon@CalTechWeb.com" className="hover:text-white transition-colors">
              Brandon@CalTechWeb.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <Hero />
      <CategoryBar />
      <PortfolioGrid />
      <CaseStudy />
      <WhatsIncluded />
      <FinalCTA />
      <Footer />
    </>
  );
}
