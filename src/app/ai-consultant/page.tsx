"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  Quote,
  Calculator,
  DollarSign,
  X,
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

// ─── Scroll Reveal Animation ──────────────────────────────────────────────────

function ScrollReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Animated Stat Counter ──────────────────────────────────────────────────

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  const prefix = match?.[1] || "";
  const end = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] || "";

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hydrated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hydrated]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [started, end]);

  if (!match) return <>{value}</>;
  if (!hydrated) return <>{value}</>;

  return (
    <span ref={ref}>
      {prefix}{started ? count : 0}{suffix}
    </span>
  );
}

// ─── Return Visitor Banner ────────────────────────────────────────────────────

function ReturnVisitorBanner({ onApply }: { onApply: () => void }) {
  const [data, setData] = useState<{ daysSince: number; visitCount: number } | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const deadline = useApplicationDeadline();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cw_visit");
      const now = Date.now();
      if (stored) {
        const parsed = JSON.parse(stored);
        const daysSince = Math.max(1, Math.round((now - parsed.first) / (1000 * 60 * 60 * 24)));
        const visitCount = (parsed.count || 1) + 1;
        localStorage.setItem("cw_visit", JSON.stringify({ first: parsed.first, count: visitCount, last: now }));
        // Only show for return visitors (dismissed banner stays dismissed for this session)
        if (!sessionStorage.getItem("cw_rv_dismissed")) {
          setData({ daysSince, visitCount });
        }
      } else {
        localStorage.setItem("cw_visit", JSON.stringify({ first: now, count: 1, last: now }));
      }
    } catch {
      // localStorage unavailable — silently skip
    }
  }, []);

  if (!data || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try { sessionStorage.setItem("cw_rv_dismissed", "1"); } catch {}
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 relative">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="shrink-0 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-xs sm:text-sm font-medium truncate">
            <span className="hidden sm:inline">Welcome back — </span>
            <span className="sm:hidden">Back again — </span>
            {data.visitCount > 2
              ? `you've visited ${data.visitCount} times. `
              : `you were here ${data.daysSince === 1 ? "yesterday" : `${data.daysSince} days ago`}. `}
            {deadline && (
              <strong className="text-yellow-300">Only {deadline.daysLeft} days left to apply.</strong>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onApply}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition-colors shadow-sm"
          >
            Continue Your Application
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={handleDismiss}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Application Deadline Badge ──────────────────────────────────────────────

function useApplicationDeadline() {
  const [deadline, setDeadline] = useState<{ dateStr: string; daysLeft: number } | null>(null);

  useEffect(() => {
    const now = new Date();
    const target = new Date(now);
    target.setDate(target.getDate() + 10);
    // Find the next Friday at least 10 days out
    while (target.getDay() !== 5) target.setDate(target.getDate() + 1);
    const daysLeft = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    const dateStr = target.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    setDeadline({ dateStr, daysLeft });
  }, []);

  return deadline;
}

function DeadlineBadge() {
  const deadline = useApplicationDeadline();
  if (!deadline) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-400/20 max-w-lg mb-8">
      <Clock className="w-4 h-4 text-red-400 shrink-0" />
      <p className="text-sm">
        <strong className="text-red-300">Next intake closes {deadline.dateStr}</strong>
        <span className="text-blue-200/50 ml-2">· {deadline.daysLeft} days left to apply</span>
      </p>
    </div>
  );
}

function DrawerDeadlineNote() {
  const deadline = useApplicationDeadline();
  if (!deadline) return null;

  return (
    <p className="text-[10px] text-red-600 font-semibold mt-0.5 flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      Intake closes {deadline.dateStr} · {deadline.daysLeft} days left
    </p>
  );
}

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

const FORM_STORAGE_KEY = "ctw_ai_form";

function loadSavedForm(): { step: number; data: FormData } | null {
  try {
    const raw = sessionStorage.getItem(FORM_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.data && typeof parsed.step === "number") return parsed;
  } catch {}
  return null;
}

function MultiStepForm() {
  const saved = useRef(loadSavedForm());
  const [step, setStep] = useState(saved.current?.step ?? 1);
  const [formData, setFormData] = useState<FormData>(saved.current?.data ?? defaultFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showResumeBanner, setShowResumeBanner] = useState(saved.current !== null && (saved.current.step > 1 || saved.current.data.companyName.trim().length > 0));

  const totalSteps = 4;
  const progress = ((step - 1) / totalSteps) * 100;

  // Persist form state to sessionStorage on every change
  useEffect(() => {
    if (submitted) {
      try { sessionStorage.removeItem(FORM_STORAGE_KEY); } catch {}
      return;
    }
    try {
      sessionStorage.setItem(FORM_STORAGE_KEY, JSON.stringify({ step, data: formData }));
    } catch {}
  }, [step, formData, submitted]);

  function updateField(field: keyof FormData, value: string | string[]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setShowResumeBanner(false);
  }

  function toggleChallenge(challenge: string) {
    setFormData((prev) => {
      const existing = prev.biggestChallenges;
      const updated = existing.includes(challenge)
        ? existing.filter((c) => c !== challenge)
        : [...existing, challenge];
      return { ...prev, biggestChallenges: updated };
    });
    setShowResumeBanner(false);
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
    // Compute expected response time (24 hours from now)
    const responseBy = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const responseByStr = responseBy.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    const responseByTime = responseBy.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    const firstName = formData.name.trim().split(/\s+/)[0] || "there";
    const shareUrl = "https://caltechweb.com/ai-consultant/";
    const shareText = `I just applied for an AI strategy session with Brandon Hopkins. If you're a business owner looking to implement AI, check this out:`;

    return (
      <div className="py-8 px-4 sm:px-6">
        {/* Success header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-5">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
            You&apos;re In, {firstName}!
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
            Your application is on Brandon&apos;s desk. Expect a personal call or email by{" "}
            <strong className="text-gray-900">{responseByStr} at {responseByTime}</strong>.
          </p>
        </div>

        {/* What to prepare */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            While You Wait — Prepare for Your Fit Call
          </p>
          <div className="space-y-3">
            {[
              "List your 3 most time-consuming daily tasks — Brandon will ask about these",
              "Note which software tools your team uses (CRM, accounting, email, etc.)",
              "Think about one process that frustrates you the most",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <div className="shrink-0 w-5 h-5 rounded-md border-2 border-blue-300 mt-0.5" />
                <span className="text-sm text-gray-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-blue-600/70 mt-3">
            Coming prepared means Brandon can identify your highest-ROI opportunities faster.
          </p>
        </div>

        {/* What happens next timeline */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            What Happens Next
          </p>
          <div className="space-y-4">
            {[
              { time: "Within 24 hrs", action: "Brandon reviews your application personally", done: true },
              { time: "This week", action: "15-minute fit call to discuss your goals (free)", done: false },
              { time: "If it's a fit", action: "Start your $1,500 AI Readiness Assessment", done: false },
            ].map(({ time, action, done }) => (
              <div key={time} className="flex items-start gap-3">
                <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${done ? "bg-green-500" : "bg-gray-200"}`}>
                  {done && <CheckCircle className="w-3 h-3 text-white" />}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">{time}</span>
                  <p className="text-sm text-gray-700 font-medium leading-snug">{action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral prompt */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-1">
            Know another business owner who needs AI?
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Share this page — Brandon only takes 1&ndash;2 clients, so timing matters.
          </p>
          <div className="flex gap-2">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#084d96] transition-colors"
            >
              Share on LinkedIn
            </a>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(`${shareText} ${shareUrl}`);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300 transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Direct call CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">
            Can&apos;t wait? Talk to Brandon right now.
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
    );
  }

  // AI Opportunity Score — gamified form progress
  let opportunityScore = 0;
  if (formData.companyName.trim()) opportunityScore += 5;
  if (formData.industry) opportunityScore += 12;
  if (formData.employeeCount === "1–10") opportunityScore += 10;
  else if (formData.employeeCount === "11–50") opportunityScore += 14;
  else if (formData.employeeCount === "51–200") opportunityScore += 16;
  else if (formData.employeeCount === "200+") opportunityScore += 16;
  if (formData.annualRevenue === "Under $500K") opportunityScore += 8;
  else if (formData.annualRevenue === "$500K–$2M") opportunityScore += 12;
  else if (formData.annualRevenue === "$2M–$10M") opportunityScore += 15;
  else if (formData.annualRevenue === "$10M+") opportunityScore += 16;
  else if (formData.annualRevenue === "Prefer not to say") opportunityScore += 10;
  if (formData.currentAiUsage === "We use no AI tools") opportunityScore += 15;
  else if (formData.currentAiUsage === "We've tried a few AI tools but haven't seen real ROI") opportunityScore += 14;
  else if (formData.currentAiUsage === "We use AI in some areas but want to scale it") opportunityScore += 11;
  else if (formData.currentAiUsage === "We have AI but need help with strategy") opportunityScore += 10;
  opportunityScore += Math.min(formData.biggestChallenges.length * 3, 18);
  if (formData.timeline === "ASAP — this quarter") opportunityScore += 12;
  else if (formData.timeline === "Next 3–6 months") opportunityScore += 8;
  else if (formData.timeline === "Just exploring") opportunityScore += 5;
  opportunityScore = Math.min(opportunityScore, 100);

  const scoreLabel = step === 4 && opportunityScore > 0
    ? "Score locked — complete your details to claim your assessment"
    : opportunityScore >= 81 ? "Exceptional match — you\u2019re exactly who Brandon works with"
    : opportunityScore >= 61 ? "High AI opportunity — significant savings potential"
    : opportunityScore >= 41 ? "Strong opportunity detected for your business"
    : opportunityScore > 0 ? "Identifying your AI opportunities\u2026" : "";
  const scoreBarColor = opportunityScore >= 81 ? "bg-gradient-to-r from-emerald-500 to-blue-500" :
    opportunityScore >= 61 ? "bg-emerald-500" : "bg-blue-500";
  const scoreTextColor = opportunityScore >= 61 ? "text-emerald-600" : "text-blue-600";

  return (
    <div>
      {/* Time estimate badge */}
      <div className="flex items-center gap-2 mb-5 text-xs text-gray-500">
        <Clock className="w-3.5 h-3.5 text-blue-500" />
        <span>Takes less than 2 minutes · <strong className="text-gray-700">No obligation</strong></span>
      </div>

      {/* Resume banner — shown when returning visitor has saved progress */}
      {showResumeBanner && (
        <div className="flex items-center justify-between gap-3 mb-5 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200">
          <div className="flex items-center gap-2 text-sm text-blue-800">
            <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Welcome back! We saved your progress.</span>
          </div>
          <button
            onClick={() => {
              setStep(1);
              setFormData(defaultFormData);
              setShowResumeBanner(false);
              try { sessionStorage.removeItem(FORM_STORAGE_KEY); } catch {}
            }}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
          >
            Start over
          </button>
        </div>
      )}

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

      {/* AI Opportunity Score */}
      {opportunityScore > 0 && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50/80 to-emerald-50/80 border border-blue-100/60">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">AI Opportunity Score</span>
            </div>
            <span className={`text-sm font-extrabold tabular-nums ${scoreTextColor}`}>{opportunityScore}</span>
          </div>
          <div className="w-full bg-gray-200/70 rounded-full h-1.5 mb-1.5">
            <div className={`h-1.5 rounded-full transition-all duration-700 ease-out ${scoreBarColor}`} style={{ width: `${opportunityScore}%` }} />
          </div>
          <p className="text-[11px] text-gray-500 leading-snug">{scoreLabel}</p>
        </div>
      )}

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

      {/* Trust / security assurance */}
      <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-gray-400">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          Your info is secure
        </span>
        <span>·</span>
        <span>No credit card required</span>
        <span>·</span>
        <span>24-hour response</span>
      </div>
    </div>
  );
}

// ─── Page Sections ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white py-20 sm:py-28 relative overflow-hidden">
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

        <p className="text-base text-blue-200/60 mb-6 max-w-xl">
          We only take on <strong className="text-white">1&ndash;2 companies at a time</strong> on
          6&ndash;12 month contracts so we can be fully devoted to your success.
        </p>

        <DeadlineBadge />

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
            See If You Qualify
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

function RiskReversalStrip() {
  const items = [
    {
      icon: Shield,
      title: "Start for Just $1,500",
      desc: "Standalone AI Readiness Assessment — yours to keep no matter what.",
    },
    {
      icon: Zap,
      title: "Results in 60–90 Days",
      desc: "Working AI tools deployed, not a slide deck delivered in 6 months.",
    },
    {
      icon: DollarSign,
      title: "Assessment Credited to Month 1",
      desc: "If you move forward, your $1,500 is applied toward the first month.",
    },
    {
      icon: Target,
      title: "Milestone-Based Accountability",
      desc: "Clear deliverables at every phase. You always see value before you pay.",
    },
  ];

  return (
    <section className="bg-blue-950 border-t border-blue-900/50 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
          Zero-Risk Way to Get Started
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/8 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-400/25 mb-3">
                <Icon className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5">{title}</h3>
              <p className="text-xs text-blue-200/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-blue-300/50 mt-5">
          Your maximum risk is $1,500 — and you get a full AI opportunity report for it.
        </p>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section id="pain" className="py-16 sm:py-20 bg-gray-50">
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
          <p className="text-xs text-gray-400 mt-3">No commitment — takes less than 2 minutes</p>
        </div>
      </div>
    </section>
  );
}

function SavingsCalculator({ onResultsChange }: { onResultsChange?: (data: { annualWaste: number; aiSavings: number; monthlySavings: number; roiMultiple: number } | null) => void }) {
  const [employees, setEmployees] = useState(10);
  const [hoursWasted, setHoursWasted] = useState(15);
  const [avgHourlyRate, setAvgHourlyRate] = useState(35);
  const [showResults, setShowResults] = useState(false);

  const annualWaste = employees * hoursWasted * avgHourlyRate * 52;
  const aiSavings = Math.round(annualWaste * 0.6); // 60% of wasted time can be automated
  const monthlySavings = Math.round(aiSavings / 12);
  const consultingCost = 5500 * 12; // remote annual cost
  const netAnnualROI = aiSavings - consultingCost;
  const roiMultiple = aiSavings > 0 ? Math.round((aiSavings / consultingCost) * 10) / 10 : 0;

  // Notify parent when results are shown/updated
  useEffect(() => {
    if (showResults && onResultsChange) {
      onResultsChange({ annualWaste, aiSavings, monthlySavings, roiMultiple });
    }
  }, [showResults, annualWaste, aiSavings, monthlySavings, roiMultiple, onResultsChange]);

  function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            See Your Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How Much Is Manual Work Costing Your Business?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Adjust the sliders to match your business. Most owners are shocked by what they find.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-7 sm:p-10">
            {/* Sliders */}
            <div className="space-y-8 mb-10">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Employees doing repetitive tasks
                  </label>
                  <span className="text-lg font-extrabold text-blue-600 tabular-nums">{employees}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={employees}
                  onChange={(e) => { setEmployees(Number(e.target.value)); setShowResults(true); }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Hours/week each spends on automatable tasks
                  </label>
                  <span className="text-lg font-extrabold text-blue-600 tabular-nums">{hoursWasted} hrs</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={30}
                  value={hoursWasted}
                  onChange={(e) => { setHoursWasted(Number(e.target.value)); setShowResults(true); }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>2 hrs</span>
                  <span>30 hrs</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Average fully-loaded hourly cost per employee
                  </label>
                  <span className="text-lg font-extrabold text-blue-600 tabular-nums">${avgHourlyRate}</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={100}
                  step={5}
                  value={avgHourlyRate}
                  onChange={(e) => { setAvgHourlyRate(Number(e.target.value)); setShowResults(true); }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$15/hr</span>
                  <span>$100/hr</span>
                </div>
              </div>
            </div>

            {!showResults && (
              <div className="text-center">
                <button
                  onClick={() => setShowResults(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg text-base"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate My Savings
                </button>
              </div>
            )}

            {/* Results */}
            {showResults && (
              <div className="border-t border-gray-200 pt-8">
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-red-50 rounded-2xl border border-red-100 p-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-wide text-red-500 mb-2">You&apos;re Losing</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-red-600 leading-none mb-1">
                      {formatCurrency(annualWaste)}
                    </p>
                    <p className="text-xs text-red-500">per year on manual work</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl border border-green-100 p-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-wide text-green-600 mb-2">AI Could Save</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-green-600 leading-none mb-1">
                      {formatCurrency(aiSavings)}
                    </p>
                    <p className="text-xs text-green-600">per year ({formatCurrency(monthlySavings)}/mo)</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-2">Your ROI</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 leading-none mb-1">
                      {roiMultiple}x
                    </p>
                    <p className="text-xs text-blue-600">return on consulting investment</p>
                  </div>
                </div>

                {netAnnualROI > 0 && (
                  <div className="bg-blue-950 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row gap-5 items-center">
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <p className="text-sm font-bold text-green-300">Net Annual Benefit</p>
                      </div>
                      <p className="text-2xl sm:text-3xl font-extrabold mb-1">
                        {formatCurrency(netAnnualROI)}
                      </p>
                      <p className="text-blue-300 text-xs">
                        After subtracting {formatCurrency(consultingCost)}/year consulting investment (remote rate)
                      </p>
                    </div>
                    <div className="shrink-0 text-center">
                      <a
                        href="#apply"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg text-sm whitespace-nowrap"
                      >
                        Claim These Savings
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <p className="text-[11px] text-blue-300 mt-2">Brandon reviews every application personally</p>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-400 text-center mt-5">
                  Based on 60% automation potential — a conservative estimate. Actual savings vary by industry and workflow complexity. Your AI Readiness Assessment will identify your specific opportunities.
                </p>
              </div>
            )}
          </div>
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
    <section id="about" className="py-16 sm:py-20">
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

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Dr. Arjun Kanuri, MD, MBA",
      role: "Plastic & Reconstructive Surgeon",
      location: "Washington DC / MD / VA",
      photo: "/testimonials/arjun-kanuri.jpg",
      quote:
        "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
      stat: "40% traffic increase",
      years: "9-year client",
    },
    {
      name: "Chris Devulapalli, MD",
      role: "Specialized Plastic Surgery",
      location: "Medical Practice",
      photo: "/testimonials/chris-devulapalli.jpg",
      quote:
        "Brandon and his team were professional, responsive, and truly understood our vision. Every detail was executed beautifully. We are beyond happy with the results.",
      stat: "Doubled conversions",
      years: "",
    },
    {
      name: "Clint Borman",
      role: "Oxygen Wellness & Physical Therapy",
      location: "Healthcare",
      photo: "/testimonials/clint-borman.jpg",
      quote:
        "Caltech is very responsive with all of my requests. I'll often have multiple requests per day and they are acting on all of them within a very short period of time.",
      stat: "Same-day turnaround",
      years: "",
    },
    {
      name: "Christina Beckstead",
      role: "Executive Director",
      location: "Madera County Farm Bureau",
      photo: "/testimonials/christina-beckstead.jpg",
      quote:
        "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
      stat: "55% traffic increase",
      years: "3-year client",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">
            800+ Businesses Served
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Business Owners Say About Working With Brandon
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Brandon has spent 20 years earning the trust of business owners across
            industries. Here&apos;s what they have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-blue-100 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-5">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover w-14 h-14"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {t.stat && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 rounded-full px-3 py-1">
                    <TrendingUp className="w-3 h-3" />
                    {t.stat}
                  </span>
                )}
                {t.years && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                    <Clock className="w-3 h-3" />
                    {t.years}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-5">
            Ready to experience the same responsiveness and results for your AI transformation?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Work With Brandon
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (559) 282-3075
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-3">24-hour personal response to every application</p>
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
    <section id="capabilities" className="py-16 sm:py-20 bg-gray-950 text-white">
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
    <section id="fit" className="py-16 sm:py-20 bg-white">
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
              Yes, This Is for Me
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
          <p className="text-xs text-gray-400 mt-3">2-minute application · No obligation · No credit card</p>
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
    <section id="process" className="py-16 sm:py-20">
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
              Start at Step 1
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
          <p className="text-xs text-gray-400 mt-3">Every engagement begins with your AI Readiness Assessment</p>
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
    <section id="compare" className="py-16 sm:py-20 bg-gray-50">
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
                Choose the Better Path
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5592823075"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Call Brandon
              </a>
              <p className="text-[11px] text-blue-300 text-center">No long-term risk — start with a $1,500 assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ savings }: { savings?: { annualWaste: number; aiSavings: number; monthlySavings: number; roiMultiple: number } | null }) {
  function fmt(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }

  const remoteCostAnnual = 5500 * 12;
  const hasCalcData = savings && savings.aiSavings > 0;
  const netSavings = hasCalcData ? savings.aiSavings - remoteCostAnnual : 0;

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gray-50">
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

        {/* Personalized ROI anchor — shown when visitor has used the calculator */}
        {hasCalcData && netSavings > 0 ? (
          <div className="mb-8 rounded-2xl bg-green-50 border border-green-200 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-1">Based on Your Numbers</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Your calculator showed you&apos;re losing <strong className="text-red-600">{fmt(savings.annualWaste)}/year</strong> on
                  manual work. At <strong>{fmt(5500)}/mo</strong> (remote), you&apos;d still net{" "}
                  <strong className="text-green-700">{fmt(netSavings)}/year in savings</strong> — a{" "}
                  <strong className="text-green-700">{savings.roiMultiple}x return</strong> on your consulting investment.
                </p>
              </div>
              <a
                href="#apply"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-colors text-sm whitespace-nowrap"
              >
                Claim Your ROI
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-blue-500" />
              <strong className="text-gray-700">~$275/business day</strong> (remote)
            </span>
            <span className="text-gray-300">|</span>
            <span>Less than half the cost of a junior AI hire</span>
            <span className="text-gray-300">|</span>
            <span>Results in 60&ndash;90 days, not 12&ndash;18 months</span>
          </div>
        )}

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
              <p className="text-[11px] text-gray-400 text-center mt-2">$1,500 assessment credited to your first month</p>
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
              <p className="text-[11px] text-gray-400 text-center mt-2">$1,500 assessment credited to your first month</p>
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

  const caseStudies = [
    {
      label: "Case Study #1",
      industry: "National DTC Retail Brand",
      icon: TrendingUp,
      summary:
        "The founder of a nationally recognized direct-to-consumer retail company came to Brandon with a familiar problem: employee costs were climbing year over year, margins were shrinking, and manual processes were eating into every department. Despite doing eight figures in revenue, the business was running on spreadsheets, manual customer service queues, and gut-feel inventory decisions.",
      implementations: [
        "AI-powered customer service handling 70% of inbound inquiries without human intervention",
        "Automated inventory forecasting that cut overstock by 32% in the first quarter",
        "AI-generated product descriptions and email campaigns, reducing marketing labor by 25 hours/week",
        "Employee workflow automation that eliminated 3 redundant admin roles through natural attrition",
      ],
      results: [
        { metric: "38%", desc: "reduction in operational costs within 6 months" },
        { metric: "$420K", desc: "annual savings from eliminated manual processes" },
        { metric: "12 pts", desc: "margin recovery in the first year" },
      ],
      quote:
        "I was skeptical that AI could actually move the needle at our scale. Brandon didn\u2019t just show us tools \u2014 he rebuilt how we operate. The savings paid for the engagement three times over.",
      quoteAttr: "Founder & CEO",
    },
    {
      label: "Case Study #2",
      industry: "Regional E-Commerce Operations Firm",
      icon: Zap,
      summary:
        "A fast-growing e-commerce operations company was drowning in volume: 500+ emails per day that required manual routing, categorization, and responses. Their team spent days batch-processing 150,000-row spreadsheets every month. Worst of all, there was no system to track whether employees were actually completing assigned work \u2014 tasks fell through the cracks constantly.",
      implementations: [
        "AI email triage system that auto-categorizes, routes, and drafts responses for 500+ daily emails",
        "Batch processing automation that reduced 150K-row spreadsheet jobs from 3 days to under 2 hours",
        "Employee accountability dashboards with AI-flagged task completion and escalation alerts",
        "Custom reporting pipelines that eliminated 15+ hours/week of manual data compilation",
      ],
      results: [
        { metric: "92%", desc: "reduction in email handling time (6 hrs/day \u2192 28 min)" },
        { metric: "97%", desc: "faster batch processing (3 days \u2192 2 hours)" },
        { metric: "100%", desc: "task visibility \u2014 nothing falls through the cracks" },
      ],
      quote:
        "We were hiring people to do work that machines should have been doing. Brandon built systems that didn\u2019t just save us money \u2014 they gave us back control of our operations.",
      quoteAttr: "COO",
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            A Track Record That Speaks for Itself
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Brandon has spent two decades building, growing, and exiting digital businesses. That experience is what he brings to your AI transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2 leading-none"><AnimatedStat value={value} /></div>
              <div className="font-bold text-gray-900 text-sm mb-1">{label}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>

        {/* Client Case Studies */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Real Transformations. Real Businesses. Real Numbers.
          </h3>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            These are actual client engagements. Names withheld for confidentiality &mdash; results speak for themselves.
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {caseStudies.map(({ label, industry, icon: Icon, summary, implementations, results, quote, quoteAttr }) => (
            <div key={label} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-7 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{label}</span>
                  <h4 className="font-bold text-white text-base">{industry}</h4>
                </div>
              </div>

              <div className="p-7">
                {/* The Challenge */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{summary}</p>

                {/* What We Built */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-3">What Brandon Implemented</p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {implementations.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {results.map(({ metric, desc }) => (
                    <div key={metric} className="bg-green-50 rounded-xl border border-green-100 p-4 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-green-600 leading-none mb-1"><AnimatedStat value={metric} /></div>
                      <p className="text-xs text-green-700 leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* Client Quote */}
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex gap-4">
                  <Quote className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-700 leading-relaxed italic mb-2">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-gray-500">&mdash; {quoteAttr}, {industry}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-base mb-5">
            Ready to see what these kinds of results would look like for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-md text-sm"
            >
              Get Results Like These
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
          <p className="text-xs text-gray-400 mt-3">Start with a $1,500 assessment — yours to keep no matter what</p>
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
    <section id="faq" className="py-16 sm:py-20 bg-white">
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

function Guarantee() {
  return (
    <section id="guarantee" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Zero-Risk Start
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            You Don&apos;t Pay for Promises. You Pay for Proof.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve structured every engagement so you see value before you commit — not after.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              step: "1",
              title: "Start With a $1,500 Assessment",
              desc: "A standalone AI Readiness Assessment that delivers a prioritized report of your highest-ROI opportunities. You get the full report regardless of whether you continue — it\u2019s yours to keep.",
              highlight: "Applied to your first month if you move forward",
            },
            {
              step: "2",
              title: "See Results in 60\u201390 Days",
              desc: "Your pilot implementation deploys 1\u20132 high-impact AI use cases with measurable outcomes. You get working tools and real data before we scale — proof, not promises.",
              highlight: "Working AI tools, not slide decks",
            },
            {
              step: "3",
              title: "Milestone-Based Accountability",
              desc: "Every phase has clear deliverables and measurable outcomes. If we\u2019re not delivering value, we adjust. Brandon\u2019s reputation is built on results — that\u2019s why he only takes clients where he\u2019s confident he can deliver.",
              highlight: "Clear milestones at every phase",
            },
          ].map(({ step, title, desc, highlight }) => (
            <div
              key={step}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4 shrink-0">
                {step}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{desc}</p>
              <div className="flex items-start gap-2 text-sm font-semibold text-green-700 bg-green-50 rounded-xl px-4 py-3 border border-green-100">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                {highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-950 text-white rounded-2xl p-7 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 mb-5">
            <Shield className="w-7 h-7 text-blue-300" />
          </div>
          <h3 className="text-xl font-extrabold mb-3">
            The Bottom Line: You Never Risk More Than $1,500
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            The assessment is a standalone deliverable — if it&apos;s not a fit to continue, you keep the full report and walk away. If you do continue, that $1,500 is credited toward your first month. Every phase after that has clear milestones, so you always know exactly what you&apos;re getting before you pay for the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg text-sm"
            >
              Start With Your Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:5592823075"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call to Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalNote() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          {/* Decorative quote mark */}
          <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-serif leading-none shadow-md">
            &ldquo;
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
            <div className="shrink-0">
              <Image
                src="/brandon-hopkins.jpg"
                alt="Brandon Hopkins"
                width={80}
                height={80}
                className="w-20 h-20 rounded-2xl object-cover shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 leading-tight">
                A Quick Word Before You Apply
              </h2>
              <p className="text-sm text-gray-500">From Brandon Hopkins, personally</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
            <p>
              I know what you&apos;re thinking. <em>&ldquo;Another consultant promising the world.&rdquo;</em>
            </p>
            <p>
              I get it. I&apos;ve been a business owner for 20 years, and I&apos;ve hired
              my share of consultants who delivered nothing but invoices. That experience is
              exactly why I structured this engagement the way I did &mdash; you start with a
              $1,500 assessment you keep no matter what, you see working AI tools in 60&ndash;90
              days, and every phase has clear deliverables.
            </p>
            <p>
              I only take on 1&ndash;2 companies at a time because I actually embed in your
              operations. I learn your workflows, your team&apos;s strengths, your bottlenecks.
              I&apos;m not handing you a playbook and wishing you luck &mdash; I&apos;m building
              the tools, training your people, and making sure the AI actually sticks.
            </p>
            <p>
              If your application is a fit, I&apos;ll call you personally within 24 hours. If
              it&apos;s not the right match, I&apos;ll tell you that too &mdash; and I&apos;ll
              point you in the right direction. Either way, you&apos;ll know quickly.
            </p>
            <p className="font-semibold text-gray-900">
              The companies that move first on AI win. That&apos;s not hype &mdash; that&apos;s
              what I&apos;ve seen across 800+ businesses. The only question is whether
              you&apos;ll be leading your industry or chasing the ones who did.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-md text-sm"
            >
              Submit Your Application
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:5592823075"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Or Call Me Directly
            </a>
          </div>
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
            {/* Intake status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-green-500/15 border border-green-400/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-xs font-bold uppercase tracking-wide">
                Now Accepting Applications
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight mb-3">
              Apply for Your AI Strategy Session
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-7">
              Only <strong className="text-white">1 spot remaining</strong> for new engagements. We review every application personally.
            </p>

            {/* What happens next timeline */}
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                After You Apply
              </p>
              <div className="relative pl-5 space-y-5">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-1 bottom-1 w-px bg-blue-700" aria-hidden="true" />
                {[
                  {
                    step: "Today",
                    title: "Submit your application",
                    desc: "Takes less than 2 minutes. No obligation.",
                  },
                  {
                    step: "Within 24 hrs",
                    title: "Brandon reviews personally",
                    desc: "Every application is read by Brandon — never a sales team.",
                  },
                  {
                    step: "This week",
                    title: "15-min fit call (free)",
                    desc: "A quick call to discuss your goals and confirm mutual fit.",
                  },
                  {
                    step: "Next step",
                    title: "$1,500 AI Readiness Assessment",
                    desc: "A standalone deliverable you keep. Applied to month 1 if you continue.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="relative">
                    <div className="absolute -left-5 top-0.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-blue-400" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-blue-400">{step}</span>
                      <p className="text-sm font-semibold text-white leading-snug">{title}</p>
                      <p className="text-xs text-blue-300 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Your Assessment Includes */}
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                What Your Assessment Includes
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: BarChart3,
                    title: "AI Opportunity Audit",
                    desc: "Full review of your tools, workflows, and data sources",
                  },
                  {
                    icon: Target,
                    title: "ROI Priority Map",
                    desc: "Ranked list of highest-impact AI opportunities",
                  },
                  {
                    icon: Layers,
                    title: "Implementation Roadmap",
                    desc: "Step-by-step plan with timelines and milestones",
                  },
                  {
                    icon: Shield,
                    title: "Risk & Governance Brief",
                    desc: "Data handling rules and ethical AI guidelines",
                  },
                  {
                    icon: Calculator,
                    title: "Cost-Benefit Analysis",
                    desc: "Projected savings vs. investment for each initiative",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-snug">{title}</p>
                      <p className="text-xs text-blue-300/80 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-green-500/10 border border-green-400/20">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <p className="text-xs text-green-300 leading-relaxed">
                  <strong className="text-green-200">Yours to keep</strong> — the full report is yours regardless of whether you continue. $1,500 credited to Month 1 if you do.
                </p>
              </div>
            </div>

            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              Prefer to call? (559) 282-3075
            </a>
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

function StickyDesktopCTA() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the hero section (first <section> in main)
    const hero = document.querySelector("main > section:first-child");
    if (hero) heroRef.current = hero as HTMLElement;

    function onScroll() {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setVisible(heroBottom < 0);

      // Calculate scroll progress toward the #apply section
      const applySection = document.getElementById("apply");
      if (applySection) {
        const applyTop = applySection.getBoundingClientRect().top + window.scrollY;
        const scrolled = window.scrollY;
        const progress = Math.min(Math.max(scrolled / applyTop, 0), 1) * 100;
        setScrollProgress(progress);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-900 text-sm">Brandon Hopkins</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">AI Consultant for Small Business</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              1–2 Spots Available
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              (559) 282-3075
            </a>
            <a
              href="#apply"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors text-sm shadow-sm"
            >
              Apply Now
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-orange-500 transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
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

function SectionNav() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "pain", label: "The Problem" },
    { id: "calculator", label: "Calculator" },
    { id: "results", label: "Results" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about", label: "About Brandon" },
    { id: "process", label: "Process" },
    { id: "pricing", label: "Pricing" },
    { id: "compare", label: "Alternatives" },
    { id: "capabilities", label: "Capabilities" },
    { id: "fit", label: "Is This For You?" },
    { id: "faq", label: "FAQ" },
    { id: "guarantee", label: "Guarantee" },
    { id: "apply", label: "Apply" },
  ];

  useEffect(() => {
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
      aria-label="Page sections"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-2"
          aria-label={s.label}
        >
          <span
            className={`text-xs font-medium transition-all duration-200 whitespace-nowrap px-2 py-1 rounded-md ${
              activeSection === s.id
                ? "opacity-100 bg-blue-50 text-blue-700 translate-x-0"
                : "opacity-0 group-hover:opacity-100 text-gray-500 translate-x-2 group-hover:translate-x-0"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-200 ${
              activeSection === s.id
                ? "w-3 h-3 bg-blue-600 shadow-md shadow-blue-600/30"
                : "w-2 h-2 bg-gray-300 group-hover:bg-gray-500"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}

// ─── Social Proof Toast ───────────────────────────────────────────────────────

const SOCIAL_PROOF_ITEMS = [
  { city: "Phoenix, AZ", industry: "Construction", action: "applied for a strategy session", timeAgo: "12 min ago" },
  { city: "Denver, CO", industry: "Healthcare", action: "requested an AI Readiness Assessment", timeAgo: "34 min ago" },
  { city: "Atlanta, GA", industry: "Professional Services", action: "submitted an application", timeAgo: "1 hour ago" },
  { city: "Austin, TX", industry: "Retail", action: "applied for remote consulting", timeAgo: "2 hours ago" },
  { city: "Chicago, IL", industry: "Manufacturing", action: "booked a fit call with Brandon", timeAgo: "3 hours ago" },
  { city: "Nashville, TN", industry: "Legal", action: "applied for a strategy session", timeAgo: "5 hours ago" },
  { city: "Charlotte, NC", industry: "Finance", action: "requested an AI Readiness Assessment", timeAgo: "yesterday" },
  { city: "Portland, OR", industry: "Real Estate", action: "submitted an application", timeAgo: "yesterday" },
];

function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Randomize starting index
  useEffect(() => {
    setIndex(Math.floor(Math.random() * SOCIAL_PROOF_ITEMS.length));
  }, []);

  // Show after 8s delay (let user settle into the page first)
  useEffect(() => {
    const delay = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(delay);
  }, []);

  // Auto-cycle every 7s
  useEffect(() => {
    if (!visible || dismissed) return;
    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SOCIAL_PROOF_ITEMS.length);
        setFading(false);
      }, 300);
    }, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible, dismissed]);

  function dismiss() {
    setVisible(false);
    setTimeout(() => setDismissed(true), 400);
  }

  if (dismissed) return null;

  const item = SOCIAL_PROOF_ITEMS[index];

  return (
    <div
      className={`hidden md:block fixed bottom-6 left-6 z-40 max-w-xs transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        {/* Auto-advance progress bar */}
        <div className="h-[2px] bg-gray-100">
          <div
            key={index}
            className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
            style={{ animation: "sp-progress 7s linear forwards" }}
          />
        </div>

        <div className="flex items-start gap-3 px-4 py-3.5">
          {/* Pulse indicator */}
          <div className="shrink-0 mt-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
          </div>

          {/* Content */}
          <div
            className={`flex-1 min-w-0 transition-all duration-300 ${
              fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              A {item.industry.toLowerCase()} company in {item.city}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {item.action} · {item.timeAgo}
            </p>
          </div>

          {/* Dismiss */}
          <button
            onClick={dismiss}
            className="shrink-0 p-0.5 -mt-0.5 text-gray-300 hover:text-gray-500 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes sp-progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

function ExitIntentPopup({ savings }: { savings?: { annualWaste: number; aiSavings: number; monthlySavings: number; roiMultiple: number } | null }) {
  const [show, setShow] = useState(false);
  const firedRef = useRef(false);

  function fmt(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem("ctw_exit_dismissed", "1");
    } catch {}
  }, []);

  useEffect(() => {
    // Don't show if already dismissed this session
    try {
      if (sessionStorage.getItem("ctw_exit_dismissed")) return;
    } catch {}

    // Desktop: mouse leaves viewport toward top
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0 && !firedRef.current) {
        firedRef.current = true;
        setShow(true);
      }
    }

    // Wait 5 seconds before arming so we don't trigger on quick bounces
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  const hasCalcData = savings && savings.aiSavings > 0;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-[slideUp_300ms_ease-out]">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top accent bar */}
        <div className={`h-1.5 ${hasCalcData ? "bg-gradient-to-r from-red-500 via-orange-500 to-red-500" : "bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"}`} />

        <div className="px-7 pt-7 pb-8 text-center">
          {hasCalcData ? (
            <>
              {/* Personalized variant — uses their calculator numbers */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Based on Your Numbers
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                You&apos;re About to Walk Away From<br />
                <span className="text-red-600">{fmt(savings.aiSavings)}/Year in Savings</span>
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                Your calculator showed you&apos;re losing <strong className="text-red-600">{fmt(savings.monthlySavings)}/month</strong> on
                manual work right now. Every month you wait is another <strong className="text-red-600">{fmt(savings.monthlySavings)}</strong> gone.
              </p>

              {/* Savings breakdown */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 mb-6 max-w-xs mx-auto">
                <div className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Annual waste</span>
                    <span className="font-bold text-red-600">{fmt(savings.annualWaste)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Recoverable savings</span>
                    <span className="font-bold text-green-600">{fmt(savings.aiSavings)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between text-sm">
                    <span className="text-gray-500">Your ROI</span>
                    <span className="font-extrabold text-green-700">{savings.roiMultiple}x return</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#apply"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 text-sm"
                >
                  Stop Losing {fmt(savings.monthlySavings)}/mo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:5592823075"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Talk to Brandon First
                </a>
              </div>

              <p className="text-xs text-gray-400 mt-5">
                Start with a $1,500 assessment &mdash; credited to your first month if you continue.
              </p>
            </>
          ) : (
            <>
              {/* Generic variant — no calculator data */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold mb-5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                No Obligation · Completely Free
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                Before You Go &mdash;<br />
                <span className="text-blue-600">Get a Free 15-Minute Fit Call</span>
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                Not ready to apply? No problem. Talk to Brandon directly for 15 minutes &mdash;
                he&apos;ll tell you honestly whether AI consulting makes sense for your business.
                No sales pitch, no commitment.
              </p>

              {/* Value bullets */}
              <div className="flex flex-col gap-2.5 text-left max-w-xs mx-auto mb-7">
                {[
                  "Get honest advice on your AI readiness",
                  "Learn which processes to automate first",
                  "Walk away with actionable next steps",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:5592823075"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Brandon Now
                </a>
                <a
                  href="#apply"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
                >
                  Apply Instead
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-gray-400 mt-5">
                Brandon responds to every call personally &mdash; no sales team, no gatekeepers.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

// ─── Sticky Savings Banner ────────────────────────────────────────────────────

function StickySavingsBanner({
  savings,
  onApply,
}: {
  savings: { annualWaste: number; aiSavings: number; monthlySavings: number; roiMultiple: number } | null;
  onApply: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!savings) return;

    function onScroll() {
      const calcEl = document.getElementById("calculator");
      const applyEl = document.getElementById("apply");
      if (!calcEl) return;

      const calcBottom = calcEl.getBoundingClientRect().bottom;
      const applyTop = applyEl ? applyEl.getBoundingClientRect().top : Infinity;

      // Show when calculator is scrolled past, hide when Apply section is in view
      setVisible(calcBottom < 0 && applyTop > 200);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [savings]);

  if (!savings) return null;

  function fmt(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }

  return (
    <div
      className={`fixed top-14 left-0 right-0 z-[49] hidden md:block transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-r from-blue-950 to-blue-900 border-b border-blue-800/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-blue-200">
              <DollarSign className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-blue-300">Your numbers:</span>
            </span>
            <span className="font-bold text-red-300">
              {fmt(savings.annualWaste)}/yr wasted
            </span>
            <span className="text-blue-700">|</span>
            <span className="font-bold text-green-300">
              {fmt(savings.aiSavings)}/yr saveable
            </span>
            <span className="text-blue-700">|</span>
            <span className="font-bold text-white">
              {savings.roiMultiple}x ROI
            </span>
          </div>
          <button
            onClick={onApply}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors text-xs shadow-sm"
          >
            Stop Losing {fmt(savings.monthlySavings)}/mo
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Form Drawer (slide-out application panel) ───────────────────────────────

function FormDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[70] ${open ? "" : "pointer-events-none"}`}
      aria-modal={open}
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:max-w-lg bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="shrink-0 border-b border-gray-100 px-6 py-4 flex items-center justify-between bg-white">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-900 text-sm">Apply for AI Consulting</h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                1 spot left
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Takes less than 2 minutes · No obligation</p>
            <DrawerDeadlineNote />
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AIConsultantPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [calcSavings, setCalcSavings] = useState<{ annualWaste: number; aiSavings: number; monthlySavings: number; roiMultiple: number } | null>(null);

  const handleCalcResults = useCallback((data: { annualWaste: number; aiSavings: number; monthlySavings: number; roiMultiple: number } | null) => {
    setCalcSavings(data);
  }, []);

  // Intercept all "Apply" CTA clicks to open the drawer instead of scrolling
  useEffect(() => {
    function handleApplyClick(e: MouseEvent) {
      if (e.defaultPrevented) return;
      const link = (e.target as HTMLElement).closest('a[href="#apply"]');
      if (link) {
        e.preventDefault();
        setDrawerOpen(true);
      }
    }
    document.addEventListener("click", handleApplyClick);
    return () => document.removeEventListener("click", handleApplyClick);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ReturnVisitorBanner onApply={() => setDrawerOpen(true)} />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <RiskReversalStrip />
        <ScrollReveal><PainSection /></ScrollReveal>
        <ScrollReveal><SavingsCalculator onResultsChange={handleCalcResults} /></ScrollReveal>
        <ScrollReveal><Results /></ScrollReveal>
        <ScrollReveal><ClientTestimonials /></ScrollReveal>
        <ScrollReveal><AboutBrandon /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><Pricing savings={calcSavings} /></ScrollReveal>
        <ScrollReveal><CompareAlternatives /></ScrollReveal>
        <ScrollReveal><Capabilities /></ScrollReveal>
        <ScrollReveal><WhoThisIsFor /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><Guarantee /></ScrollReveal>
        <ScrollReveal><PersonalNote /></ScrollReveal>
        <ScrollReveal><ApplyForm /></ScrollReveal>
      </main>
      <Footer />
      <StickyDesktopCTA />
      <StickySavingsBanner savings={calcSavings} onApply={() => setDrawerOpen(true)} />
      <StickyMobileCTA />
      <SectionNav />
      <SocialProofToast />
      <ExitIntentPopup savings={calcSavings} />
      <FormDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
