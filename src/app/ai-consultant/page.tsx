"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Zap,
  Shield,
  Brain,
  Target,
  Layers,
  Bot,
  TrendingUp,
  Star,
  ChevronRight,
  AlertTriangle,
  Award,
  Globe,
  ChevronDown,
} from "lucide-react";

// ─── Schema / SEO ─────────────────────────────────────────────────────────────
// Note: metadata export is not allowed in "use client" — handled via layout or
// a wrapper server component. We include JSON-LD inline.

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brandon Hopkins — AI Consultant for Small Business",
  url: "https://caltechweb.com/ai-consultant/",
  telephone: "+15592823075",
  email: "Brandon@CalTechWeb.com",
  image: "https://caltechweb.com/brandon-hopkins.jpg",
  priceRange: "$$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madera",
    addressRegion: "CA",
    postalCode: "93638",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Brandon Hopkins",
    jobTitle: "AI Consultant & CEO",
    url: "https://caltechweb.com/brandon-hopkins/",
  },
  description:
    "Brandon Hopkins is an AI consultant for small business helping US companies implement AI tools, automate workflows, and build a competitive advantage. 20 years of digital strategy experience, 800+ businesses served.",
  knowsAbout: [
    "AI Implementation",
    "AI Strategy",
    "Business Automation",
    "AI Consulting",
    "Workflow Automation",
    "LLM Integration",
    "AI Governance",
    "SEO Automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Local On-Site AI Consulting (Fresno/Central Valley)",
        price: "8000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "8000",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Remote AI Consulting (US-Wide)",
        price: "5500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5500",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    ],
  },
};

// ─── Multi-Step Form ───────────────────────────────────────────────────────────

const INDUSTRIES = [
  "Healthcare",
  "Legal",
  "Finance",
  "Real Estate",
  "Construction",
  "Retail",
  "Manufacturing",
  "Professional Services",
  "Church / Non-Profit",
  "Other",
];

const CHALLENGES = [
  "We're wasting time on repetitive tasks",
  "We're losing ground to AI-savvy competitors",
  "We don't know where to start with AI",
  "We've tried AI tools but got no results",
  "Our team doesn't trust or use AI",
  "We need someone to build custom AI tools for us",
];

interface FormData {
  // Step 1
  companyName: string;
  industry: string;
  employeeCount: string;
  annualRevenue: string;
  // Step 2
  currentAiUsage: string;
  biggestChallenges: string[];
  // Step 3
  successVision: string;
  timeline: string;
  preferredFormat: string;
  // Step 4
  name: string;
  email: string;
  phone: string;
  howDidYouFindUs: string;
}

