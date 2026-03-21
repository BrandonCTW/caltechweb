import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Calendar,
  ChevronRight,
  Mail,
  Filter,
  Database,
  BarChart3,
  Bell,
  Search,
  Copy,
  Clock,
  Shield,
  TrendingUp,
  Layers,
  Server,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const whatWeBuilt = [
  {
    icon: Mail,
    title: "Gmail Spam Folder Monitor",
    desc: "Automated polling of the Gmail spam folder via the Gmail API. New inbound emails are captured and queued without any manual review or folder sorting.",
  },
  {
    icon: Filter,
    title: "Email Parser & Classifier",
    desc: "Extracts sender name, domain, subject line, and message body. Classifies each email by type: link exchange, guest post offer, partnership pitch, or noise.",
  },
  {
    icon: Copy,
    title: "Deduplication Engine",
    desc: "Cross-references each inbound domain against a running contact database. Removes repeat contacts, known vendors, and previously engaged domains before any enrichment runs.",
  },
  {
    icon: Search,
    title: "Ahrefs Enrichment",
    desc: "For every unique domain that clears deduplication, the system pulls Domain Rating, organic traffic estimate, and referring domain count directly from the Ahrefs API.",
  },
  {
    icon: Database,
    title: "Contact Data Enrichment",
    desc: "Appends contact name, verified email, and company details from Hunter and Apollo for each sender, creating a complete lead record without any manual lookups.",
  },
  {
    icon: BarChart3,
    title: "Opportunity Scoring",
    desc: "Each lead is scored on a composite of domain authority, traffic tier, relevance to existing verticals, and outreach quality. High-value targets surface automatically.",
  },
  {
    icon: Bell,
    title: "Daily Digest Delivery",
    desc: "A ranked list of qualified opportunities is delivered each morning via Slack and email. The team sees only what cleared scoring thresholds. No inbox review required.",
  },
  {
    icon: Layers,
    title: "Contact Database & History",
    desc: "Every processed lead is logged with full enrichment data, classification, score, and status. The team can search, filter, and track outreach outcomes over time.",
  },
];

const architecture = [
  {
    icon: Server,
    layer: "Infrastructure",
    detail: "Python scripts running on a cloud server the client owns. All Gmail OAuth tokens, API keys, and database credentials are stored in the client environment.",
  },
  {
    icon: Clock,
    layer: "Polling Frequency",
    detail: "Spam folder is checked every 15 minutes. New emails trigger an enrichment job immediately. Daily digest runs on a scheduled cron at 7:00 AM local time.",
  },
  {
    icon: Database,
    layer: "Data Sources",
    detail: "Ahrefs API for domain metrics. Hunter and Apollo for contact data. Internal SQLite database for deduplication history and lead tracking.",
  },
  {
    icon: Shield,
    layer: "Data Ownership",
    detail: "All email data, enrichment results, and contact records stay in the client's environment. No data leaves through third-party automation platforms.",
  },
];

const timeline = [
  { period: "Week 1", phase: "Discovery & Access", tag: "Discovery", tagColor: "blue" as const, desc: "Audit current spam review process. Document scoring criteria and existing contact database. Provision server and configure Gmail API OAuth." },
  { period: "Weeks 2–3", phase: "Parser & Deduplication Build", tag: "Build", tagColor: "orange" as const, desc: "Build email parser, classifier, and deduplication logic. Connect to existing contact database. Run first test batch against historical spam backlog." },
  { period: "Week 4", phase: "Enrichment Pipeline", tag: "Build", tagColor: "orange" as const, desc: "Integrate Ahrefs API and Hunter/Apollo connectors. Build scoring algorithm with the client's input. Validate output quality against manual benchmarks." },
  { period: "Week 5", phase: "Digest & Parallel Testing", tag: "Testing", tagColor: "green" as const, desc: "Build Slack and email digest. Run automated system alongside manual review for one full week. Team compares outputs and surfaces scoring adjustments." },
  { period: "Week 6", phase: "Go-Live & Training", tag: "Go-Live", tagColor: "green" as const, desc: "Full deployment. Team switches from manual spam review to digest-only workflow. Written SOPs delivered for managing thresholds and scoring rules." },
  { period: "Months 3+", phase: "Ongoing Optimization", tag: "Ongoing", tagColor: "teal" as const, desc: "Score threshold tuning as outreach patterns shift. Additional data source integrations. CRM sync or outreach automation as next-phase scope." },
];

