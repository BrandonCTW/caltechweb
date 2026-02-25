import type { Metadata } from "next";
import {
  Check,
  Phone,
  Star,
  ArrowRight,
  Globe,
  Clock,
  Shield,
  Heart,
  Award,
  Users,
  MessageSquare,
  Zap,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Brandon Hopkins - Founder of CalTech Web | $99/month Web Design",
  description:
    "Meet Brandon Hopkins, founder of CalTech Web. Helping small businesses, churches, and non-profits get professional websites for just $99/month - with fast support and a personal guarantee.",
  alternates: { canonical: "https://caltechweb.com/brandon-hopkins/" },
  openGraph: {
    title: "About Brandon Hopkins - Founder of CalTech Web",
    description:
      "Brandon Hopkins built CalTech Web to give small businesses access to professional web design without the big-agency price tag. $99/month, 800+ sites, and counting.",
    url: "https://caltechweb.com/brandon-hopkins/",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brandon Hopkins",
  jobTitle: "Founder & Web Designer",
  worksFor: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
  },
  telephone: "+15592823075",
  email: "Brandon@CalTechWeb.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  description:
    "Brandon Hopkins is the founder of CalTech Web, an affordable web design company serving small businesses, churches, and non-profits nationwide for $99/month.",
  knowsAbout: [
    "Web Design",
    "Website Hosting",
    "Small Business Websites",
    "Church Websites",
    "Non-Profit Websites",
    "SEO",
  ],
};

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const links = [
    { label: "Portfolio", href: "/web-design-portfolio/" },
    { label: "Pricing", href: "/web-design-pricing/" },
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/brandon-hopkins/" },
    { label: "Church Websites", href: "/affordable-church-websites/" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                href === "/brandon-hopkins/"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5592823075"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
          <Link
            href="/web-design-pricing"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Avatar / photo placeholder */}
          <div className="shrink-0">
            <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-blue-400/40 shadow-2xl" />
          </div>

          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-5">
              <Heart className="w-4 h-4 text-red-400" />
              California-based, serving clients nationwide
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Hi, I&apos;m Brandon Hopkins
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-6 leading-relaxed max-w-2xl">
              I started CalTech Web because great websites shouldn&apos;t cost a
              fortune. For <strong className="text-white">$99/month</strong>,
              your small business, church, or non-profit gets a custom
              professional website - with hosting, unlimited updates, and fast
              personal support from me directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/web-design-pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Get My Website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:5592823075"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (559) 282-3075
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { icon: Globe, value: "800+", label: "Websites Managed" },
  { icon: Clock, value: "93%", label: "Updates Done in <1 Hour" },
  { icon: MessageSquare, value: "5,000+", label: "Support Tickets Closed" },
  { icon: Zap, value: "5–7 Days", label: "Average Launch Time" },
];

function Stats() {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 mb-3">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 leading-none mb-1">
                {value}
              </div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────

function Story() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why I Built CalTech Web
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The real story behind a $99/month website company.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Early in my career I saw the same story play out over and over: a
            small business owner, a pastor, or a non-profit director would come
            to me frustrated. They&apos;d paid $3,000–$5,000 for a website that
            looked dated six months later. Simple text changes cost $150 a pop.
            Their developer ghosted them. Their hosting was mysteriously $80 a
            month on top of everything else.
          </p>

          <p>
            I knew there was a better way. I built CalTech Web around one idea:{" "}
            <strong>what if a client never had to worry about their website again?</strong>{" "}
            One flat monthly fee - no surprise bills, no waiting days for
            updates, no wondering if the site is actually being maintained.
          </p>

          <p>
            Today we manage <strong>800+ websites</strong> for small businesses,
            churches, and non-profits across the country. My team closes{" "}
            <strong>93% of support requests in under an hour</strong>. We get
            new sites live in <strong>5–7 business days</strong>. And every
            client has my personal email and cell number.
          </p>

          <p>
            That&apos;s not something you&apos;ll get from a big agency. It&apos;s the CalTech
            Web difference - and I&apos;m proud of it every single day.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Values ───────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Heart,
    title: "Clients First - Always",
    description:
      "I built this company around one principle: if you're not 100% happy, you get your money back and keep the website. No hoops. No hassle.",
  },
  {
    icon: Clock,
    title: "Speed You Can Count On",
    description:
      "93% of update requests are completed in under an hour. When you need something changed, you shouldn't have to wait days.",
  },
  {
    icon: Shield,
    title: "Total Transparency",
    description:
      "One flat $99/month fee. No setup costs, no hidden hosting fees, no \"add-ons.\" Everything your website needs, covered.",
  },
  {
    icon: Users,
    title: "Personal Relationship",
    description:
      "You're not a ticket number. You get my direct email and number. If something's not right, you reach me - not a call center.",
  },
  {
    icon: Award,
    title: "Quality You're Proud Of",
    description:
      "Every site we build is custom-designed, mobile-responsive, and built to convert visitors into customers, members, or donors.",
  },
  {
    icon: Globe,
    title: "Your Website Grows With You",
    description:
      "Free redesigns whenever you want a fresh look. Your site never gets stale because we're always here to keep it updated.",
  },
];

