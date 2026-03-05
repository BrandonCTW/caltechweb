import type { Metadata } from "next";
import {
  Check,
  Phone,
  ArrowRight,
  Heart,
  Monitor,
  Calendar,
  DollarSign,
  RefreshCw,
  Headphones,
  Shield,
  Star,
  Users,
  ChevronDown,
  MessageSquare,
  Paintbrush,
  Rocket,
  Clock,
  Zap,
  CheckCircle,
  XCircle,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nonprofit Website Design | $99/month | CalTech Web",
  description:
    "Professional nonprofit website design for $99/month. Membership management, donation integration, event registration, and unlimited updates. We handle everything.",
  keywords:
    "nonprofit website design, nonprofit web design, nonprofit website builder, affordable nonprofit website, charity website design",
  alternates: { canonical: "https://caltechweb.com/nonprofit-website-design/" },
  openGraph: {
    title: "Nonprofit Website Design | $99/month | CalTech Web",
    description:
      "You run a nonprofit. You're already stretched thin. We build and manage your entire website for $99/month so you can focus on your mission.",
    url: "https://caltechweb.com/nonprofit-website-design/",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins, Founder of CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/brandon-hopkins.jpg"],
  },
};

// --- Structured Data ---

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nonprofit Website Design",
  url: "https://caltechweb.com/nonprofit-website-design/",
  provider: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
  },
  description:
    "Professional nonprofit website design for $99/month. Includes membership management, donation integration, event registration, hosting, SSL, and unlimited updates.",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "99",
      priceCurrency: "USD",
      unitText: "MONTH",
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
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Christina Beckstead" },
      reviewBody:
        "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Ryan McWherter" },
      reviewBody:
        "Wow! I'm blown away by the new website and how easy it has been to work with CalTech Web!",
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
      name: "Nonprofit Website Design",
      item: "https://caltechweb.com/nonprofit-website-design/",
    },
  ],
};

// --- Hero ---

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          Trusted by nonprofits, foundations, and community organizations
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          You Have a Mission.{" "}
          <span className="text-orange-400">We Handle the Website.</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Nonprofit leaders are stretched thin. We build and manage your entire
          website for $99/month so you can focus on what actually matters.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Donation Integration",
            "Member Management",
            "Event Registration",
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Get My Nonprofit Website
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

// --- Stats Bar ---

const stats = [
  { value: "800+", label: "Websites Designed" },
  { value: "$99", label: "Per Month, All-Inclusive" },
  { value: "5-7", label: "Days to Launch" },
  { value: "93%", label: "Updates in Under 1 Hour" },
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

// --- Transformation ---

const before = [
  "Chasing a web developer who never responds",
  "Paying hourly every time something needs updating",
  "A website that looks years out of date",
  "Events and deadlines missed because the site wasn't updated",
  "Losing donors because the donation page is broken or confusing",
  "Managing logins, hosting, and tech headaches yourself",
];

const after = [
  "One email and it's done, usually within the hour",
  "Unlimited updates included — no invoices, no surprises",
  "A professional site that reflects the quality of your work",
  "Events published, deadlines posted, announcements up fast",
  "A clean, trust-building donation experience that converts",
  "We handle every technical detail. You don't touch a thing.",
];

function Transformation() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            The CalTech Web difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Changes When You Work With Us
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Most nonprofit leaders come to us frustrated, overextended, and
            tired of a website that&apos;s more burden than benefit. Here&apos;s what
            the shift looks like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Before */}
          <div className="rounded-2xl border border-red-100 bg-white overflow-hidden">
            <div className="bg-red-50 border-b border-red-100 px-6 py-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <span className="font-bold text-red-700 text-sm uppercase tracking-wide">
                Before CalTech Web
              </span>
            </div>
            <ul className="divide-y divide-gray-50">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 px-6 py-4">
                  <XCircle className="w-4 h-4 text-red-300 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-green-100 bg-white overflow-hidden">
            <div className="bg-green-50 border-b border-green-100 px-6 py-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-bold text-green-700 text-sm uppercase tracking-wide">
                After CalTech Web
              </span>
            </div>
            <ul className="divide-y divide-gray-50">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 px-6 py-4">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- We Handle Everything ---

