"use client";

import { useState } from "react";
import type {
  WebsiteReport,
  ReportCategory,
  WebsiteCheck,
  ReportAction,
} from "@/types/website-report";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  DollarSign,
  Zap,
  Shield,
  Smartphone,
  MousePointerClick,
  Search,
  Eye,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function gradeColor(grade: string): string {
  if (grade.startsWith("A")) return "text-green-600";
  if (grade.startsWith("B")) return "text-blue-600";
  if (grade.startsWith("C")) return "text-yellow-600";
  if (grade.startsWith("D")) return "text-orange-600";
  return "text-red-600";
}

function gradeBg(grade: string): string {
  if (grade.startsWith("A")) return "from-green-500 to-emerald-600";
  if (grade.startsWith("B")) return "from-blue-500 to-blue-600";
  if (grade.startsWith("C")) return "from-yellow-500 to-amber-600";
  if (grade.startsWith("D")) return "from-orange-500 to-orange-600";
  return "from-red-500 to-red-600";
}

function scoreColor(score: number): string {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-blue-500";
  if (score >= 40) return "bg-yellow-500";
  if (score >= 20) return "bg-orange-500";
  return "bg-red-500";
}

function categoryIcon(name: string) {
  switch (name) {
    case "First Impression":
      return Eye;
    case "Mobile Experience":
      return Smartphone;
    case "Trust & Credibility":
      return Shield;
    case "Lead Capture":
      return MousePointerClick;
    case "SEO Basics":
      return Search;
    default:
      return Zap;
  }
}

const SCAN_PHASES = [
  "Fetching your website...",
  "Analyzing first impression...",
  "Checking mobile experience...",
  "Evaluating trust signals...",
  "Building your report card...",
];

// ─── StatusIcon ──────────────────────────────────────────────────────────────

function StatusIcon({ status }: { status: WebsiteCheck["status"] }) {
  if (status === "pass")
    return <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />;
  if (status === "warning")
    return <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />;
  return <XCircle className="w-4 h-4 text-red-500 shrink-0" />;
}

// ─── GradeCircle ─────────────────────────────────────────────────────────────

function GradeCircle({
  score,
  grade,
  size = "lg",
}: {
  score: number;
  grade: string;
  size?: "lg" | "sm";
}) {
  const radius = size === "lg" ? 70 : 40;
  const stroke = size === "lg" ? 8 : 5;
  const circumference = 2 * Math.PI * radius;
  const filled = (score / 100) * circumference;
  const svgSize = (radius + stroke) * 2;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={svgSize} height={svgSize} className="-rotate-90">
        <circle
          cx={radius + stroke}
          cy={radius + stroke}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-gray-200"
        />
        <circle
          cx={radius + stroke}
          cy={radius + stroke}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - filled}
          className={`transition-all duration-1000 ease-out ${
            grade.startsWith("A")
              ? "text-green-500"
              : grade.startsWith("B")
                ? "text-blue-500"
                : grade.startsWith("C")
                  ? "text-yellow-500"
                  : grade.startsWith("D")
                    ? "text-orange-500"
                    : "text-red-500"
          }`}
          stroke="currentColor"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`font-extrabold ${gradeColor(grade)} ${
            size === "lg" ? "text-4xl" : "text-xl"
          }`}
        >
          {grade}
        </span>
        <span
          className={`text-gray-400 font-medium ${
            size === "lg" ? "text-sm" : "text-xs"
          }`}
        >
          {score}/100
        </span>
      </div>
    </div>
  );
}

// ─── ViewToggle ──────────────────────────────────────────────────────────────

function ViewToggle({
  view,
  setView,
}: {
  view: "before" | "after";
  setView: (v: "before" | "after") => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
      <button
        onClick={() => setView("before")}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          view === "before"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Your Website
      </button>
      <button
        onClick={() => setView("after")}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          view === "after"
            ? "bg-orange-500 text-white shadow-sm"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          With CalTech Web
        </span>
      </button>
    </div>
  );
}

// ─── ScoreComparison ─────────────────────────────────────────────────────────

