"use client";

import {
  Phone,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Clock,
  DollarSign,
  ShieldCheck,
  ChevronDown,
  Globe,
  BarChart3,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebsiteReportCard from "@/components/WebsiteReportCard";
import Link from "next/link";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <ClipboardCheck className="w-4 h-4 text-yellow-400" />
          Free Website Analysis
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Free Website Report Card —{" "}
          <span className="text-orange-400">See Your Grade Instantly</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          We analyze 35+ factors across 5 categories and show you exactly where
          your site needs help — and what it would look like after CalTech Web
          fixes it.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Instant Results", "No Signup", "Before & After", "100% Free"].map(
            (item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-blue-100"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <WebsiteReportCard />
      </div>
    </section>
  );
}

// ─── Trust Signals ───────────────────────────────────────────────────────────

const trustItems = [
  {
    icon: CheckCircle,
    label: "800+ Sites Built",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Clock,
    label: "24h Response",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: DollarSign,
    label: "$99/month",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: ShieldCheck,
    label: "Money-Back Guarantee",
    color: "text-purple-600 bg-purple-50",
  },
];

function TrustSignals() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {trustItems.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${color}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-gray-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────

const steps = [
  {
    icon: Globe,
    number: "1",
    title: "Enter Your URL",
    description:
      "Paste your website address into the tool above. No signup, no email, no account needed.",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "Get Your Grade",
    description:
      "Our AI analyzes 35+ factors across first impression, mobile experience, trust signals, lead capture, and SEO basics.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "See the Before & After",
    description:
      "Toggle between your current score and what it would look like after CalTech Web fixes every issue for $99/month.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Three steps. Sixty seconds. Zero cost.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-4">
                <Icon className="w-7 h-7" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-[calc(50%+28px)] w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                {number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ────────────────────────────────────────────────────────────

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
      "$99/month is reasonable to get rid of a headache for me. Huge THANK YOU to CalTech Web for producing such a great website for us!",
    name: "Mike Fuentes",
    role: "Owner, Fuentes Concrete, Inc.",
    initials: "MF",
    color: "bg-orange-600",
  },
];

function SocialProof() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold border border-yellow-100 mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            What Clients Say After Switching
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            800+ Businesses Made the Upgrade
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            They ran the report card, saw the issues, and let CalTech Web fix
            everything for $99/month.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {name}
                  </div>
                  <div className="text-xs text-gray-500">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Join 800+ businesses who trust CalTech Web.{" "}
            <Link
              href="/web-design-pricing/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Get started today &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Is the website report card really free?",
    a: "Yes, 100% free. No credit card, no signup, no email required. Just enter your URL and get your results instantly.",
  },
  {
    q: "What does the report card analyze?",
    a: "We grade your site across five categories: First Impression (design, layout, branding), Mobile Experience (responsive design, tap targets, speed), Trust & Credibility (SSL, reviews, contact info), Lead Capture (CTAs, forms, phone number visibility), and SEO Basics (meta tags, headings, page speed). Over 35 individual checks in total.",
  },
  {
    q: "How accurate is the AI analysis?",
    a: "Our tool fetches your live website and evaluates it using the same criteria Google and real visitors use. While no automated tool replaces a full manual audit, our report card identifies the most impactful issues that cost you visitors and customers.",
  },
  {
    q: "What does the 'With CalTech Web' view show?",
    a: "It shows your projected score after CalTech Web builds you a new, professionally designed website. Every failing check is resolved — from mobile optimization to page speed to proper SEO markup — all included in the $99/month plan.",
  },
  {
    q: "How long does the scan take?",
    a: "Most scans complete in under 30 seconds. The tool fetches your website, runs it through our analysis engine, and generates a full report with actionable recommendations.",
  },
  {
    q: "Can I scan any website?",
    a: "You can scan any publicly accessible website. Sites behind login walls, staging environments, or localhost addresses cannot be analyzed.",
  },
];

function FAQ() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you need to know about the free website report card.
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
      </div>
    </section>
  );
}

// ─── Conversion Strip ────────────────────────────────────────────────────────

function ConversionStrip() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Upgrade Your Website?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          CalTech Web builds fast, professional websites for small businesses
          starting at $99/month. No contracts, no hidden fees, no surprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/web-design-pricing/"
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FreeWebsiteReportCardPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <HowItWorks />
        <SocialProof />
        <FAQ />
        <ConversionStrip />
      </main>
      <Footer />
    </>
  );
}
