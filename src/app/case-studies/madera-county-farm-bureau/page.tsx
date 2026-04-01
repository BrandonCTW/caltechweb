import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Star,
  Check,
  Quote,
  TrendingUp,
  Users,
  FileText,
  Clock,
  Shield,
  Wheat,
  ChevronRight,
  Sparkles,
  CreditCard,
  Trophy,
  Globe,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Madera County Farm Bureau | +55% Traffic | CalTech Web",
  description:
    "See how CalTech Web helped Madera County Farm Bureau grow traffic by 55%, build 1,000+ pages, and streamline membership management, all for $99/month.",
  alternates: {
    canonical:
      "https://caltechweb.com/case-studies/madera-county-farm-bureau/",
  },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/case-studies/madera-county-farm-bureau/",
    siteName: "CalTech Web",
    title:
      "Madera County Farm Bureau | +55% Traffic | CalTech Web",
    description:
      "See how CalTech Web helped Madera County Farm Bureau grow traffic by 55%, build 1,000+ pages, and streamline membership management, all for $99/month.",
    images: [
      {
        url: "/portfolio/madera-county-farm-bureau.png",
        width: 1200,
        height: 800,
        alt: "Madera County Farm Bureau website designed by CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Madera County Farm Bureau Case Study | 55% Traffic Increase",
    description:
      "See how CalTech Web helped Madera County Farm Bureau grow traffic by 55% and build 1,000+ pages, all for $99/month.",
    images: ["/portfolio/madera-county-farm-bureau.png"],
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/web-design-portfolio/"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/90">Case Study</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-emerald-200 mb-6">
              <Wheat className="w-4 h-4" />
              Non-Profit Case Study
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              55% More Traffic.{" "}
              <span className="text-emerald-300">1,000+ Pages.</span>{" "}
              $99/month.
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              How CalTech Web helped the Madera County Farm Bureau transform
              their online presence with membership management, a scholarship
              system, and payment processing, all included in one flat fee.
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
                href="https://maderafb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </a>
            </div>
          </div>

          {/* Right: Screenshot */}
          <a
            href="https://maderafb.com"
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
                  maderafb.com
                </span>
                <ExternalLink className="w-3 h-3 text-gray-500 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/portfolio/madera-county-farm-bureau.png"
                alt="Madera County Farm Bureau website designed by CalTech Web"
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
    stat: "+55%",
    label: "Traffic Increase",
    description: "Website traffic growth after launch",
    Icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    stat: "1,000+",
    label: "Pages Built",
    description: "Comprehensive content covering all programs",
    Icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    stat: "3 yrs",
    label: "Client Since",
    description: "Ongoing partnership and support",
    Icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    stat: "$99/mo",
    label: "Total Cost",
    description: "Everything included, no hidden fees",
    Icon: CreditCard,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

function Results() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-semibold text-emerald-700 mb-4">
            <Sparkles className="w-4 h-4" />
            The Results
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Real Numbers, Real Growth
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
              <div className="text-sm font-bold text-gray-900 mb-1">
                {label}
              </div>
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
          {/* Challenge */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700 uppercase tracking-wider mb-6">
              The Challenge
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              An Organization That Outgrew Its Website
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Madera County Farm Bureau is a vital agricultural
              organization serving farmers, ranchers, and rural communities
              across Madera County, California. As the organization grew, their
              website could no longer keep up with their needs.
            </p>
            <ul className="space-y-3">
              {[
                "No way to manage memberships online",
                "Scholarship applications required manual processing",
                "Payment collection was handled offline",
                "Image copyright issues on the existing site",
                "Content was scattered and hard to navigate",
                "No integration with social media channels",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-6">
              The Solution
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              A Complete Digital Transformation for $99/month
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              CalTech Web built a comprehensive 1,000+ page website that
              handles everything the Farm Bureau needs, from membership
              management to scholarship applications, and resolved their
              image copyright issues along the way.
            </p>
            <ul className="space-y-3">
              {[
                "Scholarship application system built from scratch",
                "Online membership management portal",
                "Payment processing for dues and events",
                "Raffle and fundraising page integration",
                "Social media feeds embedded site-wide",
                "Image copyright issue fully resolved",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check
                      className="w-3 h-3 text-emerald-600"
                      strokeWidth={3}
                    />
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

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Scholarship System",
    description:
      "Custom-built application portal that lets students apply for Farm Bureau scholarships online, with automated submission tracking.",
    Icon: Trophy,
  },
  {
    title: "Membership Portal",
    description:
      "Online membership management where members can join, renew, and update their information without manual paperwork.",
    Icon: Users,
  },
  {
    title: "Payment Processing",
    description:
      "Integrated payment collection for membership dues, event fees, and raffle tickets, all processed securely online.",
    Icon: CreditCard,
  },
  {
    title: "Event Calendar",
    description:
      "Dynamic event calendar with registration capabilities, keeping members informed and engaged with Farm Bureau activities.",
    Icon: Clock,
  },
  {
    title: "Resource Library",
    description:
      "Extensive library of agricultural resources, policy updates, and member benefits organized for easy access.",
    Icon: FileText,
  },
  {
    title: "Social Media Integration",
    description:
      "Live social media feeds embedded throughout the site, connecting the website with the Farm Bureau's active social channels.",
    Icon: Globe,
  },
];

function Features() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            What We Built
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Every feature below is included in the $99/month plan, with no add-ons,
            no upsells, and no surprise invoices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-emerald-600" />
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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-700 to-emerald-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-emerald-300/30 mx-auto mb-6" />

        <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-white/95">
          &quot;CalTech Web helped us with our domain, new website, and even
          solved a situation with image copyright! I highly recommend them for
          all nonprofit organization websites.&quot;
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <Image src="/testimonials/christina-beckstead.jpg" alt="Christina Beckstead" width={56} height={56} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-400/50" />
          <div className="text-left">
            <div className="font-bold text-lg">Christina Beckstead</div>
            <div className="text-emerald-200 text-sm">
              Executive Director, Madera County Farm Bureau
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
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
  "Scholarship systems, membership portals, payment processing",
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
              Your Non-Profit Deserves a Website That Works as Hard as You Do
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you need membership management, event registration,
              donation processing, or a scholarship portal, CalTech Web builds
              it all into one flat monthly fee. No per-feature pricing. No
              hourly billing. Just results.
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
                  <Check
                    className="w-3 h-3 text-emerald-600"
                    strokeWidth={3}
                  />
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
    name: "Dr. Arjun Kanuri",
    category: "Medical",
    stat: "+40% traffic",
    slug: "dr-arjun-kanuri",
    image: "/portfolio/arjun-kanuri.png",
  },
  {
    name: "Calvary Chapel Los Alamitos",
    category: "Church",
    stat: "3+ hrs/week saved",
    slug: "calvary-chapel-los-alamitos",
    image: "/portfolio/calvary-chapel-los-alamitos.png",
  },
  {
    name: "ALV Floors",
    category: "Contractor",
    stat: "Steady lead flow",
    slug: "alv-floors",
    image: "/portfolio/alv-floors-after.png",
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

        <div className="grid md:grid-cols-3 gap-6">
          {moreCaseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/portfolio/${cs.slug}/`}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={cs.image}
                  alt={`${cs.name} website designed by CalTech Web`}
                  width={600}
                  height={375}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-emerald-600 mb-1">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
          Ready for Results Like the Farm Bureau?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Tell us about your organization and we&apos;ll get started on your
          website. Custom design, hosting, and support, all for $99/month.
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
    "How Madera County Farm Bureau Grew Traffic 55% with a $99/month Website",
  description:
    "Case study: CalTech Web helped Madera County Farm Bureau build 1,000+ pages, integrate membership management, and increase traffic by 55%.",
  image: {
    "@type": "ImageObject",
    url: "https://caltechweb.com/portfolio/madera-county-farm-bureau.png",
    width: 1200,
    height: 800,
  },
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  url: "https://caltechweb.com/case-studies/madera-county-farm-bureau/",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://caltechweb.com/case-studies/madera-county-farm-bureau/",
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
      name: "Portfolio",
      item: "https://caltechweb.com/web-design-portfolio/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Madera County Farm Bureau Case Study",
      item: "https://caltechweb.com/case-studies/madera-county-farm-bureau/",
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaderaCountyFarmBureauCaseStudy() {
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
      <Features />
      <Testimonial />
      <WhyCalTechWeb />
      <MoreCaseStudies />
      <FinalCTA />
      <Footer />
    </>
  );
}