const phaseColorMap = {
  blue:   { circle: "bg-blue-600",   border: "border-l-blue-500",   badge: "bg-blue-50 text-blue-700 border-blue-200",     period: "text-blue-600" },
  orange: { circle: "bg-orange-500", border: "border-l-orange-400", badge: "bg-orange-50 text-orange-700 border-orange-200", period: "text-orange-600" },
  green:  { circle: "bg-green-600",  border: "border-l-green-500",  badge: "bg-green-50 text-green-700 border-green-200",   period: "text-green-700" },
  teal:   { circle: "bg-teal-600",   border: "border-l-teal-500",   badge: "bg-teal-50 text-teal-700 border-teal-200",     period: "text-teal-700" },
};

export default function DiamondLinksEmailPage() {
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
              <span className="text-blue-400">Email Intelligence</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold uppercase tracking-widest text-blue-400">
                Case Study
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-gray-400">
                SEO &amp; Link Building
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
              Spam Folder to Qualified Leads.
              <span className="block text-blue-400 mt-1">Automatically.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-8">
              A Texas-based SEO and link building agency was spending hours each week manually reviewing spam for inbound partnership and link exchange opportunities. We built a pipeline that monitors their inbox, deduplicates against their contact history, enriches every domain with Ahrefs and contact data, scores each lead, and delivers a ranked list to their team every morning.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "200+", label: "emails processed per week" },
                { metric: "6 wks", label: "discovery to go-live" },
                { metric: "0", label: "hours of manual spam review" },
                { metric: "100%", label: "client-owned infrastructure" },
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
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start relative">
              <div className="hidden md:flex absolute left-1/2 top-4 bottom-4 -translate-x-1/2 flex-col items-center justify-center pointer-events-none z-10">
                <div className="flex-1 w-px bg-gradient-to-b from-transparent via-gray-200 to-gray-200" />
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center my-3 shrink-0">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex-1 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
                  Before
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  The Problem
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The agency receives hundreds of inbound emails each week from site owners, agencies, and brokers pitching link exchanges and partnerships. Most of these land in spam. The team was manually opening their spam folder, scanning subject lines, copy-pasting domains into Ahrefs, and cross-checking against their own database to see if they had already engaged with a site.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The work was repetitive, slow, and inconsistent. Valuable opportunities were missed when someone was busy. Low-quality domains consumed time that could have gone to actual outreach.
                </p>
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <div className="text-sm font-bold text-red-800 mb-3">Current State at Intake</div>
                  <ul className="space-y-2">
                    {[
                      "Spam folder reviewed manually, 30 to 60 minutes per day",
                      "Domains hand-checked in Ahrefs one at a time",
                      "No deduplication against existing contact history",
                      "No consistent scoring or prioritization method",
                      "Opportunities missed when team members were out",
                      "Low-value emails consuming the same time as high-value ones",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-red-800">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 mb-4">
                  After
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  The Result
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The system runs continuously in the background. New spam emails are parsed, deduped against the contact database, enriched with Ahrefs domain metrics and contact data, and scored automatically. Every morning, the team receives a ranked digest of the day&apos;s qualified opportunities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The team no longer opens their spam folder. They review a short, prioritized list and respond directly. The pipeline runs on infrastructure Diamond Links owns.
                </p>
                <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <div className="text-sm font-bold text-green-800 mb-3">After Deployment</div>
                  <ul className="space-y-2">
                    {[
                      "Spam folder monitored automatically via Gmail API",
                      "Duplicate domains filtered before enrichment runs",
                      "Every domain enriched with DR, traffic, and contact data",
                      "Leads scored and ranked without manual input",
                      "Daily digest delivered to Slack and email each morning",
                      "Full contact history and lead log searchable at any time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-green-800">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                Eight components covering the full pipeline from inbox capture to scored lead delivery. Each runs independently and logs every action for a searchable history.
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

        {/* Technical Architecture */}
        <section className="py-16 sm:py-20 bg-gray-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                Technical Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                How It Works Under the Hood
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                The system runs on the client&apos;s own server. All credentials and API keys are stored in their environment. It operates without CalTech Web involvement.
              </p>
            </div>

            {/* Pipeline flow diagram */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/60 text-center mb-5">Email Intelligence Pipeline</p>
              <div className="flex items-start justify-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
                {[
                  { icon: Mail, label: "Email Arrives", sub: "Gmail spam folder" },
                  { icon: Filter, label: "Parsed & Typed", sub: "Classifier" },
                  { icon: Copy, label: "Deduped", sub: "Contact DB check" },
                  { icon: Search, label: "Enriched", sub: "Ahrefs + contact" },
                  { icon: Bell, label: "Digest Sent", sub: "Slack + email" },
                ].map(({ icon: Icon, label, sub }, i, arr) => (
                  <div key={label} className="flex items-center gap-1 sm:gap-2">
                    <div className="flex flex-col items-center gap-1.5 text-center w-20">
                      <div className="w-11 h-11 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-[11px] font-bold text-white leading-tight">{label}</span>
                      <span className="text-[10px] text-gray-500 leading-tight">{sub}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-blue-600/40 shrink-0 mb-5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {architecture.map(({ icon: Icon, layer, detail }) => (
                <div key={layer} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-48 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span className="font-bold text-white text-sm">{layer}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                Implementation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                6 Weeks from Kickoff to Full Go-Live
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-blue-100" aria-hidden="true" />
              <div className="space-y-3">
                {timeline.map(({ period, phase, tag, tagColor, desc }, index) => {
                  const colors = phaseColorMap[tagColor];
                  return (
                    <div key={period} className="flex gap-4 relative">
                      <div className="shrink-0 pt-0.5 z-10">
                        <div className={`w-9 h-9 rounded-full ${colors.circle} text-white text-sm font-extrabold flex items-center justify-center leading-none ring-4 ring-white`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className={`flex-1 min-w-0 bg-gray-50 rounded-2xl border border-gray-200 border-l-4 ${colors.border} p-5`}>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-xs font-bold uppercase tracking-widest ${colors.period}`}>{period}</span>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors.badge}`}>{tag}</span>
                        </div>
                        <div className="font-bold text-gray-900 mb-1">{phase}</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                  Investment
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  This Engagement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Email intelligence builds at this scope are priced as a one-time build fee plus a monthly retainer for scoring tuning, enrichment source updates, and pipeline expansion.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "Build Fee", value: "$14,000", sub: "Full pipeline, discovery through go-live" },
                    { icon: Shield, label: "Monthly Retainer", value: "$1,500/mo", sub: "Ongoing tuning and expansion" },
                  ].map(({ icon: Icon, label, value, sub }) => (
                    <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-0.5">{label}</div>
                        <div className="font-extrabold text-gray-900 text-2xl leading-tight">{value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700">Time Recovered</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    30 to 60 minutes of manual spam review eliminated per team member per day, redirected to actual outreach and client work.
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-extrabold text-green-700">5+ hrs</span>
                    <span className="text-sm text-green-600 font-semibold">per week recovered per team member</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Consistent lead quality regardless of team availability or workload</div>
                </div>
              </div>
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="font-extrabold text-xl mb-2">Is This Right for Your Team?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  This build is a strong fit for any agency or team that receives high volumes of inbound email across a single channel and wastes time sorting signal from noise before any real work begins.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "100+ inbound emails per week from a consistent source",
                    "Manual lookup step eating into productive time",
                    "Repeated outreach from the same contacts or domains",
                    "Team decisions based on domain quality metrics",
                    "Existing contact list or CRM to check against",
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
              Want to Build Something Like This?
            </h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-xl mx-auto">
              Every build starts with a 30-minute scoping call. Tell us the workflow, we&apos;ll tell you if it&apos;s a fit.
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
