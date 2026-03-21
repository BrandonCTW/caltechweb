import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Phone,
  Calendar,
  ChevronRight,
  FileText,
  Mail,
  Brain,
  GitMerge,
  AlertTriangle,
  Database,
  BookOpen,
  Shield,
  Clock,
  Server,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const whatWeBuilt = [
  {
    icon: Mail,
    title: "AP Inbox Monitoring",
    desc: "Automated polling of the AP email inbox. New invoices are captured and queued without any manual download, sorting, or intervention.",
  },
  {
    icon: Brain,
    title: "OCR & AI Data Extraction",
    desc: "AI-powered OCR processes each invoice, extracting vendor name, invoice number, date, line items, amounts, and PO references before ERP ingestion.",
  },
  {
    icon: FileText,
    title: "GL Coding Automation",
    desc: "Vendor coding rules automatically assign GL accounts, cost centers, and categories to each line item based on vendor identity and invoice patterns.",
  },
  {
    icon: GitMerge,
    title: "3-Way PO Matching",
    desc: "Each invoice is matched to the corresponding purchase order. For commodity vendors, quantities are cross-referenced against scale system records to verify weights.",
  },
  {
    icon: AlertTriangle,
    title: "Exception Routing",
    desc: "Invoices that fail coding, PO matching, or amount verification are flagged and routed to the right team member for manual review. Repeated exceptions trigger rule-building.",
  },
  {
    icon: Database,
    title: "ERP Integration",
    desc: "Processed invoices post directly to the ERP via EDI flat file ingestion. Browser automation handles post types not supported by the EDI profile.",
  },
  {
    icon: BookOpen,
    title: "Audit Trail & Logging",
    desc: "Every invoice action is logged with a timestamp and a traceable record. The finance team can review the full history of any invoice at any time.",
  },
  {
    icon: BookOpen,
    title: "Team Training & SOPs",
    desc: "Written SOPs and live walkthroughs for the AP team covering daily operations, exception handling, and escalation procedures.",
  },
];

const architecture = [
  {
    icon: Server,
    layer: "Cloud Server",
    detail: "AWS EC2. All processing, logging, and temporary storage runs here. The client owns all admin credentials.",
  },
  {
    icon: Clock,
    layer: "Processing Model",
    detail: "Cron-based job polling every 5 seconds. Each invoice spawns an independent agent session, allowing 100+ invoices to process simultaneously with no bottlenecks.",
  },
  {
    icon: GitMerge,
    layer: "ERP Integration",
    detail: "Primary: EDI flat file via data profile architecture. Fallback: browser automation for post types not covered by the EDI profile.",
  },
  {
    icon: Database,
    layer: "Scale System Connection",
    detail: "Automated extraction from the scale records system to cross-reference weights against commodity invoices, eliminating a manual lookup step.",
  },
  {
    icon: Shield,
    layer: "Data Ownership",
    detail: "All invoice data, logs, and extracted files are stored in the client's AWS environment. No data transits third-party AP platforms.",
  },
];

const timeline = [
  { period: "Weeks 1–2", phase: "Discovery & Access", desc: "Workflow audit with the AP team. Document all coding rules, PO structures, and ERP data profiles. Collect sample invoice sets. Provision AWS environment." },
  { period: "Weeks 3–5", phase: "Build: Phase A Vendors", desc: "Build inbox monitor, OCR pipeline, GL coding engine, and PO matching for the top-volume vendors (70% of weekly invoice load). Configure ERP connector and exception routing." },
  { period: "Weeks 6–8", phase: "Parallel Testing & Go-Live", desc: "Automated process runs alongside manual process using live invoices. AP team surfaces any errors. Buffer for edge cases and ERP integration adjustments." },
  { period: "Weeks 9–11", phase: "Build: Remaining Vendors", desc: "Extend automation to remaining vendors. Build cross-reference logic for variable-price invoice matching. Test in parallel with Phase A running live." },
  { period: "Week 12", phase: "Training & Full Go-Live", desc: "Full AP team training. Phase B go-live. Written SOPs and recorded walkthroughs delivered." },
  { period: "Months 4–9", phase: "Optimize & Expand", desc: "Ongoing exception rule-building, new vendor templates, and ERP refinements. Additional automations added as capacity frees up." },
];