function ScoreComparison({ report }: { report: WebsiteReport }) {
  const delta = report.afterScore - report.overallScore;
  return (
    <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl p-6 sm:p-8 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center">
          <div className="text-sm text-blue-300 font-medium mb-1">
            Current Score
          </div>
          <div className="text-4xl font-extrabold">{report.overallScore}</div>
          <div className={`text-sm font-bold ${gradeColor(report.grade).replace("text-", "text-")}`}>
            Grade: {report.grade}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-16 sm:w-24 h-0.5 bg-blue-700" />
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-bold text-sm">+{delta}</span>
          </div>
          <div className="w-16 sm:w-24 h-0.5 bg-blue-700" />
        </div>

        <div className="text-center">
          <div className="text-sm text-orange-300 font-medium mb-1">
            With CalTech Web
          </div>
          <div className="text-4xl font-extrabold text-orange-400">
            {report.afterScore}
          </div>
          <div className="text-sm font-bold text-green-400">
            Grade: {report.afterGrade}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CategoryCard ────────────────────────────────────────────────────────────

function CategoryCard({
  category,
  view,
}: {
  category: ReportCategory;
  view: "before" | "after";
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = categoryIcon(category.name);
  const score = view === "before" ? category.score : category.afterScore;
  const passCount = category.checks.filter((c) => c.status === "pass").length;
  const totalCount = category.checks.length;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            score >= 80
              ? "bg-green-50 text-green-600"
              : score >= 60
                ? "bg-blue-50 text-blue-600"
                : score >= 40
                  ? "bg-yellow-50 text-yellow-600"
                  : "bg-red-50 text-red-600"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-gray-900 text-sm">
              {category.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-700">
                {score}/100
              </span>
              {view === "after" && category.afterScore > category.score && (
                <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  +{category.afterScore - category.score}
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-700 ${scoreColor(score)}`}
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-xs text-gray-400">
              {passCount}/{totalCount} checks passed
            </span>
            <span className="text-xs text-gray-400">
              Weight: {category.weight}%
            </span>
          </div>
        </div>

        {expanded ? (
          <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-5 pb-4 border-t border-gray-50">
          <div className="space-y-3 pt-3">
            {category.checks.map((check, i) => (
              <div key={i} className="flex items-start gap-3">
                {view === "after" && check.status !== "pass" ? (
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                ) : (
                  <div className="mt-0.5">
                    <StatusIcon status={check.status} />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-sm font-medium text-gray-800">
                    {check.label}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed mt-0.5">
                    {view === "after" && check.status !== "pass"
                      ? `Fixed by CalTech Web — ${check.label.toLowerCase()} optimized for maximum performance.`
                      : check.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── RevenueLoss ─────────────────────────────────────────────────────────────

function RevenueLoss({ amount }: { amount: number }) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
        <DollarSign className="w-6 h-6 text-red-600" />
      </div>
      <div className="text-sm font-medium text-red-700 mb-1">
        Estimated Monthly Revenue Loss
      </div>
      <div className="text-3xl font-extrabold text-red-600">
        ${amount.toLocaleString()}/mo
      </div>
      <p className="text-xs text-red-500/80 mt-2 max-w-sm mx-auto">
        Based on industry data for websites with this score. Slow, broken, or
        hard-to-use sites lose customers to competitors every day.
      </p>
    </div>
  );
}

// ─── ActionCard ──────────────────────────────────────────────────────────────

function ActionCard({ action }: { action: ReportAction }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded ${
            action.urgency === "Immediate"
              ? "bg-red-100 text-red-700"
              : action.urgency === "This Month"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
          }`}
        >
          {action.urgency}
        </span>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded ${
            action.impact === "High"
              ? "bg-blue-100 text-blue-700"
              : action.impact === "Medium"
                ? "bg-gray-100 text-gray-600"
                : "bg-gray-50 text-gray-500"
          }`}
        >
          {action.impact} Impact
        </span>
      </div>
      <h4 className="font-bold text-gray-900 text-sm mb-1">{action.title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">
        {action.description}
      </p>
    </div>
  );
}

// ─── ScanningState ───────────────────────────────────────────────────────────

function ScanningState({ phase }: { phase: number }) {
  return (
    <div className="flex flex-col items-center py-16">
      {/* Spinner */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 animate-spin" />
        <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-blue-500 animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
        <div className="absolute inset-6 rounded-full border-4 border-transparent border-t-orange-400 animate-spin [animation-duration:2s]" />
      </div>

      {/* Phase text */}
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-900 mb-3">
          {SCAN_PHASES[phase] || SCAN_PHASES[0]}
        </p>
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
          {SCAN_PHASES.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i <= phase ? "bg-orange-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function WebsiteReportCard() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [report, setReport] = useState<WebsiteReport | null>(null);
  const [error, setError] = useState("");
  const [view, setView] = useState<"before" | "after">("before");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setError("");
    setReport(null);
    setScanning(true);
    setPhase(0);
    setView("before");

    // Animate through phases
    const phaseInterval = setInterval(() => {
      setPhase((p) => {
        if (p >= SCAN_PHASES.length - 1) {
          clearInterval(phaseInterval);
          return p;
        }
        return p + 1;
      });
    }, 1800);

    try {
      const res = await fetch("/api/website-report-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setScanning(false);
        clearInterval(phaseInterval);
        return;
      }

      // Ensure we show all phases before revealing results
      setPhase(SCAN_PHASES.length - 1);
      await new Promise((r) => setTimeout(r, 1200));

      setReport(data);
      setScanning(false);
    } catch {
      setError(
        "Could not connect to the server. Please check your connection and try again."
      );
      setScanning(false);
    }

    clearInterval(phaseInterval);
  }

  return (
    <div>
      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-8 max-w-3xl mx-auto"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your website URL (e.g. mybusiness.com)"
          className="flex-1 px-5 py-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
          disabled={scanning}
        />
        <button
          type="submit"
          disabled={scanning || !url.trim()}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {scanning ? "Scanning..." : "Grade My Website"}
          {!scanning && <ArrowRight className="w-4 h-4" />}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Scanning Animation */}
      {scanning && <ScanningState phase={phase} />}

      {/* Results */}
      {report && !scanning && (
        <div className="space-y-6">
          {/* View Toggle */}
          <div className="flex justify-center">
            <ViewToggle view={view} setView={setView} />
          </div>

          {/* Score Comparison */}
          <ScoreComparison report={report} />

          {/* Grade Circle */}
          <div className="flex justify-center py-4">
            <GradeCircle
              score={view === "before" ? report.overallScore : report.afterScore}
              grade={view === "before" ? report.grade : report.afterGrade}
            />
          </div>

          {/* Domain label */}
          <div className="text-center">
            <span className="text-sm text-gray-500">
              Report for{" "}
              <span className="font-semibold text-gray-700">
                {report.domain}
              </span>
            </span>
          </div>

          {/* Category Cards */}
          <div className="space-y-3">
            {report.categories.map((cat) => (
              <CategoryCard key={cat.name} category={cat} view={view} />
            ))}
          </div>

          {/* Revenue Loss */}
          {view === "before" && (
            <RevenueLoss amount={report.estimatedRevenueLoss} />
          )}

          {/* Issues & Strengths */}
          {view === "before" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Issues */}
              {report.topIssues.length > 0 && (
                <div className="bg-red-50/50 rounded-2xl border border-red-100 p-5">
                  <h3 className="font-bold text-red-700 text-sm mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Top Issues
                  </h3>
                  <ul className="space-y-2">
                    {report.topIssues.map((issue, i) => (
                      <li
                        key={i}
                        className="text-xs text-red-600/80 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-red-400 mt-0.5 shrink-0">
                          {i + 1}.
                        </span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Strengths */}
              {report.strengths.length > 0 && (
                <div className="bg-green-50/50 rounded-2xl border border-green-100 p-5">
                  <h3 className="font-bold text-green-700 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {report.strengths.map((str, i) => (
                      <li
                        key={i}
                        className="text-xs text-green-600/80 leading-relaxed flex items-start gap-2"
                      >
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" />
                        {str}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Action Items */}
          {view === "before" && report.actions.length > 0 && (
            <div>
              <h3 className="font-bold text-gray-900 mb-3">
                Recommended Actions
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {report.actions.map((action, i) => (
                  <ActionCard key={i} action={action} />
                ))}
              </div>
            </div>
          )}

          {/* After-state CTA */}
          {view === "after" && (
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                Get These Fixes for $99/month
              </h3>
              <p className="text-sm text-gray-600 mb-5 max-w-lg mx-auto">
                CalTech Web builds, hosts, and maintains your website. We fix
                every issue in this report — and keep your site fast, secure, and
                converting visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/web-design-pricing/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-md"
                >
                  Get My Website
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:5592823075"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  (559) 282-3075
                </a>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl p-6 sm:p-8 text-center text-white">
            <h3 className="text-xl font-extrabold mb-2">
              Ready to Fix Your Website?
            </h3>
            <p className="text-blue-200 text-sm mb-5 max-w-lg mx-auto">
              Stop losing customers to a broken website. CalTech Web builds you
              a fast, professional site for just $99/month — no contracts, no
              surprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/web-design-pricing/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-lg"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5592823075"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (559) 282-3075
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