function Values() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What I Stand For
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            These aren&apos;t buzzwords - they&apos;re how CalTech Web operates every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 mb-4">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
    name: "Dr. Arjun Kanuri, MD, MBA",
    title: "Plastic & Reconstructive Surgeon",
    result: "40% traffic increase · 2× conversions · 9-year client",
  },
  {
    quote:
      "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    name: "Christina Beckstead",
    title: "Executive Director, Madera County Farm Bureau",
    result: "55% traffic increase · 1,000+ pages · 3-year client",
  },
  {
    quote:
      "Managing my church website and personal ministry website was a significant time commitment, taking up at least 3 hours of my week. Since I enlisted the help of CalTech Web, their services have been invaluable, saving me precious time that I can now devote to furthering my ministry.",
    name: "Bryan Newberry",
    title: "Pastor, Calvary Chapel Los Alamitos",
    result: "Saves 3+ hours per week · Multi-year client",
  },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Clients Say About Working With Me
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real stories from small businesses, churches, and non-profits across
            the country.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, title, result }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-900 text-sm">{name}</div>
                <div className="text-xs text-gray-500 mb-2">{title}</div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-700">
                  <Check className="w-3 h-3" />
                  {result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guarantee ────────────────────────────────────────────────────────────────

function Guarantee() {
  return (
    <section className="py-16 sm:py-20 bg-blue-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
          <Shield className="w-8 h-8 text-green-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Brandon&apos;s Personal Guarantee
        </h2>

        <p className="text-lg text-blue-100 mb-6 leading-relaxed">
          If you&apos;re not completely satisfied with your new website, I&apos;ll give
          you a <strong className="text-white">full refund</strong> - and{" "}
          <strong className="text-white">you keep the website.</strong> No
          arguments. No fine print. That&apos;s my word.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
          {[
            "No long-term contracts",
            "Cancel anytime",
            "Keep your site if you leave",
            "Full refund if unsatisfied",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-100"
            >
              <Check className="w-3.5 h-3.5 text-green-400" />
              {item}
            </span>
          ))}
        </div>

        <Link
          href="/web-design-pricing"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
        >
          Get My Website
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="mt-4 text-sm text-blue-300">
          Or call me directly:{" "}
          <a
            href="tel:5592823075"
            className="text-white font-semibold hover:underline"
          >
            (559) 282-3075
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="tel:5592823075"
                className="hover:text-white transition-colors"
              >
                (559) 282-3075
              </a>
              <a
                href="mailto:Brandon@CalTechWeb.com"
                className="hover:text-white transition-colors"
              >
                Brandon@CalTechWeb.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Design",
                "Website Hosting",
                "Monthly Updates",
                "Free Redesigns",
                "SEO Basics",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-pricing/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Small Businesses",
                "Church Websites",
                "Non-Profits",
                "Healthcare",
                "Real Estate",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-portfolio/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Brandon", href: "/brandon-hopkins/" },
                { label: "Portfolio", href: "/web-design-portfolio/" },
                { label: "Blog", href: "/blog/" },
                { label: "Get My Website", href: "/get-a-free-instant-quote/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} CalTech Web. All rights reserved.
            California-based, serving clients nationwide.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────────────────

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
          <Link
            href="/web-design-pricing"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Get My Website
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <Stats />
        <Story />
        <Values />
        <Testimonials />
        <Guarantee />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
