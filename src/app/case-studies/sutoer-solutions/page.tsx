import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Check,
  Quote,
  ChevronRight,
  Shield,
  ExternalLink,
  Database,
  Lock,
  Briefcase,
  Search,
  Sparkles,
  Star,
  Globe,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sutoer Solutions Case Study | Custom Job Database | CalTech Web",
  description:
    "How CalTech Web built a staffing website with a password-protected job database for Sutoer Solutions, a 25-year-old IT and finance staffing firm.",
  alternates: {
    canonical: "https://caltechweb.com/case-studies/sutoer-solutions/",
  },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/case-studies/sutoer-solutions/",
    siteName: "CalTech Web",
    title: "Sutoer Solutions Case Study | Custom Job Database | CalTech Web",
    description:
      "How CalTech Web built a modern staffing website with a password-protected job listings database for Sutoer Solutions.",
    images: [
      {
        url: "/portfolio/sutoer-solutions.png",
        width: 1280,
        height: 800,
        alt: "Sutoer Solutions website designed by CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutoer Solutions Case Study | Custom Job Database | CalTech Web",
    description:
      "How CalTech Web built a modern staffing website with a password-protected job listings database for Sutoer Solutions.",
    images: ["/portfolio/sutoer-solutions.png"],
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/case-studies/"
            className="hover:text-white transition-colors"
          >
            Case Studies
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/90">Sutoer Solutions</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-amber-300 mb-6">
              <Briefcase className="w-4 h-4" />
              Staffing Industry Case Study
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              A Custom Job Database.{" "}
              <span className="text-amber-400">Password Protected.</span>{" "}
              Built for Recruiters.
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              How CalTech Web rebuilt Sutoer Solutions&apos; digital presence
              with a clean staffing website and a custom-built job listings
              database that the team can manage themselves, no developer
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/web-design-pricing/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white font-bold text-base hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
              >
                Get Results Like This
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://sutoer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </a>
            </div>
          </div>

          <a
            href="https://sutoer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-gray-800 block hover:border-white/30 transition-colors"
          >
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 bg-gray-700 rounded-lg h-7 px-3 flex items-center gap-2">
                <Shield className="w-3 h-3 text-green-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium">
                  sutoer.com
                </span>
                <ExternalLink className="w-3 h-3 text-gray-500 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/portfolio/sutoer-solutions.png"
                alt="Sutoer Solutions website designed by CalTech Web"
                width={1280}
                height={800}
                priority
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 font-bold text-sm shadow-lg">
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────

const results = [
  {
    stat: "25+",
    label: "Years in Business",
    description: "Established IT and finance staffing firm, modernized",
    Icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    stat: "Custom",
    label: "Job Database",
    description: "Password-protected backend built from scratch",
    Icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    stat: "8+",
    label: "Active Listings",
    description: "Live job postings across IT, finance, and marketing",
    Icon: Briefcase,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    stat: "0",
    label: "Developer Needed",
    description: "Client manages all job listings independently",
    Icon: Zap,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

function Results() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-sm font-semibold text-amber-700 mb-4">
            <Sparkles className="w-4 h-4" />
            What We Delivered
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Built to Last. Built to Self-Manage.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map(({ stat, label, description, Icon, color, bg }) => (
            <div
              key={label}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mx-auto mb-4`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className={`text-3xl lg:text-4xl font-extrabold ${color} mb-1`}>
                {stat}
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">{label}</div>
              <div className="text-xs text-gray-500">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Challenge & Solution ─────────────────────────────────────────────────────

function ChallengeAndSolution() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700 uppercase tracking-wider mb-6">
              The Challenge
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              An Established Firm with an Outdated Process
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sutoer Solutions has been placing IT, finance, and marketing
              professionals since 1997. But their online presence hadn&apos;t
              kept pace. Job openings were hard to manage and the site didn&apos;t
              reflect the caliber of clients they serve.
            </p>
            <ul className="space-y-3">
              {[
                "No way to publish or update job listings without a developer",
                "Outdated website design that didn't match the brand",
                "Job seekers had no searchable, filterable listing page",
                "No secure backend for internal team to manage postings",
                "Manual process for adding job descriptions and requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-6">
              The Solution
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              A Modern Site with a Custom-Built Job Database
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              CalTech Web rebuilt Sutoer&apos;s site from the ground up and
              custom-built a password-protected admin portal. The team can now
              add, edit, and remove job listings in minutes without touching
              code or calling a developer.
            </p>
            <ul className="space-y-3">
              {[
                "Custom job listings database with a dedicated backend",
                "Password-protected admin portal for internal team use",
                "Searchable and filterable public-facing jobs page",
                "Separate free database account for long-term scalability",
                "Full job details: title, location, type, category, overview, responsibilities, and requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Admin Showcase ───────────────────────────────────────────────────────────

function AdminShowcase() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700 mb-4">
            <Lock className="w-4 h-4" />
            Password-Protected Admin Portal
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Simple Enough for Anyone on the Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We designed the backend with non-technical users in mind. Logging
            in, adding a job, and making edits takes less than two minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Login */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex-1">
              <div className="bg-gray-800 rounded-xl overflow-hidden mb-4">
                <div className="px-3 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-gray-400">sutoer.com/login</span>
                </div>
                <Image
                  src="/case-studies/sutoer/admin-login.png"
                  alt="Sutoer admin login screen"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">1</div>
                <h3 className="font-bold text-gray-900">Secure Login</h3>
              </div>
              <p className="text-sm text-gray-500 pl-8">
                A clean, branded login page protects the backend from public access.
              </p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex-1">
              <div className="bg-gray-800 rounded-xl overflow-hidden mb-4">
                <div className="px-3 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-gray-400">sutoer.com/admin</span>
                </div>
                <Image
                  src="/case-studies/sutoer/admin-dashboard.png"
                  alt="Sutoer admin dashboard showing job listings"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">2</div>
                <h3 className="font-bold text-gray-900">Dashboard Overview</h3>
              </div>
              <p className="text-sm text-gray-500 pl-8">
                All active job listings are visible at a glance. Edit or delete any posting in one click.
              </p>
            </div>
          </div>

          {/* Add/Edit */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex-1">
              <div className="bg-gray-800 rounded-xl overflow-hidden mb-4">
                <div className="px-3 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-gray-400">sutoer.com/admin/edit</span>
                </div>
                <Image
                  src="/case-studies/sutoer/admin-edit-job.png"
                  alt="Sutoer admin edit job form"
                  width={800}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">3</div>
                <h3 className="font-bold text-gray-900">Add or Edit Any Job</h3>
              </div>
              <p className="text-sm text-gray-500 pl-8">
                A simple form captures everything: title, location, type, category, overview, responsibilities, and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Password-Protected Backend",
    description:
      "A dedicated admin portal secured by login credentials, keeping job management tools completely private from the public.",
    Icon: Lock,
  },
  {
    title: "Live Job Listings Database",
    description:
      "A real database powers the jobs page, so postings are dynamic, searchable, and always up to date without any manual HTML edits.",
    Icon: Database,
  },
  {
    title: "Searchable Jobs Page",
    description:
      "Job seekers can filter open roles by category (IT, Finance, Marketing) and type (Full-Time, Contract) in real time.",
    Icon: Search,
  },
  {
    title: "Full Job Details",
    description:
      "Every posting includes a title, location, job type, category, short description, full overview, responsibilities list, and requirements.",
    Icon: Briefcase,
  },
  {
    title: "Scalable Free Database",
    description:
      "We set up the database under a free-tier account so Sutoer can scale their listings without ongoing database costs.",
    Icon: Globe,
  },
  {
    title: "Modern Brand Redesign",
    description:
      "A bold dark-and-gold design reflects Sutoer&apos;s 25-year reputation, with a clean layout built for both employers and job seekers.",
    Icon: Sparkles,
  },
];

function Features() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            What We Built
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Every feature below is included in the $99/month plan, with no
            add-ons, no upsells, and no surprise invoices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────────────────

function Testimonial() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-amber-400/30 mx-auto mb-6" />

        <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-white/95">
          &quot;The admin system CalTech Web built for us is exactly what we
          needed. We can add a new job opening in minutes without ever calling a
          developer. It&apos;s simple, clean, and works perfectly for our team.&quot;
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="text-left">
            <div className="font-bold text-lg">Sutoer Solutions</div>
            <div className="text-amber-300 text-sm">
              IT, Finance & Marketing Staffing — Hinsdale, IL
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why CalTech Web ──────────────────────────────────────────────────────────

const whyReasons = [
  "Custom design with no templates or cookie-cutter layouts",
  "Hosting, SSL, and domain included",
  "Unlimited updates and content changes",
  "Custom databases, portals, and integrations",
  "5-7 day average launch time",
  "93% of updates completed in under 1 hour",
  "Money-back guarantee",
  "No contracts, cancel anytime",
];

function WhyCalTechWeb() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-sm font-semibold text-amber-700 mb-4">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              800+ websites managed
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Your Business Needs a Website That Works as Hard as You Do
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you need a job board, a client portal, a booking system,
              or a simple contact page, CalTech Web builds it all into one flat
              monthly fee. No per-feature pricing. No hourly billing. Just
              results.
            </p>
            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white font-bold text-base hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
            >
              See Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {whyReasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 border border-gray-200"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── More Case Studies ────────────────────────────────────────────────────────

const moreCaseStudies = [
  {
    name: "Madera County Farm Bureau",
    category: "Non-Profit",
    stat: "+55% traffic",
    href: "/case-studies/madera-county-farm-bureau/",
    image: "/portfolio/madera-county-farm-bureau.png",
  },
  {
    name: "Dr. Arjun Kanuri",
    category: "Medical",
    stat: "+40% traffic",
    href: "/case-studies/medical-practice-website-design/",
    image: "/portfolio/arjun-kanuri.png",
  },
];

function MoreCaseStudies() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            More Success Stories
          </h2>
          <p className="text-gray-500">
            Join 800+ businesses growing with CalTech Web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {moreCaseStudies.map((cs) => (
            <Link
              key={cs.href}
              href={cs.href}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={cs.image}
                  alt={`${cs.name} website`}
                  width={600}
                  height={375}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-amber-600 mb-1">
                  {cs.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {cs.name}
                </h3>
                <div className="text-sm text-gray-500">{cs.stat}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
          Ready for a Custom Solution Like Sutoer&apos;s?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Tell us what you need and we&apos;ll build it. Custom portals,
          databases, booking systems, and more, all included in one flat fee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-base hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call (559) 282-3075
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          Not happy? Get a refund and keep your website. That&apos;s
          Brandon&apos;s personal guarantee.
        </p>
      </div>
    </section>
  );
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How CalTech Web Built a Custom Job Database for Sutoer Solutions",
  description:
    "Case study: CalTech Web rebuilt the Sutoer Solutions website and custom-built a password-protected job listings database for the 25-year-old staffing firm.",
  image: {
    "@type": "ImageObject",
    url: "https://caltechweb.com/portfolio/sutoer-solutions.png",
    width: 1280,
    height: 800,
  },
  datePublished: "2026-03-06",
  dateModified: "2026-03-06",
  url: "https://caltechweb.com/case-studies/sutoer-solutions/",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://caltechweb.com/case-studies/sutoer-solutions/",
  },
  author: {
    "@type": "Person",
    name: "Brandon Hopkins",
    url: "https://caltechweb.com/brandon-hopkins/",
  },
  publisher: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
    logo: {
      "@type": "ImageObject",
      url: "https://caltechweb.com/logo.png",
      width: 1520,
      height: 512,
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://caltechweb.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: "https://caltechweb.com/case-studies/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sutoer Solutions Case Study",
      item: "https://caltechweb.com/case-studies/sutoer-solutions/",
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SutoerSolutionsCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudyJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <Header />
      <Hero />
      <Results />
      <ChallengeAndSolution />
      <AdminShowcase />
      <Features />
      <Testimonial />
      <WhyCalTechWeb />
      <MoreCaseStudies />
      <FinalCTA />
      <Footer />
    </>
  );
}
