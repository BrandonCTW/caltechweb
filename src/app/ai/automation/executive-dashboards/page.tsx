import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Calendar,
  ChevronRight,
  BarChart3,
  LayoutDashboard,
  Database,
  Paintbrush,
  RefreshCw,
  Lock,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Server,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const whatWeBuilt = [
  {
    icon: LayoutDashboard,
    title: "Custom Layout & Design",
    desc: "Every dashboard is designed from scratch to match your brand, your data, and your priorities. No forced templates. No Salesforce chrome. Exactly what you asked for.",
  },
  {
    icon: Database,
    title: "Multi-Source Data Connectors",
    desc: "Pull from Google Sheets, internal databases, REST APIs, CSVs, and any other data source your team uses. Unified into a single view without stitching tools together manually.",
  },
  {
    icon: RefreshCw,
    title: "Automated Data Refresh",
    desc: "Dashboards update on a schedule or in real time depending on source. No one presses a button. The numbers are current when you open the page.",
  },
  {
    icon: BarChart3,
    title: "Charts, Tables & KPI Cards",
    desc: "Custom-built visualizations using Chart.js or D3. Line charts, bar charts, pie charts, scorecards, tables with sorting and filtering. Rendered exactly how you want to see them.",
  },
  {
    icon: Paintbrush,
    title: "Full Visual Control",
    desc: "Colors, fonts, spacing, density, dark mode — all configurable. Your dashboard looks like it belongs to your company, not to a $100/month SaaS vendor.",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Role-based access built to your spec. Executives see the full view. Managers see their segment. Individual contributors see their own data. All enforced server-side.",
  },
  {
    icon: RefreshCw,
    title: "Drill-Down & Filtering",
    desc: "Click into any chart to see the underlying data. Filter by date range, region, product line, team, or any dimension that matters. No license tier required to unlock it.",
  },
  {
    icon: Server,
    title: "Self-Hosted on Your Infrastructure",
    desc: "The dashboard runs on a server you own. No SaaS platform sitting between your data and your screen. No monthly fee for a tool that already does what it needs to do.",
  },
];

const comparisonRows = [
  {
    label: "Monthly cost per user",
    custom: "None after build",
    tableau: "$75+/user",
    salesforce: "$25–$300/user",
    powerbi: "$10–$20/user",
  },
  {
    label: "Looks exactly how you want",
    custom: true,
    tableau: false,
    salesforce: false,
    powerbi: false,
  },
  {
    label: "Works with any data source",
    custom: true,
    tableau: false,
    salesforce: false,
    powerbi: false,
  },
  {
    label: "You own the code",
    custom: true,
    tableau: false,
    salesforce: false,
    powerbi: false,
  },
  {
    label: "No vendor lock-in",
    custom: true,
    tableau: false,
    salesforce: false,
    powerbi: false,
  },
  {
    label: "No per-seat licensing",
    custom: true,
    tableau: false,
    salesforce: false,
    powerbi: false,
  },
  {
    label: "Runs if vendor shuts down",
    custom: true,
    tableau: false,
    salesforce: false,
    powerbi: false,
  },
];

const timeline = [
  { period: "Week 1", phase: "Discovery & Data Audit", tag: "Discovery", tagColor: "blue" as const, desc: "Document all data sources, key metrics, and who sees what. Define layout, KPIs, and access levels with stakeholders. Establish hosting environment." },
  { period: "Weeks 2–3", phase: "Data Layer & Connectors", tag: "Build", tagColor: "orange" as const, desc: "Build data connectors for each source. Set up refresh schedules and caching. Validate data accuracy against existing reports." },
  { period: "Week 4", phase: "Dashboard UI Build", tag: "Build", tagColor: "orange" as const, desc: "Build charts, tables, KPI cards, and filters. Apply brand styling. Build role-based access control." },
  { period: "Week 5", phase: "Review & Revisions", tag: "Testing", tagColor: "green" as const, desc: "Client reviews the full dashboard with live data. One round of layout and metric revisions included. Edge case handling and mobile optimization." },
  { period: "Week 6", phase: "Go-Live & Handoff", tag: "Go-Live", tagColor: "green" as const, desc: "Deploy to production. Team walkthrough and documentation. Access configured for all users. Retainer begins for ongoing updates and additions." },
];

const phaseColorMap = {
  blue:   { circle: "bg-blue-600",   border: "border-l-blue-500",   badge: "bg-blue-50 text-blue-700 border-blue-200",     period: "text-blue-600" },
  orange: { circle: "bg-orange-500", border: "border-l-orange-400", badge: "bg-orange-50 text-orange-700 border-orange-200", period: "text-orange-600" },
  green:  { circle: "bg-green-600",  border: "border-l-green-500",  badge: "bg-green-50 text-green-700 border-green-200",   period: "text-green-700" },
  teal:   { circle: "bg-teal-600",   border: "border-l-teal-500",   badge: "bg-teal-50 text-teal-700 border-teal-200",     period: "text-teal-700" },
};

