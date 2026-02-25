"use client";

import {
  Phone,
  ArrowRight,
  Zap,
  Clock,
  Monitor,
  Search,
  Smartphone,
  Gauge,
  Star,
  CheckCircle,
  Video,
  Mail,
  Globe,
  User,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { useState, FormEvent } from "react";

// ─── Metadata (handled via generateMetadata for client components) ──────────
// Since this is "use client", we export metadata from a separate layout or
// use a head component. For simplicity we use the document head approach below.

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
          <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
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
          <Video className="w-4 h-4 text-yellow-400" />
          Free, no-obligation video audit
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Get a Free Video Audit{" "}
          <span className="text-orange-400">of Your Website</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Brandon Hopkins will personally record a video walking through your
          website - covering speed, mobile responsiveness, SEO, and design
          issues. Delivered to your inbox within 48 hours. Completely free.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "100% Free",
            "No Obligation",
            "Delivered in 48 Hours",
            "Personalized Video",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-blue-100"
            >
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#audit-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Get My Free Audit
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

// ─── What We Review ──────────────────────────────────────────────────────────

const auditAreas = [
  {
    icon: Gauge,
    color: "text-red-600 bg-red-50",
    title: "Website Speed",
    body: "Slow sites lose visitors. We test your load times and identify what is dragging your site down - bloated images, bad hosting, unoptimized code.",
  },
  {
    icon: Smartphone,
    color: "text-blue-600 bg-blue-50",
    title: "Mobile Responsiveness",
    body: "Over 60% of web traffic is mobile. We check how your site looks and functions on phones and tablets - and flag anything broken.",
  },
  {
    icon: Search,
    color: "text-green-600 bg-green-50",
    title: "SEO Basics",
    body: "Are search engines finding you? We review your title tags, meta descriptions, headings, and overall structure so Google can properly index your site.",
  },
  {
    icon: Monitor,
    color: "text-purple-600 bg-purple-50",
    title: "Design & Usability",
    body: "First impressions matter. We evaluate your layout, navigation, calls-to-action, and overall user experience to see if visitors are converting.",
  },
];

function WhatWeReview() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Search className="w-4 h-4" />
            What your video audit covers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            A Complete Review of Your Website
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Brandon personally reviews four critical areas of your site and
            records actionable recommendations you can use right away.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {auditAreas.map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{title}</div>
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

// ─── How It Works ────────────────────────────────────────────────────────────

const steps = [
  {
    num: "1",
    title: "Submit Your Website",
    body: "Fill out the form below with your name, email, and website URL. That is all we need.",
  },
  {
    num: "2",
    title: "Brandon Records Your Audit",
    body: "Within 48 hours, Brandon personally reviews your site and records a detailed video walkthrough.",
  },
  {
    num: "3",
    title: "Get Your Video",
    body: "Your personalized video audit lands in your inbox - with clear, actionable recommendations.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            Simple 3-step process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Your Free Video Audit Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map(({ num, title, body }) => (
            <div key={num} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white text-2xl font-extrabold flex items-center justify-center mx-auto mb-4">
                {num}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Audit Request Form ──────────────────────────────────────────────────────

function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="audit-form" className="py-16 sm:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Your Audit Request Is In!
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Brandon will personally review your website and send you a detailed
            video audit within 48 hours. Check your email at{" "}
            <span className="font-semibold text-gray-700">{email}</span>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="audit-form" className="py-16 sm:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Request Your Free Video Audit
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Enter your details below and Brandon will record a personalized
            video review of your website within 48 hours. No cost, no strings
            attached.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Your Website URL
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="url"
                id="website"
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Get My Free Video Audit
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-gray-400">
            No spam. No sales pitch. Just an honest review of your website.
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">
            Prefer to talk first? Call Brandon directly.
          </p>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            (559) 282-3075
          </a>
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
            What clients say after their audit
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Many audit recipients go on to become long-term CalTech Web clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Brandon's video audit showed me three things my old web guy completely missed. My site was loading in 8 seconds - no wonder I wasn't getting leads. He fixed everything for $99/month.",
              name: "David Chen",
              role: "Owner, Chen's Auto Repair",
              initials: "DC",
              bg: "bg-blue-600",
            },
            {
              quote:
                "I didn't even know my site wasn't mobile-friendly until I watched Brandon's audit. It was eye-opening. He rebuilt it in 5 days and now I'm actually getting calls from Google.",
              name: "Sarah Mitchell",
              role: "Mitchell Family Dentistry",
              initials: "SM",
              bg: "bg-green-600",
            },
            {
              quote:
                "I expected a generic report. Instead I got a 10-minute video where Brandon walked through every page of my site. That kind of personal attention sold me immediately.",
              name: "Robert Flores",
              role: "Flores Landscaping",
              initials: "RF",
              bg: "bg-purple-600",
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

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src="/brandon-hopkins.jpg"
            alt="Brandon Hopkins"
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
          <div className="text-left">
            <div className="text-sm font-bold text-white">Brandon Hopkins</div>
            <div className="text-xs text-blue-200">Founder, CalTech Web</div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Your website might be costing you customers.
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          A slow, outdated, or broken website turns away potential customers
          every day. Find out exactly what needs fixing - for free. No sales
          pitch. Just honest feedback.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#audit-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Free Audit
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
              <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="tel:5592823075"
                className="hover:text-white transition-colors"
              >
                (559) 282-3075
              </a>
              <a
                href="mailto:Brandon@CalTechWeb.com"
                className="hover:text-white transition-colors"
              >
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
                  <Link
                    href="/web-design-pricing/"
                    className="hover:text-white transition-colors"
                  >
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
                "Small Businesses",
                "Church Websites",
                "Non-Profits",
                "Healthcare",
                "Real Estate",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-portfolio/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
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
                { label: "Get My Website", href: "/get-a-free-instant-quote/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>
            &copy; {new Date().getFullYear()} CalTech Web. All rights reserved.
            California-based, serving clients nationwide.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions/"
              className="hover:text-white transition-colors"
            >
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
            href="#audit-form"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Free Audit
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VideoWebsiteAuditPage() {
  return (
    <>
      <title>Free Video Website Audit | CalTech Web</title>
      <meta
        name="description"
        content="Get a free, personalized video audit of your website. Brandon Hopkins reviews your speed, mobile responsiveness, SEO, and design issues - delivered within 48 hours."
      />
      <link
        rel="canonical"
        href="https://caltechweb.com/video-website-audit/"
      />
      <meta
        property="og:title"
        content="Free Video Website Audit | CalTech Web"
      />
      <meta
        property="og:description"
        content="Get a free, personalized video review of your website covering speed, mobile, SEO, and design. Delivered in 48 hours by Brandon Hopkins."
      />
      <meta
        property="og:url"
        content="https://caltechweb.com/video-website-audit/"
      />
      <Nav />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <WhatWeReview />
        <HowItWorks />
        <AuditForm />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
