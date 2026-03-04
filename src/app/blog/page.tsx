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
    slug: "dr-kanuri-40-percent-traffic-increase",
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
    slug: "small-business-website-redesign-signs",
    title: "5 Signs Your Small Business Website Needs a Redesign (Right Now)",
    description:
      "If your bounce rate is climbing, your phone isn't ringing, or your site looks like it was built in 2014 — it's time. Here's how to know for sure.",
  },
  {
    type: "guide",
    slug: "web-design-vs-web-hosting",
    title: "Web Design vs Web Hosting: What's the Difference and Why It Matters",
    description:
      "Many business owners confuse web design and web hosting — or don't realize they need both. Here's a clear explanation and why bundling them saves you money.",
  },
  {
    type: "guide",
    slug: "99-month-vs-diy-website-builders",
    title: "$99/Month vs. DIY Website Builders: Which Is Actually Cheaper?",
    description:
      "Wix, Squarespace, and GoDaddy all look affordable at first glance. Once you add up your time, upgrades, and missed conversions, the math tells a different story.",
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
    slug: "who-updates-a-website-after-the-web-designer-finishes",
    title: "Who Updates a Website After the Web Designer Finishes?",
    description:
      "The website is live — now what? Most designers disappear after launch. Here are your options for keeping your site current, and why ongoing support matters.",
  },
  {
    type: "guide",
    slug: "website-speed-local-seo",
    title: "How Website Speed Affects Your Local SEO Rankings",
    description:
      "Google's algorithm has made page speed a ranking factor, and most small business websites are failing this test. Here's what matters and how to fix it fast.",
  },
  {
    type: "guide",
    slug: "mobile-first-website-design",
    title: "Mobile-First Website Design: Why 60% of Your Visitors Are Judging You on a Phone",
    description:
      "Over half of all web traffic is mobile. If your website isn't built for phones first, you're already losing customers. Here's what mobile-first actually means.",
  },
  {
    type: "guide",
    slug: "contact-page-converts",
    title: "The Contact Page That Converts: 6 Elements Every Small Business Needs",
    description:
      "Most contact pages are an afterthought — but it's the last step before a lead becomes a customer. Here's how to make yours work harder.",
  },
  {
    type: "guide",
    slug: "google-business-profile-website",
    title: "Your Google Business Profile and Website: How They Work Together",
    description:
      "Most small business owners treat their website and Google Business Profile as separate things. Linking them the right way can double your local visibility.",
  },
  {
    type: "guide",
    slug: "1-hour-support-why-it-matters",
    title: "Why 93% of Our Website Updates Are Done in Under 1 Hour",
    description:
      "Your business doesn't wait. Neither should your website. Here's how CalTech Web built a support process that turns around most requests in under an hour.",
  },
  {
    type: "industry",
    slug: "church-website-design-essentials",
    tag: "Church",
    title: "Church Website Design: 7 Things Every Church Website Needs",
    description:
      "Your church website is often the first thing a visitor sees before walking through your doors. Here's what it needs to say — and do — to turn visitors into members.",
  },
  {
    type: "industry",
    slug: "church-website-support",
    tag: "Church",
    title: "Church Website Support: Why Your Ministry Needs More Than a Template",
    description:
      "Church websites have unique needs: online giving, sermon streaming, event management. Here's why a template won't cut it and what to look for instead.",
  },
  {
    type: "industry",
    slug: "post-sermons-online",
    tag: "Church",
    title: "How to Post Sermons Online: A Complete Guide for Churches",
    description:
      "60% of people prefer engaging with faith content online. Here's how to get your sermons on your website with YouTube, podcast feeds, and searchable archives.",
  },
  {
    type: "industry",
    slug: "ultimate-guide-christian-ministry-websites",
    tag: "Church",
    title: "The Ultimate Guide to Christian Ministry Websites",
    description:
      "A comprehensive guide covering devotional content, donation systems, volunteer portals, and outreach tools — everything a ministry website needs to grow your reach.",
  },
  {
    type: "industry",
    slug: "nonprofit-website-design",
    tag: "Nonprofit",
    title: "Nonprofit Website Design: What Every Nonprofit Site Needs",
    description:
      "A nonprofit's website should do two things: build trust and make it easy to give. Most don't do either. Here's the blueprint for a site that actually grows your mission.",
  },
  {
    type: "industry",
    slug: "affordable-construction-company-website",
    tag: "Construction",
    title: "Affordable Construction Company Website Design That Wins Contracts",
    description:
      "91% of clients research contractors online before signing. If your construction company doesn't have a professional website, you're losing bids to competitors who do.",
  },
  {
    type: "industry",
    slug: "affordable-real-estate-company-website",
    tag: "Real Estate",
    title: "Affordable Real Estate Company Website Design: Stand Out in Your Market",
    description:
      "Your brokerage's website competes with Zillow and Realtor.com for attention. Here's how to build a site that wins local clients — for $99/month.",
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
