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
  ChevronDown,
  MessageSquare,
  Paintbrush,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affordable Church Websites | $99/month | CalTech Web",
  description:
    "Professional church website design for $99/month. Online giving, sermon streaming, event calendars, and unlimited updates. No contracts.",
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
        name: "Bryan Newberry",
      },
      reviewBody:
        "Managing my church website and personal ministry website was a significant time commitment, taking up at least 3 hours of my week. Since I enlisted the help of CalTech Web, they have been maintaining my website for many years now. Their services have been invaluable, saving me precious time that I can now devote to furthering my ministry.",
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

// --- How It Works ---

const howItWorksSteps = [
  {
    step: "01",
    icon: MessageSquare,
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    accent: "text-blue-600",
    title: "Tell Us About Your Church",
    body: "Sign up and Brandon personally reaches out within 24 hours. Share your church's name, service times, logo, photos, and any vision you have for the site.",
    detail: "Personal call within 24 hours",
  },
  {
    step: "02",
    icon: Paintbrush,
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    accent: "text-violet-600",
    title: "We Design & Build Your Site",
    body: "We handle everything - custom design, online giving setup, sermon page, event calendar, mobile responsiveness, and hosting. You approve before it goes live.",
    detail: "Live in 5-7 business days",
  },
  {
    step: "03",
    icon: Rocket,
    gradient: "from-green-500 to-green-600",
    lightBg: "bg-green-50",
    accent: "text-green-600",
    title: "Launch & Unlimited Support",
    body: "Your church website goes live and from day one, every update is included. New sermons, event changes, staff photos, announcements - just call, email, or text Brandon.",
    detail: "93% of updates done in under 1 hour",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100 mb-4">
            <Check className="w-4 h-4" />
            Simple 3-step process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            How Your Church Gets Online
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From sign-up to a live church website in under a week. No tech skills needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          {/* Arrow connectors between cards on larger screens */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="hidden sm:flex absolute top-[56px] z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm items-center justify-center"
              style={{ left: `${i * 33.33}%`, transform: "translateX(-50%)" }}
            >
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}

          {howItWorksSteps.map(
            ({ step, icon: Icon, gradient, lightBg, accent, title, body, detail }) => (
              <div
                key={step}
                className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-extrabold shadow-md`}
                    >
                      {step}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-lg ${lightBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${accent}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{body}</p>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${lightBg} text-xs font-semibold ${accent}`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {detail}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials ---

const churchTestimonials = [
  {
    quote:
      "$99/month is reasonable to get rid of a headache for me. Huge THANK YOU to CalTech Web for producing such a great website for us!",
    name: "Mike Fuentes",
    role: "Owner, Fuentes Concrete, Inc.",
    initials: "MF",
    color: "bg-orange-600",
  },
  {
    quote:
      "Managing my church website and personal ministry website was a significant time commitment, taking up at least 3 hours of my week. Since I enlisted the help of CalTech Web, they have been maintaining my website for many years now. Their services have been invaluable, saving me precious time that I can now devote to furthering my ministry.",
    name: "Bryan Newberry",
    role: "Pastor, Calvary Chapel Los Alamitos",
    initials: "BN",
    color: "bg-indigo-600",
  },
  {
    quote:
      "Our church finally has a website that makes visitors feel welcome before they even walk through our doors. CalTech Web handles all the updates so we can focus on ministry.",
    name: "Central Baptist Church",
    role: "Church, Port Saint Lucie, FL",
    initials: "CB",
    color: "bg-teal-600",
  },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold border border-yellow-100 mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            What Churches Say
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Churches Love CalTech Web
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real feedback from pastors and church leaders who trust CalTech Web with their online presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {churchTestimonials.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {name}
                  </div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---

const churchFaqs = [
  {
    q: "How much does a church website cost?",
    a: "$99/month includes everything — custom design, hosting, SSL, unlimited updates, and free redesigns. There is no setup fee, no design fee, and no contract. Your church pays $99 the first month and every month after.",
  },
  {
    q: "Does the church website include online giving?",
    a: "Yes. We integrate with popular giving platforms (Planning Center Giving, Tithe.ly, PayPal, and others) so your congregation can give securely from any device. Setup is included at no extra cost.",
  },
  {
    q: "How long does it take to build a church website?",
    a: "Most church websites are live within 5–7 business days of receiving your content — logo, photos, service times, and any text you'd like us to use. We've launched same-week sites when churches needed them quickly.",
  },
  {
    q: "Can we update the website ourselves?",
    a: "You don't have to. Unlimited updates are included in your $99/month. Just email or call Brandon — new sermon content, event changes, staff photos, announcement banners — all handled for you, typically within the hour.",
  },
  {
    q: "Do you work with small or rural churches?",
    a: "Absolutely. We've built websites for churches of every size, from small rural congregations of 30 to growing multi-site ministries. The $99/month price is the same regardless of your church's size or location.",
  },
  {
    q: "What if we need a redesign later?",
    a: "Free redesigns are included for life. If your church rebrands, gets a new pastor, or just wants a fresh look, we'll redesign your website at no extra charge. Most agencies charge $3,000–$5,000 for a redesign.",
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No contracts, ever. CalTech Web is month-to-month. If your church needs to cancel, you keep your website files. We believe you should stay because the service is worth it — not because you're locked in.",
  },
  {
    q: "Can you help with sermon streaming and podcast setup?",
    a: "Yes. We embed your sermon videos from YouTube or Vimeo, and can help you set up a podcast feed so your messages are accessible on Spotify, Apple Podcasts, and more — all included in your plan.",
  },
];

const churchFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: churchFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

function ChurchFAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Church Website Questions, Answered
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Common questions from pastors and church administrators before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {churchFaqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none">
                <span className="font-semibold text-gray-900 pr-4">{q}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Church Resources Section ---

function ChurchResources() {
  const articles = [
    {
      href: "/church-website-design-essentials/",
      title: "Church Website Design: 7 Things Every Church Website Needs",
      excerpt:
        "Your church website is often the first thing a visitor sees before they ever walk through your doors. Here's what it needs to say — and do.",
    },
    {
      href: "/ultimate-guide-christian-ministry-websites/",
      title: "The Ultimate Guide to Christian Ministry Websites",
      excerpt:
        "A comprehensive guide to building ministry websites that grow your reach — covering devotional content, donation systems, and outreach tools.",
    },
    {
      href: "/post-sermons-online/",
      title: "How to Post Sermons Online: A Complete Guide for Churches",
      excerpt:
        "60% of people prefer engaging with faith content online. Here's how to get your sermons on your website with YouTube, podcasts, and searchable archives.",
    },
    {
      href: "/church-website-support/",
      title: "Church Website Support: Why Your Ministry Needs More Than a Template",
      excerpt:
        "Church websites have unique needs — online giving, sermon streaming, event management. Here's why a template won't cut it.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Church Website Resources
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Practical guides written for pastors and church administrators.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {articles.map(({ href, title, excerpt }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-blue-50/50 hover:border-blue-100 transition-all"
            >
              <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-blue-700 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchFaqJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <StatsBar />
        <ChurchFeatures />
        <WhyCalTechWeb />
        <HowItWorks />
        <Testimonials />
        <ChurchFAQ />
        <ChurchResources />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
