import type { Metadata } from "next";
import {
  Check,
  Phone,
  ArrowRight,
  Heart,
  Monitor,
  Calendar,
  DollarSign,
  RefreshCw,
  Headphones,
  Shield,
  Star,
  Church,
  Video,
  Globe,
  Users,
} from "lucide-react";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affordable Church Websites | $99/month | CalTech Web",
  description:
    "Professional church website design for just $99/month. Online giving, sermon streaming, event calendars, and unlimited updates included. 800+ sites designed. No contracts.",
  keywords:
    "affordable church websites, church website design, church web design, church website builder, church website hosting",
  alternates: { canonical: "https://caltechweb.com/affordable-church-websites/" },
  openGraph: {
    title: "Affordable Church Websites | $99/month | CalTech Web",
    description:
      "Everything your church needs online for $99/month. Custom design, online giving, sermon streaming, event calendars, hosting, SSL, and unlimited updates.",
    url: "https://caltechweb.com/affordable-church-websites/",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins - Founder of CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/brandon-hopkins.jpg"],
  },
};

// --- Structured Data ---

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable Church Website Design",
  url: "https://caltechweb.com/affordable-church-websites/",
  provider: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
  },
  description:
    "Professional church website design for $99/month. Includes online giving integration, sermon streaming, event calendars, hosting, SSL, and unlimited updates.",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "99",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "800",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Pastor James Watkins",
      },
      reviewBody:
        "As a church, every dollar matters. $99/month for a professional website with unlimited updates - Brandon even redesigned our site for free when we updated our branding. Couldn't ask for more.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Christina Beckstead",
      },
      reviewBody:
        "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    },
  ],
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
      name: "Church Websites",
      item: "https://caltechweb.com/affordable-church-websites/",
    },
  ],
};

// --- Nav ---

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
          <Image src="/logo.png" alt="CalTech Web" width={1520} height={512} className="h-7 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                href === "/affordable-church-websites/"
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
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Schedule a Call
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

// --- Hero ---

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Church className="w-4 h-4 text-yellow-400" />
          Trusted by churches across all 50 states
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Affordable Church Websites.{" "}
          <span className="text-orange-400">$99/month.</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your church deserves a professional website without the professional
          price tag. Online giving, sermon streaming, event calendars, and
          unlimited updates - all included for one flat monthly fee.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Online Giving",
            "Sermon Streaming",
            "Event Calendars",
            "No Contracts",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-blue-100"
            >
              <Check className="w-3.5 h-3.5 text-green-400" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Get My Church Website
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
      </div>
    </section>
  );
}

// --- Stats Bar ---

const stats = [
  { value: "800+", label: "Websites Designed" },
  { value: "$99", label: "Per Month, All-Inclusive" },
  { value: "5-7", label: "Days to Launch" },
  { value: "93%", label: "Updates in Under 1 Hour" },
];

function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 leading-none mb-1">
                {value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Church Features ---

const churchFeatures = [
  {
    icon: DollarSign,
    color: "text-green-600 bg-green-50",
    title: "Online Giving Integration",
    body: "Make it easy for your congregation to tithe and donate online. We integrate with popular giving platforms so members can give securely from any device.",
  },
  {
    icon: Video,
    color: "text-blue-600 bg-blue-50",
    title: "Sermon Streaming & Archives",
    body: "Embed your sermons directly on your website. Whether you stream live or post recordings, your message reaches everyone - even those who can't attend in person.",
  },
  {
    icon: Calendar,
    color: "text-purple-600 bg-purple-50",
    title: "Event Calendars",
    body: "Keep your congregation informed with an easy-to-read event calendar. Bible studies, youth group, potlucks, worship nights - all in one place.",
  },
  {
    icon: RefreshCw,
    color: "text-orange-600 bg-orange-50",
    title: "Unlimited Updates Included",
    body: "Need to update service times, add a new ministry page, or post an announcement? Just email or call Brandon. Updates are included - no extra charges, ever.",
  },
  {
    icon: Monitor,
    color: "text-indigo-600 bg-indigo-50",
    title: "Mobile-Responsive Design",
    body: "Over 60% of your visitors are on their phones. Your church website will look beautiful on every device - phones, tablets, and desktops.",
  },
  {
    icon: Globe,
    color: "text-teal-600 bg-teal-50",
    title: "Hosting, SSL & Domain Setup",
    body: "Everything technical is handled for you. Fast hosting, security certificates, and domain connection - all included in your $99/month.",
  },
];

function ChurchFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 fill-blue-600 text-blue-600" />
            Built for churches
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything Your Church Needs Online
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From online giving to sermon streaming, your church website comes
            loaded with the features your ministry needs to thrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {churchFeatures.map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Why CalTech Web ---

function WhyCalTechWeb() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Churches Choose CalTech Web
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            With 800+ websites designed - many for churches - we understand what
            ministries need and how to deliver it affordably.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: DollarSign,
              color: "text-green-600 bg-green-50",
              title: "$99/month - everything included",
              body: "Custom design, hosting, SSL, unlimited updates, and free redesigns. Your church budget goes further because there are no surprise fees.",
            },
            {
              icon: Headphones,
              color: "text-blue-600 bg-blue-50",
              title: "93% of support requests done in under 1 hour",
              body: "When you need something changed on your website, it happens fast. Not next week. Not next Tuesday. Brandon handles it personally.",
            },
            {
              icon: RefreshCw,
              color: "text-orange-600 bg-orange-50",
              title: "Free redesigns - whenever you want",
              body: "Rebranding? New pastor? Growing into a new season? Your website gets a fresh design at no extra cost. Most agencies charge $3,000+ for a redesign.",
            },
            {
              icon: Shield,
              color: "text-purple-600 bg-purple-50",
              title: "No contracts. Cancel anytime.",
              body: "Month-to-month only. If your church ever needs to cancel, you keep your website files. No penalties, no hassle.",
            },
          ].map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {title}
                </div>
                <div className="text-sm text-gray-500 leading-relaxed">
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonial ---

function Testimonial() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Churches Love CalTech Web
          </h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 italic text-lg">
            &ldquo;As a church, every dollar matters. $99/month for a
            professional website with unlimited updates - Brandon even redesigned
            our site for free when we updated our branding. Couldn&apos;t ask for
            more.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              JW
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                Pastor James Watkins
              </div>
              <div className="text-sm text-gray-400">
                Valley Community Church
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CTA Section ---

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
          <Users className="w-8 h-8 text-blue-200" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to put your church online?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join hundreds of churches already using CalTech Web. Your new website
          can be live in as little as 5-7 business days. Call Brandon directly or
          check out the pricing page to get started.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            View Pricing
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
      </div>
    </section>
  );
}

// --- Footer ---

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="CalTech Web" width={1520} height={512} className="h-7 w-auto" />
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
            &copy; {new Date().getFullYear()} CalTech Web. All rights reserved.
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

// --- Sticky Mobile CTA ---

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
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- Page ---

export default function AffordableChurchWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <ChurchFeatures />
        <WhyCalTechWeb />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
