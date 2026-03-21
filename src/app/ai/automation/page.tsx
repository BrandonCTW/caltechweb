import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Zap,
  FileText,
  Mail,
  BarChart3,
  Search,
  Settings,
  ChevronRight,
  Clock,
  Shield,
  LayoutDashboard,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const useCases = [
  {
    icon: FileText,
    title: "AP & Invoice Processing",
    desc: "Replace manual invoice handling with an AI pipeline that monitors your inbox, extracts data via OCR, codes to GL, matches POs, and posts to your ERP. Finance teams go from processing to exception review.",
    tags: ["OCR / AI", "ERP Integration", "3-Way Match"],
    link: "/ai/automation/ap-automation/",
    hasCase: true,
  },
  {
    icon: Search,
    title: "SEO Content Automation",
    desc: "AI-powered pipelines that research keywords, generate briefs, draft optimized content, and publish or queue for review. Built for agencies running content at scale.",
    tags: ["Content Generation", "Keyword Research", "Publishing"],
    link: null,
    hasCase: false,
  },
  {
    icon: Mail,
    title: "Email Triage & Enrichment",
    desc: "Turn a high-volume inbox into a ranked, enriched lead list. Sort, deduplicate against contact history, pull third-party data on every sender, score, and deliver a daily digest. Zero manual review.",
    tags: ["Classification", "Routing", "Draft Generation"],
    link: "/ai/automation/b2b-lead-enrichment/",
    hasCase: true,
  },
  {
    icon: LayoutDashboard,
    title: "Automated Client Reporting",
    desc: "SEO and marketing agencies replace manual reporting headcount with a custom dashboard. Pulls from GSC, Ahrefs, GA4, and more. Clients see live data. Your team stops building reports.",
    tags: ["SEO Agencies", "Live Data", "Zero Reporting Labor"],
    link: "/ai/automation/automated-client-reporting/",
    hasCase: true,
  },
  {
    icon: BarChart3,
    title: "Data Processing & Reporting",
    desc: "Turn multi-day spreadsheet jobs into automated pipelines. Pull from multiple sources, apply logic, and deliver clean reports on a schedule without any manual work.",
    tags: ["ETL", "Scheduled Jobs", "Multi-Source"],
    link: null,
    hasCase: false,
  },
  {
    icon: Settings,
    title: "Custom Workflow Automation",
    desc: "If your team touches the same data, files, or forms repeatedly, it can likely be automated. We scope the workflow, build the system, and deploy it on infrastructure you own.",
    tags: ["Custom", "Any Workflow"],
    link: null,
    hasCase: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We map your most expensive manual workflows and identify the highest-ROI automation target. Most clients have a clear winner within the first conversation.",
  },
  {
    num: "02",
    title: "Build",
    desc: "We build the system on your infrastructure. You get full access at every step. No black boxes.",
  },
  {
    num: "03",
    title: "Parallel Testing",
    desc: "The automated system runs alongside your existing process using real data. Your team reviews outputs before anything goes live.",
  },
  {
    num: "04",
    title: "Go-Live & Optimize",
    desc: "We flip the switch and stay on retainer to tune the system, add edge cases, and expand to additional workflows as capacity frees up.",
  },
];

export default function AutomationPage() {
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
            <nav className="flex items-center gap-1.5 text-xs text-blue-400/70 mb-6">
              <Link href="/ai/" className="hover:text-blue-400 transition-colors">AI Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-blue-400">Automation Builds</span>
            </nav>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-5">
              Done-for-You AI Automation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
              We Build the System.
              <span className="block text-blue-400 mt-1">You Own It Forever.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-4">
              Most AI consulting ends with a roadmap. Ours ends with a working system deployed in your business. We identify the manual process costing you the most in time or headcount, then build an AI pipeline to replace it.
            </p>
            <p className="text-base text-blue-200/60 mb-8 max-w-xl">
              All code, servers, and credentials are yours. If we part ways tomorrow, the system keeps running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/brandonctw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book a 30-Min Call
              </a>
              <Link
                href="/ai/automation/ap-automation/"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                See an Example Build
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12 text-sm text-blue-200/60">
              {[
                "Build fee + monthly retainer",
                "Cloud-hosted on your infrastructure",
                "12-week average deployment",
                "No vendor lock-in",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                What We Build
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Common Automation Targets
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                These are the workflows we get called about most. If yours isn&apos;t listed, it probably still qualifies.
              </p>
            </div>

            <div className="space-y-5">
              {useCases.map(({ icon: Icon, title, desc, tags, link, hasCase }) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                      {hasCase && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                          Case Study Available
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {link && (
                    <div className="sm:self-center shrink-0">
                      <Link
                        href={link}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 bg-gray-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                How Every Build Works
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="relative">
                  <div className="text-5xl font-extrabold text-blue-500/20 mb-3 leading-none">{num}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                  Investment Model
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Build Fee + Monthly Retainer
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every engagement is a one-time build fee to deploy the system, followed by a monthly retainer for ongoing optimization, edge case handling, and expansion. No surprise costs.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      label: "Build Fee",
                      value: "$10K&ndash;$25K",
                      sub: "Scoped to workflow complexity",
                    },
                    {
                      icon: Clock,
                      label: "Monthly Retainer",
                      value: "$1,500&ndash;$3,000/mo",
                      sub: "Ongoing tuning, expansion, and support",
                    },
                    {
                      icon: Shield,
                      label: "Timeline",
                      value: "8&ndash;12 weeks",
                      sub: "Discovery through go-live",
                    },
                  ].map(({ icon: Icon, label, value, sub }) => (
                    <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-0.5">{label}</div>
                        <div
                          className="font-extrabold text-gray-900 text-lg leading-tight"
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                        <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-950 text-white rounded-3xl p-8">
                <h3 className="font-extrabold text-xl mb-2">AP Automation</h3>
                <p className="text-gray-400 text-sm mb-6">
                  A recent engagement: a West Coast manufacturing company processing 700+ invoices per week manually. We automated the entire pipeline from inbox to ERP in 12 weeks.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { metric: "700+", desc: "invoices/week automated" },
                    { metric: "12 wks", desc: "discovery to go-live" },
                    { metric: "100%", desc: "client-owned infrastructure" },
                  ].map(({ metric, desc }) => (
                    <div key={desc} className="text-center">
                      <div className="text-2xl font-extrabold text-blue-400 leading-tight">{metric}</div>
                      <div className="text-[11px] text-gray-500 mt-1 leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ai/automation/ap-automation/"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-blue-500/40 text-blue-400 font-semibold text-sm hover:bg-blue-500/10 transition-colors"
                >
                  Read the Full Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-blue-950 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Stop Doing This Manually?
            </h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-xl mx-auto">
              Tell us the process. We&apos;ll tell you if it can be automated and what it would cost.
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
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Send a Message
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
