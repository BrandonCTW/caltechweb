import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Client Reporting for SEO & Marketing Agencies | CalTech Web",
  description: "We build custom automated client reporting dashboards for SEO and marketing agencies. Pull from GSC, Ahrefs, GA4, and any other source. Clients see live data. Your team stops pulling reports manually.",
};

import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Calendar,
  ChevronRight,
  BarChart3,
  LayoutDashboard,
  Database,
  RefreshCw,
  Lock,
  Clock,
  Shield,
  TrendingUp,
  Server,
  Zap,
  Users,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const whatWeBuilt = [
  {
    icon: Database,
    title: "Multi-Source Data Connectors",
    desc: "Pulls from Google Search Console, Ahrefs, GA4, Google Ads, and any other platform your agency uses. All sources unified into a single data layer with no manual exports.",
  },
  {
    icon: RefreshCw,
    title: "Automated Daily Refresh",
    desc: "Data updates on a schedule without anyone pressing a button. When a client logs in or an owner checks the internal view, the numbers are current.",
  },
  {
    icon: LayoutDashboard,
    title: "Client-Facing Dashboard",
    desc: "Each client gets a branded view showing their own metrics: rankings, traffic, backlinks, conversions. Designed to match your agency's look, not a generic SaaS template.",
  },
  {
    icon: BarChart3,
    title: "Internal Agency View",
    desc: "A single internal dashboard showing all clients at a glance. Spot underperformers, track deliverables, and see cross-client trends without opening a spreadsheet.",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    desc: "Each client sees only their own data. Agency staff see everything. Executives get a summary view. All enforced server-side, no manual access management.",
  },
  {
    icon: FileText,
    title: "Scheduled Report Snapshots",
    desc: "Optional automated email delivery of PDF or HTML report snapshots on a weekly or monthly schedule. Clients get their report without anyone sending it.",
  },
  {
    icon: Users,
    title: "Unlimited Client Seats",
    desc: "No per-seat licensing. Add a new client in an afternoon. Every new account gets the same dashboard structure, pre-configured and ready to connect.",
  },
  {
    icon: Server,
    title: "Self-Hosted on Your Infrastructure",
    desc: "The dashboard runs on a server you own. All API credentials and client data stay in your environment. No third-party platform between you and your clients' numbers.",
  },
];

const timeline = [
  { period: "Week 1", phase: "Discovery & Data Audit", tag: "Discovery", tagColor: "blue" as const, desc: "Map all data sources, reporting cadences, and client tiers. Define KPIs, dashboard layouts, and access levels. Provision hosting environment." },
  { period: "Weeks 2–3", phase: "Data Layer & Connectors", tag: "Build", tagColor: "orange" as const, desc: "Build API connectors for each source. Configure refresh schedules and caching. Validate data accuracy against existing manual reports." },
  { period: "Week 4", phase: "Dashboard UI Build", tag: "Build", tagColor: "orange" as const, desc: "Build client-facing and internal dashboards. Apply agency branding. Build per-client access control and the agency-wide summary view." },
  { period: "Week 5", phase: "Review & Revisions", tag: "Testing", tagColor: "green" as const, desc: "Live review with the agency team against real client data. One round of layout and metric revisions included. Set up scheduled snapshots if needed." },
  { period: "Week 6", phase: "Go-Live & Handoff", tag: "Go-Live", tagColor: "green" as const, desc: "Deploy to production. Team walkthrough and SOPs. Client access configured. Retainer begins for ongoing updates and new client additions." },
];

const phaseColorMap = {
  blue:   { circle: "bg-blue-600",   border: "border-l-blue-500",   badge: "bg-blue-50 text-blue-700 border-blue-200",     period: "text-blue-600" },
  orange: { circle: "bg-orange-500", border: "border-l-orange-400", badge: "bg-orange-50 text-orange-700 border-orange-200", period: "text-orange-600" },
  green:  { circle: "bg-green-600",  border: "border-l-green-500",  badge: "bg-green-50 text-green-700 border-green-200",   period: "text-green-700" },
  teal:   { circle: "bg-teal-600",   border: "border-l-teal-500",   badge: "bg-teal-50 text-teal-700 border-teal-200",     period: "text-teal-700" },
};

