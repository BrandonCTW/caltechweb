import type { Metadata } from "next";
import {
  Phone,
  Globe,
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Blog - Tips for Small Businesses | CalTech Web",
  description:
    "Practical web design tips, case studies, and advice for small business owners, churches, and non-profits. From CalTech Web — $99/month.",
  alternates: { canonical: "https://caltechweb.com/blog/" },
  openGraph: {
    title: "Web Design Blog - Tips for Small Businesses | CalTech Web",
    description:
      "Practical web design tips, case studies, and affordable website advice from Brandon Hopkins at CalTech Web.",
    url: "https://caltechweb.com/blog/",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins - CalTech Web",
      },
    ],
  },
};

// ─── Blog Post Data ───────────────────────────────────────────────────────────

const featuredPost = {
  slug: "dr-kanuri-40-percent-traffic-increase",
  category: "Case Study",
  categoryColor: "bg-green-100 text-green-700",
  title: "How Dr. Arjun Kanuri Increased Website Traffic by 40% and Doubled Conversions in 3 Months",
  excerpt:
    "A busy medical practice, an outdated website, and a $99/month plan. Here's exactly what we changed - and the measurable results that followed.",
  readTime: "6 min read",
  date: "January 28, 2026",
  author: "Brandon Hopkins",
};

const posts = [
  {
    slug: "small-business-website-redesign-signs",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "5 Signs Your Small Business Website Needs a Redesign (Right Now)",
    excerpt:
      "If your bounce rate is climbing, your phone isn't ringing, or your site looks like it was built in 2014 - it's time. Here's how to know for sure.",
    readTime: "4 min read",
    date: "February 10, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "99-month-vs-diy-website-builders",
    category: "Pricing & Value",
    categoryColor: "bg-orange-100 text-orange-700",
    title: "$99/Month vs. DIY Website Builders: Which Is Actually Cheaper?",
    excerpt:
      "Wix, Squarespace, and GoDaddy all look affordable at first glance. But once you add up your time, upgrades, and missed conversions - the math tells a different story.",
    readTime: "5 min read",
    date: "February 3, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "church-website-design-essentials",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Church Website Design: 7 Things Every Church Website Needs",
    excerpt:
      "Your church website is often the first thing a visitor sees before they ever walk through your doors. Here's what it needs to say - and do - to turn visitors into members.",
    readTime: "5 min read",
    date: "January 20, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "website-speed-local-seo",
    category: "SEO",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "How Website Speed Affects Your Local SEO Rankings (And What To Do About It)",
    excerpt:
      "Google's algorithm has made page speed a ranking factor - and most small business websites are failing this test. Here's what matters and how to fix it fast.",
    readTime: "4 min read",
    date: "January 12, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "nonprofit-website-design-tips",
    category: "Non-Profits",
    categoryColor: "bg-pink-100 text-pink-700",
    title: "Non-Profit Website Design: How to Get More Donors and Volunteers Online",
    excerpt:
      "A non-profit's website should do two things: build trust and make it easy to give. Most don't do either. Here's the blueprint for a site that actually grows your mission.",
    readTime: "5 min read",
    date: "December 30, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "1-hour-support-why-it-matters",
    category: "Support & Reliability",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title: "Why 93% of Our Website Updates Are Done in Under 1 Hour - And Why That Matters",
    excerpt:
      "Your business doesn't wait. Neither should your website. Here's how CalTech Web built a support process that gets most requests turned around in under an hour.",
    readTime: "3 min read",
    date: "December 18, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "mobile-first-website-design",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Mobile-First Website Design: Why 60% of Your Visitors Are Judging You on a Phone",
    excerpt:
      "Over half of all web traffic is mobile. If your website isn't built for phones first, you're already losing customers. Here's what mobile-first actually means in practice.",
    readTime: "4 min read",
    date: "December 5, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "contact-page-converts",
    category: "Conversion",
    categoryColor: "bg-red-100 text-red-700",
    title: "The Contact Page That Converts: 6 Elements Every Small Business Needs",
    excerpt:
      "Most contact pages are an afterthought. But it's the last step before a lead becomes a customer. Here's how to make yours work harder.",
    readTime: "4 min read",
    date: "November 22, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "google-business-profile-website",
    category: "Local SEO",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "Your Google Business Profile and Website: How They Work Together to Get You Found",
    excerpt:
      "Most small business owners treat their website and Google Business Profile as separate things. They're not - and linking them the right way can double your local visibility.",
    readTime: "5 min read",
    date: "November 10, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "affordable-web-design-company",
    category: "Web Design",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Why CalTech Web Is the Most Affordable Web Design Company That Doesn't Cut Corners",
    excerpt: "There are thousands of 'affordable' web design companies. Most of them are affordable because they cut corners. Here's what makes CalTech Web different.",
    readTime: "5 min read",
    date: "February 18, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "affordable-web-design-for-small-businesses",
    category: "Small Business",
    categoryColor: "bg-orange-100 text-orange-700",
    title: "Affordable Web Design for Small Businesses: What $99/Month Actually Gets You",
    excerpt: "Small business owners deserve professional websites without the massive upfront cost. Here's exactly what $99/month includes - and why it beats the alternatives.",
    readTime: "5 min read",
    date: "February 12, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "website-maintenance-requirements",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Website Maintenance Requirements: What Every Business Owner Needs to Know",
    excerpt: "Your website needs regular maintenance to stay secure, fast, and visible on Google. Here's what's required - and how CalTech Web handles all of it for $99/month.",
    readTime: "5 min read",
    date: "January 30, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "church-website-support",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Church Website Support: Why Your Ministry Needs More Than a Template",
    excerpt: "Church websites have unique needs - online giving, sermon streaming, event management. Here's why a template won't cut it and what to look for instead.",
    readTime: "5 min read",
    date: "January 22, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "web-design-vs-web-hosting",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Web Design vs Web Hosting: What's the Difference and Why It Matters",
    excerpt: "Many business owners confuse web design and web hosting - or don't realize they need both. Here's a clear explanation and why bundling them saves you money.",
    readTime: "4 min read",
    date: "February 5, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "who-updates-a-website-after-the-web-designer-finishes",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Who Updates a Website After the Web Designer Finishes?",
    excerpt: "The website is live - now what? Most designers disappear after launch. Here are your options for keeping your site current, and why ongoing support matters.",
    readTime: "4 min read",
    date: "January 15, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "affordable-construction-company-website",
    category: "Industry",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Affordable Construction Company Website Design That Wins Contracts",
    excerpt: "91% of clients research contractors online before signing. If your construction company doesn't have a professional website, you're losing bids to competitors who do.",
    readTime: "5 min read",
    date: "December 28, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "affordable-real-estate-company-website",
    category: "Industry",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Affordable Real Estate Company Website Design: Stand Out in Your Market",
    excerpt: "Your brokerage's website is competing with Zillow and Realtor.com for attention. Here's how to build a site that wins local clients for $99/month.",
    readTime: "5 min read",
    date: "December 20, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "post-sermons-online",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "How to Post Sermons Online: A Complete Guide for Churches",
    excerpt: "60% of people prefer engaging with faith content online. Here's how to get your sermons on your website with YouTube, podcast feeds, and searchable archives.",
    readTime: "5 min read",
    date: "January 5, 2026",
    author: "Brandon Hopkins",
    featured: false,
  },
  {
    slug: "ultimate-guide-christian-ministry-websites",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "The Ultimate Guide to Christian Ministry Websites",
    excerpt: "A comprehensive guide to building ministry websites that grow your reach - covering devotional content, donation systems, volunteer portals, and outreach tools.",
    readTime: "8 min read",
    date: "December 15, 2025",
    author: "Brandon Hopkins",
    featured: false,
  },
];

