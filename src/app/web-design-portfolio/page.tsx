import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Globe,
  Star,
  Check,
  ExternalLink,
  Quote,
  Building2,
  Heart,
  Briefcase,
  Utensils,
  Stethoscope,
  ChevronRight,
  Shield,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Portfolio - 800+ Sites Built | CalTech Web",
  description:
    "Browse our portfolio of 800+ websites built for small businesses, churches, non-profits, restaurants, and medical practices - all for just $99/month.",
  alternates: { canonical: "https://caltechweb.com/web-design-portfolio/" },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/web-design-portfolio/",
    siteName: "CalTech Web",
    title: "Web Design Portfolio - 800+ Sites Built | CalTech Web",
    description:
      "Browse our portfolio of 800+ websites built for small businesses, churches, non-profits, restaurants, and medical practices - all for just $99/month.",
    images: [
      {
        url: "/portfolio/arjun-kanuri.png",
        width: 1200,
        height: 630,
        alt: "CalTech Web Portfolio - Professional websites for small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Portfolio - 800+ Sites Built | CalTech Web",
    description:
      "Browse our portfolio of 800+ websites built for small businesses, churches, non-profits, restaurants, and medical practices - all for just $99/month.",
    images: ["/portfolio/arjun-kanuri.png"],
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-sm font-semibold text-amber-300 mb-6">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          800+ websites designed &amp; managed nationwide
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Real Websites for{" "}
          <span className="text-amber-400">Real Businesses</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Every site below was built for{" "}
          <span className="font-bold text-amber-300">$99/month</span> - custom
          design, hosting, unlimited updates, and fast support all included.
          No templates. No cookie-cutter layouts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white font-bold text-base hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Category Filter ──────────────────────────────────────────────────────────

const categories = [
  { label: "All", icon: Globe },
  { label: "Small Business", icon: Briefcase },
  { label: "Church", icon: Heart },
  { label: "Non-Profit", icon: Heart },
  { label: "Restaurant", icon: Utensils },
  { label: "Medical", icon: Stethoscope },
  { label: "Contractor", icon: Building2 },
];

function CategoryBar() {
  return (
    <section className="border-b border-white/10 bg-gray-900/95 backdrop-blur-md sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                i === 0
                  ? "bg-amber-500 text-white"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Items ──────────────────────────────────────────────────────────

type PortfolioItem = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  screenshot: string;
  website: string;
  caseStudySlug?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    name: "Arjun Kanuri, MD",
    category: "Medical",
    description:
      "A full redesign for a plastic & reconstructive surgery practice serving the DC, Maryland, and Virginia area. The site features a trust-building layout with before/after galleries, patient booking, and mobile-first design.",
    highlights: [
      "Before & after photo gallery",
      "Online appointment booking",
      "Mobile-optimized for patients on the go",
      "SEO-optimized service pages",
      "Fast-loading, hosted & secured by CalTech",
      "Unlimited content updates included",
    ],
    screenshot: "/portfolio/arjun-kanuri.png",
    website: "https://arjunkanurimd.com",
    caseStudySlug: "dr-arjun-kanuri",
  },
  {
    name: "Blacke House Co.",
    category: "Small Business",
    description:
      "A luxury event and rental services company needed a site that felt as premium as their brand. We built a clean, elegant layout with an online catalog, inquiry forms, and a portfolio of past events.",
    highlights: [
      "Full-service catalog with categories",
      "Contact & inquiry forms",
      "Gallery showcasing past events",
      "Mobile-responsive design",
      "Custom branding & typography",
      "Launched in under 7 days",
    ],
    screenshot: "/portfolio/blacke-house-co.png",
    website: "https://blackehouseco.com",
  },
  {
    name: "Revival Grace Ministry",
    category: "Church",
    description:
      "A ministry site built to share devotionals, sermons, and community resources. The design centers on accessibility and engagement, making it easy for members to connect with content daily.",
    highlights: [
      "Devotional & sermon archive",
      "Community resource pages",
      "Mobile-friendly for on-the-go reading",
      "Social media integration",
      "Hosted & maintained by CalTech",
      "Unlimited updates at no extra cost",
    ],
    screenshot: "/portfolio/revival-grace-ministry.png",
    website: "https://revivalgrace.com",
  },
  {
    name: "Luana Wellness",
    category: "Small Business",
    description:
      "A wellness coaching brand needed an online presence that matched their calming, professional approach. We delivered a booking-focused site with service breakdowns and client testimonials.",
    highlights: [
      "Online booking integration",
      "Service & pricing pages",
      "Client testimonials section",
      "Mobile-optimized design",
      "SSL & hosting included",
      "Free redesign anytime",
    ],
    screenshot: "/portfolio/luana-wellness.png",
    website: "https://luanawellness.com",
  },
  {
    name: "Specialized Plastic Surgery",
    category: "Medical",
    description:
      "A multi-location surgical practice across New York and New Jersey required a site that conveys expertise across multiple doctors and procedures, with easy-to-find location info and appointment scheduling.",
    highlights: [
      "Multi-location pages with maps",
      "Doctor bios & credentials",
      "Procedure detail pages",
      "Online appointment requests",
      "Mobile-first patient experience",
      "Managed & updated by CalTech",
    ],
    screenshot: "/portfolio/specialized-plastic-surgery.png",
    website: "https://specializedplasticsurgery.com",
    caseStudySlug: "specialized-plastic-surgery",
  },
  {
    name: "Modolith",
    category: "Small Business",
    description:
      "A construction and structural services company needed a professional site that builds trust with commercial clients. We created a bold, industry-appropriate design with project showcases and service pages.",
    highlights: [
      "Project portfolio & showcases",
      "Service area & capability pages",
      "Contact & quote request forms",
      "Professional, industry-appropriate design",
      "Fast-loading & mobile-responsive",
      "Hosted & secured by CalTech",
    ],
    screenshot: "/portfolio/modolith.png",
    website: "https://modolith.com",
  },
  {
    name: "Meritus Solutions Group",
    category: "Small Business",
    description:
      "A protective security services firm needed credibility online. We built a site that communicates professionalism and trust, with clear service breakdowns and a streamlined contact flow.",
    highlights: [
      "Service & capability breakdowns",
      "Professional trust-building design",
      "Contact & consultation forms",
      "Mobile-responsive layout",
      "SSL certificate & hosting included",
      "Priority support from CalTech",
    ],
    screenshot: "/portfolio/meritus-solutions-group.png",
    website: "https://meritussolutions.com",
  },
  {
    name: "Shepherd\u2019s Voice Evangelism",
    category: "Church",
    description:
      "A ministry training and outreach organization needed a hub for their resources, event info, and donor engagement. We built a content-rich site that serves both supporters and new visitors.",
    highlights: [
      "Resource & training library",
      "Event calendar & registration",
      "Donation & giving integration",
      "Mobile-friendly for all ages",
      "Unlimited content updates",
      "Launched in under a week",
    ],
    screenshot: "/portfolio/shepherds-voice-evangelism.png",
    website: "https://shepherdsvoice.com",
  },
  {
    name: "Nutrinae",
    category: "Small Business",
    description:
      "An animal health nutritional solutions company needed a B2B-focused site that educates buyers and generates inquiries. We built a clean, informative layout with product pages and a clear CTA flow.",
    highlights: [
      "Product & solution pages",
      "B2B-focused lead generation",
      "Educational content sections",
      "Mobile-optimized design",
      "Custom branding throughout",
      "Managed & hosted by CalTech",
    ],
    screenshot: "/portfolio/nutrinae.png",
    website: "https://nutrinae.com",
  },
  {
    name: "ALV Floors & Cabinets",
    category: "Contractor",
    description:
      "A flooring and cabinetry contractor in Tennessee needed to show up in local searches and convert visitors into estimates. We built a visually rich site with project galleries and a quote request form.",
    highlights: [
      "Project photo galleries",
      "Free estimate request form",
      "Local SEO optimized",
      "Service area & product pages",
      "Mobile-responsive design",
      "Unlimited updates included",
    ],
    screenshot: "/portfolio/alv-floors.png",
    website: "https://alvfloors.com",
    caseStudySlug: "alv-floors",
  },
  {
    name: "Longhorn Fire Alarm Design",
    category: "Small Business",
    description:
      "A fire alarm design and engineering firm needed a professional web presence to win contracts. We built a clean, authoritative site with service pages, project history, and easy contact options.",
    highlights: [
      "Engineering service breakdowns",
      "Project history & credentials",
      "Contact & RFP forms",
      "Professional, authoritative design",
      "Fast-loading & mobile-friendly",
      "Hosted & maintained by CalTech",
    ],
    screenshot: "/portfolio/longhorn-fire-alarm-design.png",
    website: "https://longhornfirealarmdesign.com",
    caseStudySlug: "longhorn-fire-alarm-design",
  },
  {
    name: "Central Baptist Church",
    category: "Church",
    description:
      "A church community in Port Saint Lucie, FL needed a modern site to welcome visitors, share sermons, and accept online donations. We delivered a warm, inviting design with integrated giving.",
    highlights: [
      "Online giving & donation platform",
      "Sermon archive & media player",
      "Event calendar & announcements",
      "Visitor welcome & info pages",
      "Mobile-optimized for all ages",
      "Free redesign anytime",
    ],
    screenshot: "/portfolio/central-baptist-church.png",
    website: "https://centralbaptistpsl.com",
    caseStudySlug: "central-baptist-church",
  },
];

function getDomainFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function PortfolioCard({ item, dark }: { item: PortfolioItem; dark: boolean }) {
  const domain = getDomainFromUrl(item.website);

  return (
    <section className={`py-16 lg:py-20 ${dark ? "bg-gray-900" : "bg-gray-800"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* Left: Browser mockup with screenshot (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-gray-800">
              {/* Browser chrome */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 bg-gray-700 rounded-lg h-7 px-3 flex items-center gap-2">
                  <Shield className="w-3 h-3 text-green-400 shrink-0" />
                  <span className="text-xs text-gray-300 font-medium">{domain}</span>
                </div>
              </div>

              {/* Screenshot */}
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative"
              >
                <Image
                  src={item.screenshot}
                  alt={`${item.name} website designed by CalTech Web`}
                  width={1280}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 font-bold text-sm shadow-lg">
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Details (2 cols) */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4">
              {item.category}
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              {item.name}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Highlights checklist */}
            <div className="space-y-2.5 mb-8">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-400" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
              >
                View Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
              {item.caseStudySlug ? (
                <Link
                  href={`/portfolio/${item.caseStudySlug}/`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/web-design-pricing/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all"
                >
                  Get a Site Like This
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid() {
  return (
    <>
      {portfolioItems.map((item, i) => (
        <PortfolioCard key={item.name} item={item} dark={i % 2 === 0} />
      ))}

      {/* Load more hint */}
      <section className="py-12 bg-gray-900 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Showing 12 of <span className="font-semibold text-gray-300">800+</span> websites
        </p>
        <Link
          href="/web-design-pricing/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
        >
          Want one like these? Get My Website
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}

// ─── Featured Case Study ─────────────────────────────────────────────────────

function CaseStudy() {
  const results = [
    { stat: "77%", label: "Search Online" },
    { stat: "9 yrs", label: "CalTech Client" },
    { stat: "3 mos", label: "To See Results" },
    { stat: "$99", label: "Per Month" },
  ];

  return (
    <section className="py-20 bg-gray-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-sm font-semibold text-amber-300">
            <Sparkles className="w-4 h-4" />
            Featured Case Study
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Browser chrome mockup with screenshot */}
          <div className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-gray-800">
            {/* Browser chrome */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 bg-gray-700 rounded-lg h-7 px-3 flex items-center gap-2">
                <Shield className="w-3 h-3 text-green-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium">arjunkanurimd.com</span>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <Image
                src="/portfolio/arjun-kanuri.png"
                alt="Dr. Arjun Kanuri website designed by CalTech Web"
                width={1280}
                height={800}
                priority
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-amber-500 text-white rounded-xl px-3 py-2 shadow-lg text-center">
                <div className="text-2xl font-extrabold leading-none">77%</div>
                <div className="text-xs font-medium opacity-90">Search Online</div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              77% of Patients Find Their Surgeon Online
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Dr. Arjun Kanuri has been a CalTech Web client for over 9 years.
              His practice site was redesigned with a modern, mobile-first layout,
              clear patient booking flow, and trust-building content that showcases
              his expertise in plastic and reconstructive surgery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {results.map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 mb-1">{stat}</div>
                  <div className="text-xs text-gray-500 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-amber-500/30" />
              <blockquote className="pl-4 text-gray-300 text-sm leading-relaxed italic">
                &quot;Brandon&apos;s expertise and genuine care for my success have been game-changers.
                Thanks to CalTech Web, my professional image has never looked better, and my
                business is thriving like never before.&quot;
              </blockquote>
              <div className="flex items-center gap-3 mt-4 pl-4">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  AK
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Dr. Arjun Kanuri, MD, MBA</div>
                  <div className="text-xs text-gray-500">Plastic & Reconstructive Surgery, DC/MD/VA</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
            >
              I Want Results Like This
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── What Every Site Includes ─────────────────────────────────────────────────

const includes = [
  "Custom design - no templates",
  "Mobile-responsive layout",
  "Hosting &amp; SSL included",
  "Unlimited content updates",
  "Free redesign anytime",
  "On-page SEO setup",
  "5–7 day average launch",
  "Priority support (93% in 1 hr)",
];

function WhatsIncluded() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              Every Site in Our Portfolio Costs{" "}
              <span className="text-amber-400">$99/month</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              No surprises. No upsells. Everything you need to look
              professional and grow online - bundled into one flat monthly fee.
            </p>
            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm"
            >
              See full pricing details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-amber-400" />
                </div>
                <span
                  className="text-sm text-gray-300"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 bg-gray-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Join 800+ Happy Clients?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Tell us about your business and we&apos;ll get started on your new site.
          It can be live in as few as 5 days.
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
          Not happy? Get a refund and keep your website. That&apos;s Brandon&apos;s personal guarantee.
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const portfolioItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Design Portfolio - CalTech Web",
  description:
    "800+ websites built for small businesses, churches, non-profits, restaurants, and medical practices — all for $99/month.",
  url: "https://caltechweb.com/web-design-portfolio/",
  numberOfItems: portfolioItems.length,
  itemListElement: portfolioItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    description: item.description,
    url: item.caseStudySlug
      ? `https://caltechweb.com/portfolio/${item.caseStudySlug}/`
      : "https://caltechweb.com/web-design-portfolio/",
  })),
};

const portfolioBreadcrumbJsonLd = {
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
      name: "Web Design Portfolio",
      item: "https://caltechweb.com/web-design-portfolio/",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioBreadcrumbJsonLd) }}
      />
      <Header />
      <Hero />
      <CategoryBar />
      <PortfolioGrid />
      <CaseStudy />
      <WhatsIncluded />
      <FinalCTA />
      <Footer />
    </>
  );
}