export default function AutomatedClientReportingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white py-20 sm:py-28 relative overflow-hidden">
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
            <nav className="flex items-center gap-1.5 text-xs text-blue-400/70 mb-6 flex-wrap">
              <Link href="/ai/" className="hover:text-blue-400 transition-colors">AI Services</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/ai/automation/" className="hover:text-blue-400 transition-colors">Automation Builds</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-blue-400">Automated Client Reporting</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold uppercase tracking-widest text-blue-400">
                Case Study
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-gray-400">
                SEO Agency
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
              Your Team Stops Pulling Reports.
              <span className="block text-blue-400 mt-1">Clients See Everything.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-8">
              A growing SEO agency with 40 clients was paying account managers to manually compile ranking data, traffic stats, and backlink metrics every month. We built an automated reporting dashboard that pulls from every tool, updates daily, and gives each client a live view of their own data. The manual reporting work disappeared.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "40", label: "clients served, zero reporting headcount" },
                { metric: "6 wks", label: "discovery to go-live" },
                { metric: "0 hrs", label: "monthly manual reporting" },
                { metric: "100%", label: "agency-owned infrastructure" },
              ].map(({ metric, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 leading-tight">{metric}</div>
                  <div className="text-xs text-gray-400 mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/brandonctw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book a 30-Min Call
            </a>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4">
              <span className="flex items-center gap-1.5 text-sm text-blue-300/70">
                <Clock className="w-4 h-4 shrink-0" />
                30 minutes
              </span>
              <span className="flex items-center gap-1.5 text-sm text-blue-300/70">
                <Shield className="w-4 h-4 shrink-0" />
                No commitment
              </span>
              <span className="flex items-center gap-1.5 text-sm text-blue-300/70">
                <CheckCircle className="w-4 h-4 shrink-0" />
                Honest fit assessment
              </span>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-16 sm:py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Every problem. Directly solved.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Reporting headcount is a margin killer. Here&apos;s what the agency looked like before and after.
              </p>
            </div>

            <div className="grid grid-cols-[1fr_52px_1fr] mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">Before</span>
              <div />
              <span className="text-xs font-bold uppercase tracking-widest text-green-400">After</span>
            </div>

            <div className="space-y-2">
              {[
                {
                  before: "Account managers spent 15+ hours per week pulling data from GSC, Ahrefs, and GA4",
                  after: "All sources pull automatically every day, no one touches them",
                },
                {
                  before: "Reports went out late because someone was behind or out",
                  after: "Clients log in and see live data anytime, no send required",
                },
                {
                  before: "Every report looked different depending on who made it",
                  after: "Every client gets the same consistent, branded view",
                },
                {
                  before: "Hired a junior analyst specifically to manage the reporting workload",
                  after: "No reporting headcount — the dashboard handles it",
                },
                {
                  before: "Adding a new client added hours of setup and ongoing manual work",
                  after: "New client gets a configured dashboard in an afternoon",
                },
                {
                  before: "Owner had no way to see cross-client performance without opening each report",
                  after: "Internal dashboard shows all 40 clients in one view",
                },
              ].map(({ before, after }) => (
                <div key={before} className="grid grid-cols-[1fr_52px_1fr] items-stretch rounded-xl overflow-hidden border border-white/10">
                  <div className="bg-red-950/60 px-4 py-4 flex items-center gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-sm text-red-200 leading-snug">{before}</span>
                  </div>
                  <div className="bg-white/5 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="bg-green-950/60 px-4 py-4 flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-sm text-green-200 leading-snug">{after}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl px-6 py-5">
              <p className="text-sm text-blue-200 leading-relaxed">
                <span className="font-extrabold text-white">The dashboard runs on infrastructure the agency owns.</span> All API keys, client data, and credentials stay in their environment. No third-party reporting platform between them and their clients&apos; numbers. If we part ways, nothing stops working.
              </p>
            </div>
          </div>
        </section>

        {/* What We Built */}
        <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                Scope of Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                What We Built
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Eight components covering the full stack from data connectors to client access. Every piece runs automatically after deployment.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {whatWeBuilt.map(({ icon: Icon, title, desc }, index) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-4 relative overflow-hidden">
                  <span className="absolute -bottom-3 right-3 text-8xl font-black text-gray-100 select-none leading-none pointer-events-none" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-20 bg-gray-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                Implementation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                6 Weeks from Kickoff to Live Dashboard
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-blue-900" aria-hidden="true" />
              <div className="space-y-3">
                {timeline.map(({ period, phase, tag, tagColor, desc }, index) => {
                  const colors = phaseColorMap[tagColor];
                  return (
                    <div key={period} className="flex gap-4 relative">
                      <div className="shrink-0 pt-0.5 z-10">
                        <div className={`w-9 h-9 rounded-full ${colors.circle} text-white text-sm font-extrabold flex items-center justify-center leading-none ring-4 ring-gray-950`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className={`flex-1 min-w-0 bg-white/5 rounded-2xl border border-white/10 border-l-4 ${colors.border} p-5`}>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-xs font-bold uppercase tracking-widest ${colors.period}`}>{period}</span>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors.badge}`}>{tag}</span>
                        </div>
                        <div className="font-bold text-white mb-1">{phase}</div>
                        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                  Investment
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  One Build. No Reporting Staff.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dashboard builds are priced as a one-time build fee, followed by an optional monthly retainer for new client onboarding, data source additions, and layout updates.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Zap, label: "Build Fee", value: "$10,000–$20,000", sub: "Scoped to client count and data sources" },
                    { icon: Clock, label: "Monthly Retainer", value: "$1,000–$2,000/mo", sub: "Optional, for new clients and ongoing changes" },
                  ].map(({ icon: Icon, label, value, sub }) => (
                    <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-0.5">{label}</div>
                        <div className="font-extrabold text-gray-900 text-xl leading-tight">{value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700">The Math</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">
                    Your team is spending <strong className="text-green-700">$1,500/month</strong> doing something a dashboard can do for free. Starting at $5K, this pays for itself in 4 months and puts <strong className="text-green-700">$18,000 a year</strong> back in your agency.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "Starts at $5K", label: "one-time build" },
                      { value: "~4 months", label: "to break even" },
                      { value: "$18K/yr", label: "saved after year one" },
                      { value: "15 hrs/wk", label: "back in your team's hands" },
                    ].map(({ value, label }) => (
                      <div key={label} className="bg-white border border-green-200 rounded-lg px-3 py-2.5 text-center">
                        <div className="text-xl font-extrabold text-green-700 leading-tight">{value}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="font-extrabold text-xl mb-2">Is This Right for Your Agency?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  This build is a strong fit if your team is spending significant time each month assembling and sending client reports, and that workload grows every time you add a client.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "10 or more active clients requiring regular reporting",
                    "Data spread across GSC, Ahrefs, GA4, or paid platforms",
                    "Account managers spending hours on manual data pulls",
                    "Inconsistent report formats across the team",
                    "Clients asking for data on their own timeline",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/brandonctw/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Book a 30-Min Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-blue-950 text-white relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Stop Paying Staff to Pull Reports
            </h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-xl mx-auto">
              Tell us how many clients you have and what tools you use. We&apos;ll scope it in 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/brandonctw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book a 30-Min Call
              </a>
              <Link
                href="/ai/automation/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View All Automation Builds
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