const categories = [
  "All Posts",
  "Web Design Tips",
  "Web Design",
  "Case Studies",
  "SEO",
  "Church Websites",
  "Non-Profits",
  "Small Business",
  "Industry",
  "Pricing & Value",
  "Conversion",
  "Local SEO",
  "Support & Reliability",
];

// ─── Structured Data ──────────────────────────────────────────────────────────

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
      name: "Blog",
      item: "https://caltechweb.com/blog/",
    },
  ],
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "CalTech Web Blog",
  description:
    "Web design tips, case studies, and affordable website advice for small businesses, churches, and non-profits.",
  url: "https://caltechweb.com/blog/",
  publisher: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://caltechweb.com/logo.png",
    },
  },
  blogPost: [featuredPost, ...posts.filter((p) => p.slug !== featuredPost.slug)].map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://caltechweb.com/${post.slug}/`,
    author: {
      "@type": "Person",
      name: post.author,
    },
  })),
};

// ─── Nav ─────────────────────────────────────────────────────────────────────

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
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">
            CalTech<span className="text-blue-600">Web</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                href === "/blog/"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5592823075"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 sm:py-18">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-5">
          <BookOpen className="w-4 h-4 text-blue-300" />
          Practical advice from Brandon Hopkins
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Web Design Tips for{" "}
          <span className="text-orange-400">Small Business Owners</span>
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Real advice from someone who&apos;s built 800+ websites. No fluff,
          no jargon - just what actually works for small businesses, churches,
          and non-profits.
        </p>
      </div>
    </section>
  );
}

