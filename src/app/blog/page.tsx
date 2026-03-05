import type { Metadata } from "next";
import { Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import BlogFilterGrid, { type ResourceItem } from "./BlogFilterGrid";

export const metadata: Metadata = {
  title: "Web Design Resources | Guides & Case Studies | CalTech Web",
  description:
    "Case studies, how-to guides, and industry-specific advice from Brandon Hopkins at CalTech Web. Real results from 800+ websites built.",
  alternates: { canonical: "https://caltechweb.com/blog/" },
  openGraph: {
    title: "Web Design Resources | Guides & Case Studies | CalTech Web",
    description:
      "Case studies, how-to guides, and industry-specific advice from Brandon Hopkins at CalTech Web.",
    url: "https://caltechweb.com/blog/",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins, CalTech Web",
      },
    ],
  },
};

// ─── Resource Data ─────────────────────────────────────────────────────────────

const resources: ResourceItem[] = [
  {
    type: "case-study",
    slug: "medical-practice-website-design",
    tag: "Medical Practice",
    title: "Dr. Arjun Kanuri: 40% Traffic Increase & 2× Conversions in 3 Months",
    description:
      "A busy medical practice with an outdated website. Here's exactly what we changed — and the measurable results: 40% more traffic, doubled conversions, 5-day launch.",
  },
  {
    type: "guide",
    slug: "affordable-web-design-company",
    title: "Why CalTech Web Is the Most Affordable Web Design Company That Doesn't Cut Corners",
    description:
      "There are thousands of 'affordable' web design companies. Most cut corners. Here's what makes CalTech Web different — and what you should demand from any agency.",
  },
  {
    type: "guide",
    slug: "affordable-web-design-for-small-businesses",
    title: "Affordable Web Design for Small Businesses: What $99/Month Actually Gets You",
    description:
      "Small business owners deserve professional websites without massive upfront costs. Here's exactly what $99/month includes, and why it beats the alternatives.",
  },
  {
    type: "guide",
    slug: "website-maintenance-requirements",
    title: "Website Maintenance Requirements: What Every Business Owner Needs to Know",
    description:
      "Your website needs regular maintenance to stay secure, fast, and visible on Google. Here's what's required — and how CalTech Web handles all of it for $99/month.",
  },
  {
    type: "guide",
    slug: "church-website-support",
    tag: "Church Websites",
    title: "Church Website Support: Why Your Ministry Needs More Than a Template",
    description:
      "Templates can't handle online giving, sermon archives, or event management. Here's what real church website support looks like — and why it matters for your ministry.",
  },
  {
    type: "guide",
    slug: "church-website-design-essentials",
    tag: "Church Websites",
    title: "Church Website Design: 7 Things Every Church Website Needs",
    description:
      "Your church website is often the first thing a visitor sees before they walk through your doors. Here are 7 essential elements that every church website must have.",
  },
  {
    type: "guide",
    slug: "post-sermons-online",
    tag: "Church Websites",
    title: "How to Post Sermons Online: A Complete Guide for Churches",
    description:
      "60% of people engage with faith content online before visiting in person. Here's how to post sermons via YouTube, podcast, and on-site archive — and help people find them.",
  },
  {
    type: "guide",
    slug: "ultimate-guide-christian-ministry-websites",
    tag: "Church Websites",
    title: "The Ultimate Guide to Christian Ministry Websites",
    description:
      "Everything a ministry needs from its website: mission clarity, devotional content, online giving, outreach tools, and sermon streaming. A complete guide.",
  },
];

// ─── Structured Data ──────────────────────────────────────────────────────────

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://caltechweb.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://caltechweb.com/blog/" },
  ],
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-5">
          Resources
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Expertise You Can{" "}
          <span className="text-orange-400">Verify</span>
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Case studies, guides, and industry-specific advice from Brandon Hopkins — 800+ websites built, every lesson learned the hard way.
        </p>
      </div>
    </section>
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
            Call Now
          </a>
          <Link
            href="/web-design-pricing/"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <BlogFilterGrid resources={resources} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
