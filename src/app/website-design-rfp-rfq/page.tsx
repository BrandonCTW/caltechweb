"use client";

import {
  Phone,
  ArrowRight,
  Check,
  Clock,
  Shield,
  Star,
  FileText,
  Building2,
  Church,
  Briefcase,
  DollarSign,
  Users,
  CheckCircle,
  Zap,
  User,
  Mail,
  Globe,
  MessageSquare,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { rfpFaqs } from "./faq-data";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <FileText className="w-4 h-4 text-yellow-400" />
          Responding to RFPs &amp; RFQs since 2015
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Website Design{" "}
          <span className="text-orange-400">RFP &amp; RFQ Response</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Looking for a website design vendor? CalTech Web&apos;s flat $99/month
          pricing simplifies procurement for government agencies, non-profits,
          churches, and businesses. No large upfront costs. No complex proposals.
          Just results.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "800+ Sites Delivered",
            "$0 Upfront",
            "5-7 Day Delivery",
            "$99/mo Flat Rate",
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
            href="#rfp-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Submit Your Project
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
  { value: "800+", label: "Websites Delivered" },
  { value: "$0", label: "Upfront Cost" },
  { value: "5-7", label: "Days to Launch" },
  { value: "93%", label: "Updates in <1 Hour" },
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

// ─── Who We Serve ────────────────────────────────────────────────────────────

const audiences = [
  {
    icon: Building2,
    color: "text-blue-600 bg-blue-50",
    title: "Government Agencies",
    body: "Federal, state, and local agencies benefit from our simple flat-rate pricing. No complex bids, no cost overruns, no multi-year contracts. Easy to budget, easy to approve.",
  },
  {
    icon: Church,
    color: "text-purple-600 bg-purple-50",
    title: "Non-Profits & Churches",
    body: "Stretch your budget further. $99/month covers everything - design, hosting, updates, and support. No large capital expenditure required for board approval.",
  },
  {
    icon: Briefcase,
    color: "text-orange-600 bg-orange-50",
    title: "Businesses & Organizations",
    body: "Whether you are a small business or a mid-size organization, our model eliminates procurement headaches. One vendor, one invoice, one predictable monthly cost.",
  },
  {
    icon: Users,
    color: "text-green-600 bg-green-50",
    title: "School Districts & Education",
    body: "Schools and districts need reliable, ADA-accessible websites at budget-friendly pricing. CalTech Web delivers professional sites that meet compliance requirements.",
  },
];

function WhoWeServe() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            Industries we serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Website Design for Organizations of All Sizes
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            CalTech Web has delivered 800+ websites across government,
            non-profit, church, and business sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map(({ icon: Icon, color, title, body }) => (
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

// ─── Why CalTech Web for RFP/RFQ ─────────────────────────────────────────────

function WhyCalTechWeb() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Procurement made simple
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why CalTech Web Simplifies Your RFP Process
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Our flat-rate model eliminates the complexity and risk of traditional
            website design procurement.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: DollarSign,
              color: "text-green-600 bg-green-50",
              title: "Flat $99/month - No Large Upfront Costs",
              body: "Most vendors quote $5,000-$50,000+ upfront. CalTech Web eliminates capital expenditure entirely. $99/month covers design, hosting, SSL, updates, and support. Easy to budget, easy to approve.",
            },
            {
              icon: Zap,
              color: "text-orange-600 bg-orange-50",
              title: "5-7 Day Average Delivery",
              body: "Traditional projects take 4-12 weeks (or longer). We design, build, and launch your website in 5-7 business days. Your project stays on schedule.",
            },
            {
              icon: Shield,
              color: "text-blue-600 bg-blue-50",
              title: "No Contracts, No Vendor Lock-In",
              body: "Month-to-month service means you are never locked into a multi-year agreement. If your needs change, you can cancel anytime and keep your website files.",
            },
            {
              icon: Clock,
              color: "text-purple-600 bg-purple-50",
              title: "93% of Support Requests Completed in Under 1 Hour",
              body: "Over 5,000 support tickets closed. When your organization needs updates, changes, or troubleshooting, it happens fast - not on a 2-week turnaround.",
            },
            {
              icon: Star,
              color: "text-yellow-600 bg-yellow-50",
              title: "Free Redesigns Included",
              body: "Branding refresh? New leadership? Updated mission? Your website gets redesigned at no extra cost whenever you need a new look. No change orders required.",
            },
            {
              icon: CheckCircle,
              color: "text-red-600 bg-red-50",
              title: "800+ Websites Delivered - Proven Track Record",
              body: "CalTech Web is not a startup. With 800+ websites delivered across multiple industries, you are working with a proven vendor who delivers consistently.",
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

// ─── What Is Included ────────────────────────────────────────────────────────

function WhatIsIncluded() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Is Included in Every $99/Month Website
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            One flat rate. Everything your organization needs. No add-ons, no
            hidden fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {[
            "Custom website design tailored to your brand",
            "Mobile-responsive on all devices",
            "Fully managed website hosting",
            "SSL certificate (HTTPS security)",
            "Unlimited content updates",
            "Free redesigns whenever needed",
            "Basic on-page SEO setup",
            "Contact forms and click-to-call",
            "Google Analytics integration",
            "Daily backups and uptime monitoring",
            "Priority support - 93% done in <1 hour",
            "Domain connection (you keep ownership)",
          ].map((feature) => (
            <div key={feature} className="flex items-start gap-3 py-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
          >
            View full pricing details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── RFP/RFQ Submission Form ─────────────────────────────────────────────────

function RFPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [orgType, setOrgType] = useState("");
  const [website, setWebsite] = useState("");
  const [details, setDetails] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    const subject = encodeURIComponent(
      `Website Design RFP from ${organization}${orgType ? ` (${orgType})` : ""}`
    );
    const body = encodeURIComponent(
      `Contact: ${name}\nEmail: ${email}\nOrganization: ${organization}\nOrganization Type: ${orgType || "Not specified"}\nCurrent Website: ${website || "None"}\n\nProject Requirements:\n${details}`
    );

    try {
      // Attempt API submission first
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization,
          orgType,
          website,
          message: details,
          source: "rfp-rfq",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        return;
      }
    } catch {
      // API not available — fall through to mailto
    }

    // Fallback: open mailto so the submission still reaches Brandon
    window.location.href = `mailto:Brandon@CalTechWeb.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setSending(false);
  }

  if (submitted) {
    return (
      <section id="rfp-form" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Project Received!
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Brandon will review your project requirements and respond within one
            business day. Check your email at{" "}
            <span className="font-semibold text-gray-700">{email}</span> for his
            response.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rfp-form" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Submit your project
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Submit Your Website Design RFP / RFQ
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Tell us about your project and we will respond within one business
            day with a clear, straightforward proposal. No 40-page documents. No
            hidden costs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Contact Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
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
                  placeholder="jane@organization.gov"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Organization Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  id="organization"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="City of Springfield"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="orgType"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Organization Type
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  id="orgType"
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none"
                >
                  <option value="">Select one...</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Non-Profit Organization">Non-Profit Organization</option>
                  <option value="Church / Ministry">Church / Ministry</option>
                  <option value="School District / Education">School District / Education</option>
                  <option value="Small Business">Small Business</option>
                  <option value="Mid-Size Business">Mid-Size Business</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Current Website (if any)
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://currentsite.org"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="details"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Project Requirements / RFP Details
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <textarea
                id="details"
                required
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe your project requirements, timeline, number of pages, special features needed, compliance requirements, etc."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={sending}
            className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {sending ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Submit Project Requirements
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            We respond within one business day. No spam, no aggressive sales
            calls.
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">
            Prefer to discuss your project by phone?
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

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
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
            Trusted by organizations nationwide
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Government agencies, non-profits, and businesses choose CalTech Web
            for reliable, affordable website design.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Our procurement team was thrilled with how simple CalTech Web made the process. No giant proposal, no confusing line items. Just $99/month and a website delivered in a week.",
              name: "Angela Morris",
              role: "Admin Director, County Parks Dept.",
              initials: "AM",
              bg: "bg-blue-600",
            },
            {
              quote:
                "As a non-profit, we could not justify spending $15,000 on a website. CalTech Web gave us a professional site for $99/month that our board immediately approved.",
              name: "James Caldwell",
              role: "Executive Director, Valley Food Bank",
              initials: "JC",
              bg: "bg-green-600",
            },
            {
              quote:
                "We went through three agencies in five years - always over budget, always behind schedule. Brandon delivered in 6 days and has been our vendor for 3 years running.",
              name: "Sandra Hernandez",
              role: "Operations Manager, Regional Chamber",
              initials: "SH",
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

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Procurement FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            RFP &amp; Procurement Questions, Answered
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Common questions from procurement officers, project managers, and
            decision-makers evaluating CalTech Web as a vendor.
          </p>
        </div>

        <div className="space-y-3">
          {rfpFaqs.map(({ q, a }) => (
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
            Have a procurement question that&apos;s not listed here?
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
          Simplify your website design procurement.
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          No five-figure proposals. No multi-year lock-ins. No scope creep.
          Just a professional website for $99/month, delivered in days - backed
          by 800+ successful projects and a money-back guarantee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rfp-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Submit Your Project
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
            href="#rfp-form"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Submit Project
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebsiteDesignRFPPage() {
  return (
    <>
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <WhoWeServe />
        <WhyCalTechWeb />
        <WhatIsIncluded />
        <RFPForm />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