// ─── Featured Post ────────────────────────────────────────────────────────────

function FeaturedPost() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Featured Case Study
          </span>
        </div>

        <Link
          href={`/${featuredPost.slug}/`}
          className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-gray-100 bg-gray-50 hover:bg-blue-50/40 hover:border-blue-100 transition-all p-8 shadow-sm hover:shadow-md"
        >
          {/* Left: content */}
          <div>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-4 ${featuredPost.categoryColor}`}
            >
              <Tag className="w-3 h-3" />
              {featuredPost.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-4 group-hover:text-blue-700 transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {featuredPost.readTime}
              </span>
              <span>{featuredPost.date}</span>
              <span>by {featuredPost.author}</span>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold group-hover:bg-blue-700 transition-colors">
              Read Case Study
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Right: stat highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                stat: "+40%",
                label: "Traffic Increase",
                sub: "in 3 months",
                color: "bg-green-500",
              },
              {
                stat: "2×",
                label: "Conversions",
                sub: "doubled from baseline",
                color: "bg-blue-600",
              },
              {
                stat: "5 days",
                label: "Time to Launch",
                sub: "from first call",
                color: "bg-orange-500",
              },
              {
                stat: "$99/mo",
                label: "Total Cost",
                sub: "all-inclusive",
                color: "bg-purple-600",
              },
            ].map(({ stat, label, sub, color }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm"
              >
                <div
                  className={`text-3xl font-extrabold mb-1 ${
                    color === "bg-green-500"
                      ? "text-green-600"
                      : color === "bg-blue-600"
                      ? "text-blue-600"
                      : color === "bg-orange-500"
                      ? "text-orange-600"
                      : "text-purple-600"
                  }`}
                >
                  {stat}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-0.5">
                  {label}
                </div>
                <div className="text-xs text-gray-400">{sub}</div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}

// ─── Category Filter Bar ──────────────────────────────────────────────────────

function CategoryBar() {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Post Grid ────────────────────────────────────────────────────────────────

function PostCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <Link
      href={`/${post.slug}/`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all overflow-hidden"
    >
      {/* Color accent bar based on category */}
      <div
        className={`h-1.5 w-full ${
          post.categoryColor.includes("blue")
            ? "bg-blue-500"
            : post.categoryColor.includes("orange")
            ? "bg-orange-500"
            : post.categoryColor.includes("purple")
            ? "bg-purple-500"
            : post.categoryColor.includes("teal")
            ? "bg-teal-500"
            : post.categoryColor.includes("pink")
            ? "bg-pink-500"
            : post.categoryColor.includes("yellow")
            ? "bg-yellow-500"
            : post.categoryColor.includes("red")
            ? "bg-red-500"
            : "bg-green-500"
        }`}
      />
      <div className="flex flex-col flex-1 p-6">
        <span
          className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-4 ${post.categoryColor}`}
        >
          <Tag className="w-3 h-3" />
          {post.category}
        </span>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50 mt-auto">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}

function PostGrid() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            All Articles{" "}
            <span className="text-gray-400 font-normal text-base">
              ({posts.length})
            </span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter / CTA Strip ───────────────────────────────────────────────────

function CTAStrip() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          Ready to put these tips to work?
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Get a website that already follows all of this advice - {" "}
          <span className="text-orange-300">for $99/month.</span>
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Everything you read about here - fast load times, mobile-first design,
          clear CTAs, local SEO setup - is already built into every CalTech Web
          site.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (559) 282-3075
          </a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
          {["800+ websites built", "93% updates done in <1 hour", "5–7 day launch"].map(
            (item) => (
              <span key={item} className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-blue-300" />
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                CalTech<span className="text-blue-400">Web</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="tel:5592823075" className="hover:text-white transition-colors">
                (559) 282-3075
              </a>
              <a href="mailto:Brandon@CalTechWeb.com" className="hover:text-white transition-colors">
                Brandon@CalTechWeb.com
              </a>
            </div>
          </div>

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
                  <Link href="/web-design-pricing/" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Small Businesses", href: "/affordable-web-design-company/" },
                { label: "Church Websites", href: "/affordable-church-websites/" },
                { label: "Non-Profits", href: "/nonprofit-website-design-tips/" },
                { label: "Construction", href: "/affordable-construction-company-website/" },
                { label: "Real Estate", href: "/affordable-real-estate-company-website/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

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
                { label: "Free Report Card", href: "/free-website-report-card/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
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
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">
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
            Call Now
          </a>
          <Link
            href="/web-design-pricing/"
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

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <FeaturedPost />
        <CategoryBar />
        <PostGrid />
        <CTAStrip />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