export default function ExecutiveDashboardsPage() {
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
              <span className="text-blue-400">Executive Dashboards</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold uppercase tracking-widest text-blue-400">
                Case Study
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-gray-400">
                Data &amp; Reporting
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
              Ditch Tableau.
              <span className="block text-blue-400 mt-1">Own Your Dashboard Forever.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-8">
              Tableau charges $75 per user per month and still won&apos;t let you make it look the way you want. Salesforce and Power BI are the same story: expensive, rigid, and designed to keep you paying. We build custom dashboards that look better, pull from any data source, and cost nothing after the build.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "$0/mo", label: "after the build" },
                { metric: "Any", label: "data source supported" },
                { metric: "6 wks", label: "average delivery" },
                { metric: "100%", label: "your code, your server" },
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
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Every problem. Directly solved.
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                The team paid monthly for tools they didn&apos;t own and couldn&apos;t customize. Here&apos;s what changed.
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-4 px-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-500">Before</span>
              <span className="w-10" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-green-400">After</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  before: "Paying $75+ per seat per month for tools that still look generic",
                  after: "Dashboard built once with no monthly licensing fee",
                },
                {
                  before: "Layout locked to what the vendor ships, no real customization",
                  after: "Full visual control, designed exactly to your spec",
                },
                {
                  before: "Adding a user means adding a license and another monthly charge",
                  after: "Unlimited users, no per-seat fee, ever",
                },
                {
                  before: "Data scattered across tools that don't connect to each other",
                  after: "Pulls from any source into one unified view automatically",
                },
                {
                  before: "Vendor raises prices and you have no leverage or alternative",
                  after: "You own the code and hosting, vendor decisions change nothing",
                },
                {
                  before: "Dashboard disappears if the platform shuts down or sunsets",
                  after: "Runs on your own infrastructure forever, independent of any vendor",
                },
              ].map(({ before, after }) => (
                <div key={before} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="flex items-center gap-3 bg-red-950/60 border border-red-900/50 rounded-xl px-4 py-3.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-sm text-red-100 leading-snug">{before}</span>
                  </div>
                  <div className="flex items-center justify-center w-10">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-3 bg-green-950/60 border border-green-900/50 rounded-xl px-4 py-3.5">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-sm text-green-100 leading-snug">{after}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">The dashboard runs on infrastructure the client owns.</span>{" "}
                All credentials, API keys, and data stay in their environment. No SaaS platform sitting between your data and your screen. If we part ways, nothing stops working.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                Side by Side
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                How It Stacks Up
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500 w-1/2">Feature</th>
                    <th className="px-4 py-4 text-center">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Custom Build</span>
                    </th>
                    <th className="px-4 py-4 text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Tableau</span>
                    </th>
                    <th className="px-4 py-4 text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Salesforce</span>
                    </th>
                    <th className="px-4 py-4 text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Power BI</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ label, custom, tableau, salesforce, powerbi }, i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3.5 font-medium text-gray-700">{label}</td>
                      <td className="px-4 py-3.5 text-center">
                        {typeof custom === "boolean" ? (
                          custom ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-xs font-bold text-blue-700">{custom}</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {typeof tableau === "boolean" ? (
                          tableau ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-xs text-gray-500">{tableau}</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {typeof salesforce === "boolean" ? (
                          salesforce ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-xs text-gray-500">{salesforce}</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {typeof powerbi === "boolean" ? (
                          powerbi ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-xs text-gray-500">{powerbi}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What We Built */}
        <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                What&apos;s Included
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Every Build Includes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every dashboard engagement includes the full stack from data connectors to front-end design. Nothing is a paid add-on.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {whatWeBuilt.map(({ icon: Icon, title, desc }, index) => (
                <div key={title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex gap-4 relative overflow-hidden">
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
                  Pay Once. Own It.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dashboard builds are priced as a one-time build fee, followed by an optional monthly retainer for ongoing updates, new metric additions, and data source integrations. After the build, the system runs on its own with no recurring licensing cost.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Zap, label: "Build Fee", value: "$10,000–$20,000", sub: "Scoped to data sources and complexity" },
                    { icon: Clock, label: "Monthly Retainer", value: "$1,000–$2,000/mo", sub: "Optional, for ongoing changes and additions" },
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
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700">Break-Even vs. Tableau</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    A team of 10 on Tableau Creator licenses pays $750 per month, or $9,000 per year. A custom build at $15,000 pays for itself in under 18 months and costs nothing after that.
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-extrabold text-green-700">18 months</span>
                    <span className="text-sm text-green-600 font-semibold">to break even vs. Tableau at 10 seats</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Every month after that is money back in your pocket</div>
                </div>
              </div>
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-orange-400" />
                  <h3 className="font-extrabold text-xl">What Are You Paying Now?</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Add up your current BI seats. Most teams are surprised how quickly it compounds. If you&apos;re paying more than $1,000 per month for dashboards that still don&apos;t look the way you want, a custom build is worth the conversation.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Any number of users, no per-seat fee",
                    "Any data source your team uses today",
                    "Looks exactly the way you design it with us",
                    "No vendor risk if prices change or products get sunset",
                    "You keep the code even if you stop the retainer",
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
              Stop Paying to See Your Own Data
            </h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-xl mx-auto">
              Tell us what you&apos;re measuring and what your current tool costs. We&apos;ll tell you what a custom build would take.
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