const handled = [
  {
    icon: Paintbrush,
    color: "text-blue-600 bg-blue-50",
    title: "Custom Website Design",
    body: "We design your site from scratch — no templates, no cookie-cutter layouts. Your website reflects who you are and the community you serve.",
  },
  {
    icon: DollarSign,
    color: "text-green-600 bg-green-50",
    title: "Donation & Payment Integration",
    body: "Secure, easy online donations and payment processing built right into your website. We handle the setup so donors can give without friction.",
  },
  {
    icon: Users,
    color: "text-purple-600 bg-purple-50",
    title: "Membership Management",
    body: "Member sign-ups, renewals, and directories — we build what your organization needs to manage your community online.",
  },
  {
    icon: Calendar,
    color: "text-orange-600 bg-orange-50",
    title: "Events & Registration",
    body: "Event pages, raffle registration, fundraiser sign-ups — everything organized and easy for participants to find and use.",
  },
  {
    icon: RefreshCw,
    color: "text-indigo-600 bg-indigo-50",
    title: "Unlimited Updates, Included",
    body: "Need to update your board, add a new program, or post an event? Just email us. Updates are included in your $99/month — no hourly fees.",
  },
  {
    icon: Globe,
    color: "text-teal-600 bg-teal-50",
    title: "Hosting, SSL & Domain",
    body: "We take care of every technical detail. Fast hosting, SSL security certificate, and domain connection — all handled and included.",
  },
];

