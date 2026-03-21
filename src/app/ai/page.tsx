import { ArrowRight, Bot, Brain, CheckCircle, Calendar, Zap, BarChart3, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AIHubPage() {
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-5">
              CalTech Web AI Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
              AI That Ships.
              <span className="block text-blue-400 mt-1">Not Slide Decks.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-8">
              We help small and mid-size businesses put AI to work in two ways: done-for-you automation builds that replace your most expensive manual processes, and hands-on AI strategy consulting for companies that need an expert in their corner.
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
                href="/ai/automation/"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Automation Builds
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12 text-sm text-blue-200/60">
              {[
                "20 Years Digital Strategy",
                "800+ Businesses Served",
                "Real Builds, Not Proposals",
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

        {/* Two Tracks */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                Two Ways to Work Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Pick the Track That Fits Your Problem
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Both paths lead to real AI working in your business. The difference is how you want to get there.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Track 1: Automation Builds */}
              <div className="bg-gray-950 text-white rounded-3xl overflow-hidden flex flex-col">
                <div className="p-8 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
                    Track 1
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    AI Automation Builds
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    We identify the manual process costing you the most in time or headcount and build a custom AI system to replace it. You own everything we build.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Done-for-you build, fully deployed",
                      "You own the code, server, and credentials",
                      "Build fee + monthly optimization retainer",
                      "AP automation, SEO workflows, email triage, and more",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-500 mb-6">
                    <span className="text-white font-semibold">Typical engagement:</span> $10K&ndash;$25K build + $1,500&ndash;$3,000/mo retainer
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href="/ai/automation/"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors"
                  >
                    Explore Automation Builds
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Track 2: AI Consulting */}
              <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden flex flex-col">
                <div className="p-8 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
                    Track 2
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    AI Strategy Consulting
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Brandon Hopkins works directly with your leadership team on AI strategy, tool selection, and implementation. A hands-on advisor embedded in your business, not a vendor.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "6-12 month contracts, 1-2 clients at a time",
                      "AI readiness assessment to start",
                      "Tool selection, team training, and governance",
                      "Results in 60-90 days, not 6 months",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-500 mb-6">
                    <span className="text-gray-900 font-semibold">Starting at:</span> $5,500/mo remote &nbsp;&middot;&nbsp; $8,000/mo local (Fresno / Central Valley)
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href="/ai-consultant/"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors"
                  >
                    Learn About Consulting
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why CalTech Web */}
        <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Why Companies Choose CalTech Web for AI
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "We Build, Not Advise",
                  desc: "Every engagement ends with working software deployed in your business.",
                },
                {
                  icon: BarChart3,
                  title: "ROI First",
                  desc: "We target the manual processes with the highest cost and clearest automation path.",
                },
                {
                  icon: Clock,
                  title: "You Own Everything",
                  desc: "All code, credentials, and infrastructure are yours. No lock-in.",
                },
                {
                  icon: Brain,
                  title: "20 Years of Context",
                  desc: "Not a tool reseller. Brandon has built, grown, and exited digital businesses.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-blue-950 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Not Sure Which Track Is Right?
            </h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-xl mx-auto">
              A 30-minute call is enough to point you in the right direction. No sales pitch.
            </p>
            <a
              href="https://calendly.com/brandonctw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book a 30-Min Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
