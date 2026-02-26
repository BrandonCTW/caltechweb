"use client";

import {
  Phone,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Clock,
  DollarSign,
  ShieldCheck,
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
          How Does Your Website{" "}
          <span className="text-orange-400">Grade?</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          We analyze 25+ factors across 5 categories and show you exactly where
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
        <ConversionStrip />
      </main>
      <Footer />
    </>
  );
}