function WeHandleEverything() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 fill-blue-600 text-blue-600" />
            Built for nonprofits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything Your Organization Needs Online
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From donations to membership to events, your nonprofit website comes
            fully equipped — and we manage it all so you don&apos;t have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {handled.map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Time Savings Callout ---

function TimeSavings() {
  return (
    <section className="py-16 sm:py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 sm:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            You Didn&apos;t Start a Nonprofit to Manage a Website
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Every hour you spend wrestling with your website is an hour away from
            your programs, your donors, and the people you serve. CalTech Web
            gives that time back. We handle the website completely — design,
            updates, hosting, tech support — so you can stay focused on your
            mission.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                stat: "42 min",
                label: "Average time to complete a support request",
              },
              {
                stat: "96%",
                label: "Of tickets completed within 24 hours",
              },
              {
                stat: "$0",
                label: "Extra cost for updates, ever",
              },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-600 mb-1">
                  {stat}
                </div>
                <div className="text-sm text-gray-500 leading-snug">{label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-base font-bold hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5"
          >
            Get Started for $99/month
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Why CalTech Web ---

function WhyCalTechWeb() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Nonprofits Choose CalTech Web
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            800+ websites and 20 years of experience. We know what nonprofit
            organizations need, and we deliver it at a price that respects your
            budget.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: DollarSign,
              color: "text-green-600 bg-green-50",
              title: "$99/month, everything included",
              body: "Custom design, hosting, SSL, unlimited updates, and free redesigns. No setup fees, no surprise invoices. The price you see is the price you pay.",
            },
            {
              icon: Headphones,
              color: "text-blue-600 bg-blue-50",
              title: "Real support, responded to within the hour",
              body: "When something needs updating, just email support@caltechweb.com. Most requests are handled within 42 minutes. Not next week. Today.",
            },
            {
              icon: RefreshCw,
              color: "text-orange-600 bg-orange-50",
              title: "Free redesigns, any time",
              body: "Rebranding? New leadership? New programs? We redesign your website at no extra cost whenever you need it. Most agencies charge $3,000+ for this.",
            },
            {
              icon: Shield,
              color: "text-purple-600 bg-purple-50",
              title: "No contracts. No risk.",
              body: "Month-to-month only. If you ever need to leave, you keep your website files. We believe you should stay because it&apos;s working, not because you&apos;re locked in.",
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
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- How It Works ---

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    accent: "text-blue-600",
    title: "Tell Us About Your Organization",
    body: "Sign up and Brandon personally reaches out within 24 hours. Share your mission, programs, logo, and any photos. No lengthy forms or onboarding calls.",
    detail: "Personal call within 24 hours",
  },
  {
    step: "02",
    icon: Paintbrush,
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    accent: "text-violet-600",
    title: "We Build Your Entire Website",
    body: "Custom design, donation setup, event pages, member tools — we handle every detail. You review and approve before it goes live. Zero technical work on your end.",
    detail: "Live in 5-7 business days",
  },
  {
    step: "03",
    icon: Rocket,
    gradient: "from-green-500 to-green-600",
    lightBg: "bg-green-50",
    accent: "text-green-600",
    title: "Go Live & Never Think About It Again",
    body: "Your site goes live and from that point forward, every update is handled. New programs, event changes, board updates, announcements — just email us and it&apos;s done.",
    detail: "93% of updates done in under 1 hour",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100 mb-4">
            <Check className="w-4 h-4" />
            Simple 3-step process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            How Easy It Is to Get Started
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            You tell us about your mission. We do the rest. Live in under a week.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="hidden sm:flex absolute top-[56px] z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm items-center justify-center"
              style={{ left: `${i * 33.33}%`, transform: "translateX(-50%)" }}
            >
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}

          {steps.map(
            ({ step, icon: Icon, gradient, lightBg, accent, title, body, detail }) => (
              <div
                key={step}
                className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-6">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{body}</p>
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${lightBg} text-xs font-semibold ${accent}`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {detail}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials ---

const testimonials = [
  {
    quote:
      "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    name: "Christina Beckstead",
    role: "Executive Director, Madera County Farm Bureau",
    image: "/testimonials/christina-beckstead.jpg",
    initials: "CB",
    color: "bg-blue-600",
    result: "55% traffic increase · 1,000+ page site",
  },
  {
    quote:
      "Wow! I'm blown away by the new website and how easy it has been to work with CalTech Web!",
    name: "Ryan McWherter",
    role: "Executive Director, Madera County Food Bank",
    image: "/testimonials/ryan-mcwherter.jpg",
    initials: "RM",
    color: "bg-green-600",
    result: "Fast launch · Zero tech headaches",
  },
  {
    quote:
      "CalTech Web gave our organization a professional online home that our members love. The event registration and chapter pages have made it so much easier to stay connected across the state.",
    name: "Sharron Zoller",
    role: "President, California Women for Agriculture",
    image: "/testimonials/sharron-zoller.jpg",
    initials: "CW",
    color: "bg-purple-600",
    result: "Member portal · Event pages · Statewide reach",
  },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold border border-yellow-100 mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            Real nonprofit results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Nonprofits That Made the Switch
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Executive directors and organization leaders who handed us the
            website and got back to their work.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, image, initials, color, result }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                    >
                      {initials}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{name}</div>
                    <div className="text-xs text-gray-400">{role}</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium">
                  <Check className="w-3 h-3" />
                  {result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---

const faqs = [
  {
    q: "How much does a nonprofit website cost?",
    a: "$99/month includes everything: custom design, hosting, SSL, unlimited updates, and free redesigns. No setup fee, no design fee, no contracts. You pay $99 the first month and every month after.",
  },
  {
    q: "Do you build websites for all types of nonprofits?",
    a: "Yes. We've built websites for food banks, agricultural organizations, member associations, foundations, community groups, and more. If you have a mission, we can build a website around it.",
  },
  {
    q: "What if we need something updated — who do we contact?",
    a: "Just email support@caltechweb.com and describe what you need. That's it. No project management, no approval workflows, no hourly billing. Most requests are completed within 42 minutes during business hours.",
  },
  {
    q: "Can you handle our donation and payment setup?",
    a: "Yes. We integrate with PayPal, Stripe, and other platforms to set up secure online donations, event payments, membership fees, and raffles. Setup is included in your monthly plan.",
  },
  {
    q: "How long does it take to launch a nonprofit website?",
    a: "Most sites go live within 5–7 business days once we have your content: logo, photos, programs description, and any other details. We've launched faster when organizations needed it urgently.",
  },
  {
    q: "What if we already have a website and just want to switch?",
    a: "We'll redesign and rebuild your website from scratch, migrating any content you want to keep. There's no extra charge for redesigns — they're included in your $99/month for as long as you're a client.",
  },
  {
    q: "Do we have to sign a long-term contract?",
    a: "Never. CalTech Web is month-to-month. If you ever need to cancel, you keep your website files. No penalties, no pressure.",
  },
  {
    q: "Can you build membership management or raffle systems?",
    a: "Yes. We've built scholarship systems, membership management portals, raffle sign-ups, and payment processing for nonprofits of all sizes. If your organization needs it, we can build it.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Nonprofit Website Questions, Answered
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Common questions from executive directors and nonprofit
            administrators before getting started.
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
              <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CTA ---

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
          <Heart className="w-8 h-8 text-pink-300 fill-pink-300" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to hand off your website for good?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join hundreds of organizations already using CalTech Web. Your new
          website can be live in as little as 5–7 business days — and after
          that, you never have to think about it again.
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

// --- Sticky Mobile CTA ---

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
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- Page ---

export default function NonprofitWebsiteDesignPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <Transformation />
        <WeHandleEverything />
        <TimeSavings />
        <WhyCalTechWeb />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