export default function APAutomationPage() {
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
              <span className="text-blue-400">AP Automation</span>
            </nav>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-5">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
              AP Invoice Automation
              <span className="block text-blue-400 mt-1">700+ Invoices. Zero Manual Work.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-8">
              A West Coast manufacturing company was processing 700 to 800 invoices per week entirely by hand, with 5 to 6 team members touching every invoice before it posted to their ERP. We replaced that with an AI pipeline deployed in 12 weeks. The finance team now handles exceptions only.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "700–800", label: "invoices/week" },
                { metric: "5–6", label: "manual touchpoints eliminated" },
                { metric: "12 wks", label: "discovery to go-live" },
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
          </div>
        </section>

        {/* Before State */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
                  Before
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  The Problem
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The company&apos;s AP team received all invoices through a single email inbox. Each invoice required manual download, review, GL coding, PO matching against their ERP, and verification against scale records for commodity vendors. Five to six people touched every invoice before it posted.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At 700 to 800 invoices per week, the team was entirely consumed by data entry. They had no capacity to catch anomalies, audit vendor patterns, or handle finance work that required judgment.
                </p>
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <div className="text-sm font-bold text-red-800 mb-3">Current State at Intake</div>
                  <ul className="space-y-2">
                    {[
                      "700–800 invoices per week, all arriving via AP email inbox",
                      "5–6 manual touchpoints per invoice",
                      "GL coding done by hand from memory and reference sheets",
                      "PO matching required manual ERP lookup",
                      "Commodity vendors required cross-reference against scale records",
                      "Paper invoices required manual scanning and routing",
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
                  The AP pipeline monitors the inbox continuously and processes each invoice automatically. GL codes are applied by rule, POs are matched, quantities are verified, and the invoice posts to the ERP without any manual work. Exceptions are the only invoices the team touches.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The system runs on the client&apos;s own AWS infrastructure. They own all credentials, code, and configurations. It operates independently regardless of CalTech Web&apos;s involvement.
                </p>
                <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <div className="text-sm font-bold text-green-800 mb-3">After Deployment</div>
                  <ul className="space-y-2">
                    {[
                      "AP inbox monitored and processed automatically",
                      "GL coding applied by rules engine, no manual input",
                      "PO matching and quantity verification fully automated",
                      "Exceptions routed to the right person with full context",
                      "Every invoice action logged with a full audit trail",
                      "100+ invoices can process simultaneously, no bottlenecks",
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
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {whatWeBuilt.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
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
                The system runs entirely in the cloud. The client owns all credentials, logins, and access. If CalTech Web is unavailable, the system continues operating independently.
              </p>
            </div>

            {/* Pipeline flow diagram */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/60 text-center mb-5">Invoice Processing Pipeline</p>
              <div className="flex items-start justify-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
                {[
                  { icon: Mail, label: "Invoice Arrives", sub: "AP email inbox" },
                  { icon: Brain, label: "AI Extracts", sub: "OCR + data fields" },
                  { icon: FileText, label: "GL Coded", sub: "Rules engine" },
                  { icon: GitMerge, label: "PO Matched", sub: "3-way verify" },
                  { icon: Database, label: "ERP Posted", sub: "EDI flat file" },
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
                12 Weeks from Kickoff to Full Go-Live
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-blue-100" aria-hidden="true" />
              <div className="space-y-3">
                {timeline.map(({ period, phase, desc }, index) => (
                  <div key={period} className="flex gap-4 relative">
                    <div className="shrink-0 pt-0.5 z-10">
                      <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-extrabold flex items-center justify-center leading-none ring-4 ring-white">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 bg-gray-50 rounded-2xl border border-gray-200 p-5">
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-0.5">{period}</div>
                      <div className="font-bold text-gray-900 mb-1">{phase}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
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
                  AP automation at this scale is priced as a one-time build fee plus a monthly retainer for ongoing support, exception rule-building, and optimization.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "Build Fee", value: "$22,000", sub: "Full system, discovery through go-live" },
                    { icon: Shield, label: "Monthly Retainer", value: "$2,500/mo", sub: "6-month term, ongoing optimization" },
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
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700">Estimated Savings</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    Based on Fresno, CA market data: 4 AP staff freed from manual processing at an average fully loaded cost of $61,000/yr each (base salary ~$47K plus benefits and payroll taxes).
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-extrabold text-green-700">$244,000</span>
                    <span className="text-sm text-green-600 font-semibold">per year saved</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Net return in year one after build and retainer: <strong className="text-gray-700">~$207,000</strong></div>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Break-even Point</span>
                      <span className="text-sm font-extrabold text-green-700">~Month 2</span>
                    </div>
                    <div className="relative h-2 bg-green-100 rounded-full">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-green-400 rounded-l-full" style={{ width: "16.7%" }} />
                      <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-green-600 rounded-full shadow-sm" style={{ left: "calc(16.7% - 7px)" }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
                      <span>Project start</span>
                      <span>Month 12</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                  AWS infrastructure costs are included through the retainer period. Client receives all admin credentials and full system ownership at handoff.
                </p>
              </div>
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="font-extrabold text-xl mb-2">Is AP Automation Right for You?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  This solution is a strong fit if your team processes a high volume of invoices through a consistent channel (email, portal, or scanner) and the manual work is eating into finance headcount.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "100+ invoices per week, any volume",
                    "Invoices arrive by email or document scanner",
                    "Consistent vendor set with repeatable formats",
                    "ERP that accepts EDI flat files or has an API",
                    "Finance team spending significant time on data entry",
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
        <section className="py-16 sm:py-20 bg-blue-950 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