const defaultFormData: FormData = {
  companyName: "",
  industry: "",
  employeeCount: "",
  annualRevenue: "",
  currentAiUsage: "",
  biggestChallenges: [],
  successVision: "",
  timeline: "",
  preferredFormat: "",
  name: "",
  email: "",
  phone: "",
  howDidYouFindUs: "",
};

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 4;
  const progress = ((step - 1) / totalSteps) * 100;

  function updateField(field: keyof FormData, value: string | string[]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleChallenge(challenge: string) {
    setFormData((prev) => {
      const existing = prev.biggestChallenges;
      const updated = existing.includes(challenge)
        ? existing.filter((c) => c !== challenge)
        : [...existing, challenge];
      return { ...prev, biggestChallenges: updated };
    });
  }

  function canAdvance(): boolean {
    if (step === 1) {
      return (
        formData.companyName.trim().length > 0 &&
        formData.industry !== "" &&
        formData.employeeCount !== "" &&
        formData.annualRevenue !== ""
      );
    }
    if (step === 2) {
      return formData.currentAiUsage !== "" && formData.biggestChallenges.length > 0;
    }
    if (step === 3) {
      return (
        formData.successVision.trim().length > 0 &&
        formData.timeline !== "" &&
        formData.preferredFormat !== ""
      );
    }
    return true;
  }

  async function handleSubmit() {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/ai-consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Application Received</h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
          We&apos;ll review your application and reach out within 24 hours. We only take on
          1&ndash;2 clients at a time, so if we&apos;re a fit, we&apos;ll move fast.
        </p>
        <p className="text-sm text-gray-500">
          Prefer to talk now?{" "}
          <a href="tel:5592823075" className="text-blue-600 font-semibold hover:underline">
            Call (559) 282-3075
          </a>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {["Your Business", "AI Situation", "Your Goals", "Contact Info"].map((label, i) => (
            <span
              key={label}
              className={`text-xs font-medium ${i + 1 <= step ? "text-blue-600" : "text-gray-400"}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Step 1: About Your Business */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">About Your Business</h3>
            <p className="text-gray-500 text-sm">Tell us a bit about your company so we can understand your context.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.industry}
              onChange={(e) => updateField("industry", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 bg-white"
            >
              <option value="">Select your industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Number of Employees <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.employeeCount}
                onChange={(e) => updateField("employeeCount", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 bg-white"
              >
                <option value="">Select range</option>
                <option value="1–10">1&ndash;10</option>
                <option value="11–50">11&ndash;50</option>
                <option value="51–200">51&ndash;200</option>
                <option value="200+">200+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Annual Revenue <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.annualRevenue}
                onChange={(e) => updateField("annualRevenue", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 bg-white"
              >
                <option value="">Select range</option>
                <option value="Under $500K">Under $500K</option>
                <option value="$500K–$2M">$500K&ndash;$2M</option>
                <option value="$2M–$10M">$2M&ndash;$10M</option>
                <option value="$10M+">$10M+</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: AI Situation */}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Your Current AI Situation</h3>
            <p className="text-gray-500 text-sm">Honest answers help us prepare the right strategy for you.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              How would you describe your current AI usage? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2.5">
              {[
                "We use no AI tools",
                "We've tried a few AI tools but haven't seen real ROI",
                "We use AI in some areas but want to scale it",
                "We have AI but need help with strategy",
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.currentAiUsage === option
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="currentAiUsage"
                    value={option}
                    checked={formData.currentAiUsage === option}
                    onChange={() => updateField("currentAiUsage", option)}
                    className="mt-0.5 accent-blue-600"
                  />
                  <span className="text-sm text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              What&apos;s your biggest challenge right now? <span className="text-sm font-normal text-gray-500">(Select all that apply)</span> <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2.5">
              {CHALLENGES.map((challenge) => (
                <label
                  key={challenge}
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.biggestChallenges.includes(challenge)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.biggestChallenges.includes(challenge)}
                    onChange={() => toggleChallenge(challenge)}
                    className="mt-0.5 accent-blue-600"
                  />
                  <span className="text-sm text-gray-800">{challenge}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Goals */}
      {step === 3 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Your Goals</h3>
            <p className="text-gray-500 text-sm">Help us understand where you want to be in 12 months.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              What would a successful AI implementation look like for you? <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.successVision}
              onChange={(e) => updateField("successVision", e.target.value)}
              placeholder="e.g., Our team saves 20 hours/week on reporting, we have an AI chatbot handling first-line customer service, and our proposals are drafted automatically..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              What&apos;s your timeline to get started? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2.5">
              {[
                "ASAP — this quarter",
                "Next 3–6 months",
                "Just exploring",
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.timeline === option
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={option}
                    checked={formData.timeline === option}
                    onChange={() => updateField("timeline", option)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Do you prefer on-site or remote consulting? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2.5">
              {[
                "On-site preferred",
                "Remote is fine",
                "Either works",
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.preferredFormat === option
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredFormat"
                    value={option}
                    checked={formData.preferredFormat === option}
                    onChange={() => updateField("preferredFormat", option)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Contact Info */}
      {step === 4 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Contact Information</h3>
            <p className="text-gray-500 text-sm">One last step. We&apos;ll review your application and reach out within 24 hours.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="jane@yourcompany.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="(559) 555-0123"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              How did you find us?
            </label>
            <select
              value={formData.howDidYouFindUs}
              onChange={(e) => updateField("howDidYouFindUs", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 bg-white"
            >
              <option value="">Select an option</option>
              <option value="Google Search">Google Search</option>
              <option value="Referral">Referral</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {error && (
            <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors text-sm"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            Continue
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm shadow-lg"
          >
            {submitting ? "Sending..." : "Request My AI Strategy Session"}
            {!submitting && <ArrowRight className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Page Sections ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold mb-7">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Limited Availability — 1&ndash;2 Clients at a Time
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
          The AI Consultant for Small Business
          <span className="block text-blue-400 mt-1">That Actually Ships Results</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-4">
          Most businesses are experimenting with AI and getting nowhere. Brandon Hopkins helps
          small and mid-size US companies implement AI that saves real time, cuts real costs,
          and builds a real competitive advantage.
        </p>

        <p className="text-base text-blue-200/60 mb-10 max-w-xl">
          We only take on <strong className="text-white">1&ndash;2 companies at a time</strong> on
          6&ndash;12 month contracts so we can be fully devoted to your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Schedule a Strategy Call
          </a>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Apply for Consulting
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12 text-sm text-blue-200/60">
          {[
            "20 Years Digital Strategy",
            "800+ Businesses Served",
            "Featured in 100+ Publications",
            "Two Successful Exits",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Your Competitors Are Implementing AI. Are You?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Right now, businesses in your industry are using AI to cut their operational costs by
            30&ndash;50%, generate leads on autopilot, and outpace everyone who&apos;s still doing things
            manually. The window to lead is closing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: AlertTriangle,
              color: "text-red-500",
              bg: "bg-red-50",
              border: "border-red-100",
              title: "The Cost of Waiting",
              items: [
                "Paying employees to do tasks AI could automate today",
                "Losing proposals to competitors with AI-generated, polished bids",
                "Your team spending hours on reports that should take minutes",
                "Falling behind while others build AI moats you can't catch up to",
              ],
            },
            {
              icon: TrendingUp,
              color: "text-green-600",
              bg: "bg-green-50",
              border: "border-green-100",
              title: "What AI-Ready Businesses Experience",
              items: [
                "Operations that run 24/7 without extra headcount",
                "Customer service that responds instantly, at any scale",
                "Data-driven decisions from dashboards that update themselves",
                "A team that focuses on high-value work instead of busywork",
              ],
            },
          ].map(({ icon: Icon, color, bg, border, title, items }) => (
            <div key={title} className={`rounded-2xl p-7 border ${border} ${bg}`}>
              <div className="flex items-center gap-3 mb-5">
                <Icon className={`w-6 h-6 ${color}`} />
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className={`mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")} mt-1.5`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-base mb-4">
            The question isn&apos;t <em>whether</em> to implement AI. It&apos;s whether you do it right
            the first time, or waste 18 months and thousands of dollars figuring it out alone.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            Let&apos;s Build Your AI Strategy
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutBrandon() {
  const credentials = [
    { icon: Clock, label: "20 Years", sub: "Digital Strategy & SEO" },
    { icon: Users, label: "800+ Businesses", sub: "Served Across Industries" },
    { icon: Award, label: "Two Exits", sub: "Marketing & SEO Agencies" },
    { icon: Globe, label: "100+ Publications", sub: "Featured & Cited" },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo + Stats */}
          <div>
            <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/brandon-hopkins.jpg"
                alt="Brandon Hopkins, AI Consultant for Small Business"
                width={600}
                height={500}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">Brandon Hopkins</p>
                <p className="text-blue-200 text-sm">AI Consultant & CEO, CalTech Web</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {credentials.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 mb-3">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-xl font-extrabold text-gray-900 leading-none mb-1">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              About Your Consultant
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Not an Academic.<br />A Practitioner Who Ships.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Brandon Hopkins has spent 20 years in digital strategy, SEO, and online marketing.
                He founded <strong className="text-gray-900">DiamondLinks</strong>, a successful
                SEO and marketing agency, and <strong className="text-gray-900">CalTech Web</strong>,
                a web design platform that has served 800+ businesses. He has completed two
                successful exits from marketing and SEO agencies.
              </p>
              <p>
                Brandon doesn&apos;t lecture from whitepapers. He has personally built AI-powered
                workflows, automated client reporting systems, and custom LLM integrations for real
                businesses with real deadlines. He has been featured in 100+ marketing publications
                and moderates multiple online marketing communities.
              </p>
              <p>
                As a Senior Pastor, Brandon brings an unusual combination of analytical rigor,
                communication clarity, and personal accountability to every engagement. When he
                commits to your company&apos;s AI transformation, he means it.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Built AI-powered web design workflows used in production",
                "Implemented AI into SEO and content workflows at DiamondLinks",
                "Built custom Claude/Anthropic API integrations for business ops",
                "Created AI automation tools saving clients hours per week",
                "Advises business owners on AI strategy and safe implementation",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="tel:5592823075"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                Talk to Brandon Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const tools = [
    {
      icon: Bot,
      title: "AI Chatbots & Customer Service",
      desc: "Deploy intelligent assistants that handle inquiries, qualify leads, and route tickets — 24/7, no extra headcount.",
    },
    {
      icon: Brain,
      title: "Custom LLM Integrations",
      desc: "We build custom Claude/GPT-powered tools that plug directly into your existing workflows and software stack.",
    },
    {
      icon: BarChart3,
      title: "Automated Reporting Systems",
      desc: "Replace hours of manual data work with dashboards and reports that generate themselves from your live data.",
    },
    {
      icon: Target,
      title: "AI SEO & Content Workflows",
      desc: "Production-proven AI pipelines for keyword research, content strategy, and publishing — not theoretical, actually deployed.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      desc: "From n8n to Zapier to custom scripts, we identify and automate the repetitive tasks eating your team's time.",
    },
    {
      icon: Layers,
      title: "AI Governance & Policy",
      desc: "Build usage policies, data-handling rules, and ethical guidelines so your team adopts AI safely and confidently.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            AI Tools & Capabilities We&apos;ve Shipped
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every capability listed below has been built and deployed for real clients. No demos. No proposals for things we haven&apos;t built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 mb-4">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Is This Right for You?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            We&apos;re Selective About Who We Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With only 1&ndash;2 client slots available, we need to ensure every engagement is a great fit. Here&apos;s how to know if this is right for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* This IS for you */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">This Is For You If&hellip;</h3>
            </div>
            <ul className="space-y-4">
              {[
                "You run a US-based business doing $500K+ in annual revenue",
                "You know AI could help but don\u2019t have the expertise to implement it",
                "You want a hands-on partner, not a slide deck or a course",
                "You\u2019re ready to commit 6\u201312 months to real transformation",
                "You want measurable ROI — hours saved, costs cut, revenue gained",
                "You\u2019re a decision-maker who can greenlight implementation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">This Is NOT For You If&hellip;</h3>
            </div>
            <ul className="space-y-4">
              {[
                "You\u2019re looking for a one-time ChatGPT tutorial or workshop",
                "You want cheap, outsourced AI development with no strategy",
                "You\u2019re not willing to invest at least 6 months in the process",
                "You need a full-time CTO or developer (we\u2019re consultants, not staff)",
                "You\u2019re outside the United States",
                "You want to \u201Cwait and see\u201D before taking action",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-base mb-5">
            Sound like your situation? Let&apos;s talk about what AI can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-md text-sm"
            >
              Apply for Consulting
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:5592823075"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call to Discuss Fit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "AI Readiness Assessment",
      desc: "We audit your current tools, workflows, and data to identify the highest-ROI AI opportunities specific to your business. You get a prioritized list of where AI can make the biggest impact.",
      duration: "Week 1–2",
    },
    {
      number: "02",
      title: "AI Strategy & Roadmap",
      desc: "Together we build a 6–12 month prioritized implementation plan with clear milestones, expected outcomes, and resource requirements. No guesswork.",
      duration: "Week 2–3",
    },
    {
      number: "03",
      title: "AI Governance Policy",
      desc: "We create usage policies, data handling rules, and ethical guidelines for your team — so AI adoption happens safely, confidently, and in line with your values.",
      duration: "Week 3–4",
    },
    {
      number: "04",
      title: "Pilot Implementation",
      desc: "We deploy 1–2 high-impact AI use cases with measurable outcomes so you see real results fast. Proof before we scale.",
      duration: "Month 2–3",
    },
    {
      number: "05",
      title: "Team Training & Adoption",
      desc: "The tools are only as good as the people using them. We train your team to trust, use, and improve your AI tools. The human side of AI is where most consultants fail — we don't.",
      duration: "Month 3–4",
    },
    {
      number: "06",
      title: "Ongoing Optimization",
      desc: "Monthly check-ins, performance reviews, and iteration. AI isn't a set-it-and-forget-it project. We stay engaged to keep improving your results through the full contract.",
      duration: "Ongoing",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our 6-Step AI Implementation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built from real implementations across dozens of businesses. No filler steps. Every phase delivers something concrete.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-100" aria-hidden="true" />
          <div className="space-y-8">
            {steps.map(({ number, title, desc, duration }) => (
              <div key={number} className="relative flex gap-7">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 font-bold text-sm">
                  {number}
                </div>
                <div className="pt-2 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-xl text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-base mb-5">
            Ready to see what AI can do for your business? Every engagement starts with a structured assessment — no guesswork, no wasted time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-md text-sm"
            >
              Apply for Consulting
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:5592823075"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call (559) 282-3075
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareAlternatives() {
  const alternatives = [
    {
      option: "Hire In-House AI Staff",
      cost: "$150K–$250K/yr",
      costSub: "salary + benefits + recruiting",
      pros: ["Full-time dedicated resource", "On-site availability"],
      cons: [
        "6+ months to hire the right person",
        "No guarantee they can execute strategy AND implementation",
        "You still need someone to manage them",
        "Expensive to course-correct if it\u2019s not the right fit",
      ],
    },
    {
      option: "Big Consulting Firm",
      cost: "$50K–$200K+",
      costSub: "per engagement",
      pros: ["Brand recognition", "Large team"],
      cons: [
        "You get junior analysts, not senior strategists",
        "Deliverable is usually a PDF, not working software",
        "Engagements are project-based with no ongoing support",
        "No skin in the game once the invoice is paid",
      ],
    },
    {
      option: "DIY / Figure It Out",
      cost: "$0 upfront",
      costSub: "but 12–18 months of lost time",
      pros: ["No cash outlay", "Learn at your own pace"],
      cons: [
        "Your competitors are moving NOW, not in 18 months",
        "Trial-and-error wastes thousands in employee hours",
        "High risk of adopting the wrong tools or approach",
        "No governance or policy \u2014 legal and data risks",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Compare Your Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Businesses Choose Brandon Over the Alternatives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You have options for bringing AI into your business. Here&apos;s how they stack up against a dedicated AI consultant who actually ships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {alternatives.map(({ option, cost, costSub, pros, cons }) => (
            <div key={option} className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-base mb-1">{option}</h3>
              <div className="text-lg font-extrabold text-gray-900 mb-0.5">{cost}</div>
              <p className="text-xs text-gray-500 mb-5">{costSub}</p>
              {pros.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Upside</p>
                  <ul className="space-y-2">
                    {pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Downside</p>
                <ul className="space-y-2">
                  {cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Brandon's offer */}
        <div className="bg-blue-950 text-white rounded-2xl p-7 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold mb-4">
                <Star className="w-3 h-3 fill-orange-300" />
                The Better Path
              </div>
              <h3 className="text-xl font-extrabold mb-3">Work With Brandon — $5,500&ndash;$8,000/mo</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                A senior strategist who also builds. You get 20 years of digital strategy experience, hands-on implementation, team training, and ongoing optimization — all from someone who has built and exited two agencies and served 800+ businesses. No juniors. No PDFs. No guesswork.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Strategy AND hands-on implementation",
                  "Custom AI tools built for your stack",
                  "Team training so adoption actually sticks",
                  "Ongoing optimization for the full contract",
                  "$1,500 assessment applied to first month",
                  "Results in 60\u201390 days, not 12\u201318 months",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-blue-100">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-3 sm:mt-6">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg text-sm whitespace-nowrap"
              >
                Apply for Consulting
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5592823075"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Call Brandon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Engagement Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Transparent, Commitment-Based Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI transformation is a 6&ndash;12 month journey. We price accordingly — no hourly billing, no surprise invoices. US clients only.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Local */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white p-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Fresno / Central Valley
              </div>
              <h3 className="text-2xl font-extrabold mb-1">Local / On-Site</h3>
              <p className="text-blue-200 text-sm mb-5">Bi-weekly or monthly on-site visits included</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold">$8,000</span>
                <span className="text-blue-300 mb-1.5">/month</span>
              </div>
              <p className="text-blue-300 text-xs mt-1">6&ndash;12 month contract · Starting rate</p>
            </div>
            <div className="p-7">
              <ul className="space-y-3 mb-7">
                {[
                  "On-site visits (bi-weekly or monthly)",
                  "Workshop facilitation at your office",
                  "Hands-on implementation alongside your team",
                  "Weekly async collaboration",
                  "Full strategy, governance & training",
                  "Travel included within 60-mile radius of Madera, CA",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 bg-gray-50 rounded-xl p-4 leading-relaxed mb-5">
                <strong>Travel beyond 60 miles:</strong> Within CA: $0.67/mile billed at cost. Beyond CA: airfare + hotel + per diem at cost, always quoted in advance (e.g., SF visit &#8776; $400, NYC &#8776; $700).
              </div>
              <a
                href="#apply"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors text-sm"
              >
                Apply for On-Site Consulting
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Remote */}
          <div className="bg-white rounded-3xl border-2 border-blue-600 shadow-lg overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                <Star className="w-3 h-3 fill-white" />
                Most Popular
              </span>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white p-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-xs font-semibold mb-4">
                <Globe className="w-3 h-3" />
                US-Wide
              </div>
              <h3 className="text-2xl font-extrabold mb-1">Remote / Off-Site</h3>
              <p className="text-blue-200 text-sm mb-5">Full consulting engagement, 100% remote</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold">$5,500</span>
                <span className="text-blue-300 mb-1.5">/month</span>
              </div>
              <p className="text-blue-300 text-xs mt-1">6&ndash;12 month contract · Starting rate</p>
            </div>
            <div className="p-7">
              <ul className="space-y-3 mb-7">
                {[
                  "Weekly video strategy calls",
                  "Async collaboration (Slack, email, Loom)",
                  "Full remote implementation support",
                  "AI tools built and deployed to your stack",
                  "Full strategy, governance & training",
                  "No travel costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 bg-gray-50 rounded-xl p-4 leading-relaxed mb-5">
                <strong>Note:</strong> Remote-only engagement. US clients only. No international clients at this time.
              </div>
              <a
                href="#apply"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors text-sm shadow-lg"
              >
                Apply for Remote Consulting
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Assessment note */}
        <div className="bg-blue-950 text-white rounded-2xl p-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-300" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white mb-1">Limited Availability Notice</h4>
            <p className="text-blue-200 text-sm leading-relaxed">
              Due to our limited capacity, we currently have availability for <strong className="text-white">1&ndash;2 new clients</strong>.
              All engagements begin with a paid <strong className="text-white">AI Readiness Assessment ($1,500)</strong>, which is
              applied toward your first month if you move forward.
            </p>
          </div>
          <a
            href="#apply"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors text-sm whitespace-nowrap"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { value: "800+", label: "Businesses Served", sub: "Across CalTech Web & DiamondLinks" },
    { value: "20 yrs", label: "Digital Strategy Experience", sub: "SEO, marketing, web, automation" },
    { value: "2", label: "Successful Agency Exits", sub: "Proven operator, not just advisor" },
    { value: "100+", label: "Publications", sub: "Cited as an industry authority" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            A Track Record That Speaks for Itself
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Brandon has spent two decades building, growing, and exiting digital businesses. That experience is what he brings to your AI transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2 leading-none">{value}</div>
              <div className="font-bold text-gray-900 text-sm mb-1">{label}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What happens during the $1,500 AI Readiness Assessment?",
      a: "We audit your current tools, workflows, team structure, and data to identify the highest-ROI AI opportunities specific to your business. You receive a prioritized report with concrete recommendations. If you move forward with an engagement, the $1,500 is applied toward your first month.",
    },
    {
      q: "Why do you only take 1\u20132 clients at a time?",
      a: "AI implementation done right requires deep involvement \u2014 not surface-level advice. By limiting our client load, Brandon works directly with your team, builds custom tools, and stays embedded in your operations. This is hands-on consulting, not a course or a slide deck.",
    },
    {
      q: "What if AI doesn\u2019t work for my industry?",
      a: "AI is not industry-specific \u2014 it\u2019s workflow-specific. Every business has repetitive tasks, data processing, customer communication, and reporting. We\u2019ve served 800+ businesses across healthcare, legal, construction, retail, finance, nonprofits, and more. The Readiness Assessment identifies exactly where AI fits your operations.",
    },
    {
      q: "Do I need technical staff to work with you?",
      a: "No. We handle the technical implementation and train your existing team to use the tools we build. Most of our clients are non-technical business owners who want AI results without hiring developers.",
    },
    {
      q: "What\u2019s the difference between on-site and remote?",
      a: "Both engagements include the full 6-step process: assessment, strategy, governance, implementation, training, and optimization. On-site ($8,000/mo) adds bi-weekly or monthly in-person visits at your office. Remote ($5,500/mo) is fully virtual with weekly video calls and async collaboration. Both deliver the same depth of work.",
    },
    {
      q: "How long before I see results?",
      a: "Most clients see their first working AI implementation within 60\u201390 days. The pilot phase (Month 2\u20133) deploys 1\u20132 high-impact use cases with measurable outcomes so you get proof before we scale. Full transformation unfolds over the 6\u201312 month engagement.",
    },
    {
      q: "Can I cancel if it\u2019s not working?",
      a: "Our contracts include clear milestones and deliverables at each phase. If we\u2019re not delivering measurable value, we\u2019ll work with you to adjust. We stake our reputation on results \u2014 that\u2019s why we only take on clients where we\u2019re confident we can make an impact.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Honest answers to the questions we hear most from business owners considering AI consulting.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full text-left px-6 py-5 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Still have questions? Talk to Brandon directly.
          </p>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-md text-sm"
          >
            <Phone className="w-4 h-4" />
            Call (559) 282-3075
          </a>
        </div>
      </div>
    </section>
  );
}

function ApplyForm() {
  return (
    <section id="apply" className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left CTA panel */}
          <div className="lg:col-span-2 text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-5">
              Limited Availability
            </span>
            <h2 className="text-3xl font-extrabold leading-tight mb-5">
              Apply for Your AI Strategy Session
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-7">
              We review every application personally. If we&apos;re a fit, you&apos;ll hear from Brandon directly within 24 hours.
            </p>
            <div className="space-y-4 text-sm">
              {[
                { icon: Clock, text: "Response within 24 hours" },
                { icon: Shield, text: "Starts with a paid $1,500 AI Readiness Assessment" },
                { icon: Users, text: "Only 1–2 new clients accepted at a time" },
                { icon: Phone, text: "Prefer to call? (559) 282-3075" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-blue-200">
                  <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-7 shadow-2xl">
            <MultiStepForm />
          </div>
        </div>
      </div>
    </section>
  );
}

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
            Call Brandon
          </a>
          <a
            href="#apply"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AIConsultantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <PainSection />
        <AboutBrandon />
        <Capabilities />
        <WhoThisIsFor />
        <Process />
        <Results />
        <CompareAlternatives />
        <Pricing />
        <FAQ />
        <ApplyForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
