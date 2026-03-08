import type { Metadata } from "next";
import {
  Check,
  Phone,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Star,
  Shield,
  Monitor,
  ChevronDown,
  Quote,
  Stethoscope,
  Calendar,
  Search,
  Zap,
  DollarSign,
  RefreshCw,
  Headphones,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Practice Website Design | $99/month | CalTech Web",
  description:
    "Medical practice website design that gets results. See how Dr. Kanuri got 40% more traffic and doubled conversions in 90 days. $99/month, no contracts.",
  keywords:
    "medical practice website design, doctor website design, physician website, medical website design, healthcare website design",
  alternates: {
    canonical: "https://caltechweb.com/case-studies/medical-practice-website-design/",
  },
  openGraph: {
    type: "website",
    siteName: "CalTech Web",
    title: "Medical Practice Website Design | $99/month | CalTech Web",
    description:
      "See how a plastic surgery practice got 40% more traffic and 2x appointment conversions after a 5-day redesign. $99/month includes everything.",
    url: "https://caltechweb.com/case-studies/medical-practice-website-design/",
    images: [
      {
        url: "/portfolio/arjun-kanuri-after.png",
        width: 1200,
        height: 630,
        alt: "Dr. Arjun Kanuri medical practice website redesign by CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/portfolio/arjun-kanuri-after.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Practice Website Design",
  url: "https://caltechweb.com/case-studies/medical-practice-website-design/",
  provider: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
  },
  description:
    "Professional medical practice website design for $99/month. Mobile-first, HIPAA-conscious, SEO-optimized, with online appointment booking and unlimited updates.",
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
        name: "Dr. Arjun Kanuri, MD, MBA",
      },
      reviewBody:
        "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
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
      name: "Medical Practice Website Design",
      item: "https://caltechweb.com/case-studies/medical-practice-website-design/",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a medical practice website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$99/month covers everything: custom design, hosting, SSL, unlimited updates, and free redesigns. There is no setup fee, no contract, and no per-update charges.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a medical practice website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most medical practice websites are live within 5-7 business days of receiving your content. Dr. Kanuri's complete redesign launched in 5 days.",
      },
    },
    {
      "@type": "Question",
      name: "Are medical practice contact forms HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build HIPAA-conscious contact forms that ask the right questions upfront without collecting protected health information. For full HIPAA compliance with electronic records, you'll want a dedicated patient portal solution, which we can recommend and integrate.",
      },
    },
  ],
};

// --- Hero ---

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
            <Stethoscope className="w-4 h-4 text-green-400" />
            Real case study: 40% traffic increase in 90 days
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Medical Practice Website Design{" "}
            <span className="text-orange-400">That Gets Patients.</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your practice is excellent. Your website should be too. We design
            fast, trust-first medical websites that show up in Google and turn
            visitors into appointment bookings, all for $99/month.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Appointment Booking",
              "Mobile-First",
              "Local SEO",
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
              Get My Medical Website
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
      </div>
    </section>
  );
}

// --- Results Bar ---

function ResultsBar() {
  const metrics = [
    { value: "+40%", label: "Organic Traffic (90 days)", color: "text-green-600" },
    { value: "2×", label: "Appointment Conversions", color: "text-blue-600" },
    { value: "12+", label: "New Patients/Month", color: "text-purple-600" },
    { value: "5 days", label: "Launch Timeline", color: "text-orange-600" },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center mb-5">
          Dr. Arjun Kanuri Case Study Results
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metrics.map(({ value, label, color }) => (
            <div key={label} className="text-center">
              <div className={`text-3xl sm:text-4xl font-extrabold leading-none mb-1 ${color}`}>
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

// --- Case Study ---

function CaseStudy() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4">
                Case Study
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                How Dr. Kanuri Got 40% More Traffic and 2× More Patients in 90 Days
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Most medical practices have the same problem: the doctor is excellent, referrals keep the calendar full, but the website is silently costing them new patients.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              That was Dr. Arjun Kanuri&apos;s situation. His plastic surgery practice in the DC/MD/VA area was thriving on word-of-mouth, but people were finding him on Google, landing on a slow, outdated site, and leaving before they ever booked.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-xl">
              <p className="text-blue-800 font-medium italic">
                &ldquo;I had patients tell me they almost didn&apos;t come in because the website looked old. That&apos;s when I knew something had to change.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-blue-600 font-semibold">
                — Dr. Arjun Kanuri, MD, MBA
              </footer>
            </blockquote>

            {/* Problem */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What Was Wrong With the Old Site</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Kanuri&apos;s previous website was built in 2019. By 2025, it was a liability. The site loaded in 7.2 seconds on mobile, nearly 5× slower than the 1.5-second threshold where Google starts penalizing rankings. It wasn&apos;t mobile-responsive. The &ldquo;Book Appointment&rdquo; button was buried three clicks deep.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                There were no trust signals, no patient reviews, no professional photo, no credentials front and center. For any business, that&apos;s a problem. For a medical practice, it&apos;s a patient-repelling liability.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Key stat:</strong> Pages that load slower than 3 seconds see a 53% abandonment rate on mobile. A slow medical website isn&apos;t just annoying, it&apos;s handing patients to competitors.
              </div>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What We Built and Why Every Decision Mattered</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We launched the redesigned site in 5 days. Every element was driven by a specific conversion or SEO goal.
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Load time", detail: "Dropped from 7.2 seconds to 1.8 seconds on mobile. Optimized images, modern hosting, clean Next.js code." },
                  { label: "Mobile-first design", detail: "68% of Dr. Kanuri's traffic came from phones. We designed mobile first, then scaled up." },
                  { label: "Above-the-fold CTA", detail: "'Book an Appointment' appears on every page without scrolling. One tap from anywhere." },
                  { label: "Trust-first homepage", detail: "Professional headshot, board certifications, patient reviews, and insurance info visible without scrolling." },
                  { label: "Local SEO structure", detail: "Medical schema markup, optimized title tags for his specialty and location, Google Business Profile integration." },
                  { label: "Simplified navigation", detail: "Went from 11 menu items to 4. Patients could find what they needed in seconds." },
                  { label: "HIPAA-conscious forms", detail: "Secure inquiry forms that ask the right questions without collecting protected health information." },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong className="text-gray-900">{label}:</strong> {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Results at 90 Days</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                We track the same core metrics for every client: organic traffic, conversion rate, bounce rate, and session duration. Here is what Dr. Kanuri&apos;s analytics showed at 90 days, compared to the same period the prior year.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { before: "~same traffic", after: "+40% organic traffic", label: "More patients finding the practice on Google" },
                  { before: "1× conversions", after: "2× appointment rate", label: "Same visitors booking at twice the rate" },
                  { before: "74% bounce rate", after: "38% bounce rate", label: "Visitors reading the site instead of leaving" },
                  { before: "0:48 session", after: "2:12 session", label: "People exploring services and reading credentials" },
                ].map(({ before, after, label }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400 line-through">{before}</span>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="text-sm font-bold text-green-600">{after}</span>
                    </div>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Net result:</strong> 12+ additional new patient inquiries per month, directly attributed to the website.
              </div>
            </div>

            {/* Dr. Kanuri quote */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-7 text-white">
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              <p className="text-lg font-medium leading-relaxed mb-5 italic">
                &ldquo;Brandon&apos;s expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Dr. Arjun Kanuri, MD, MBA</div>
                  <div className="text-blue-200 text-xs">Plastic &amp; Reconstructive Surgery, DC/MD/VA</div>
                </div>
              </div>
            </div>

            {/* ROI */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What This Cost and What It Returns</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The redesign, hosting, ongoing updates, and support are all included in the $99/month plan. Over 90 days, that is $297 in total investment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At 12 additional patient inquiries per month, even converting a fraction of those into consultations pays for years of the website in a single month. The right question isn&apos;t &ldquo;how much does a website cost?&rdquo; It&apos;s &ldquo;how much is a non-performing website costing me?&rdquo;
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            {/* Pricing card */}
            <div className="bg-blue-950 text-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-orange-400">$99</span>
                <span className="text-blue-300 text-sm">/month</span>
              </div>
              <p className="text-blue-200 text-sm mb-5">
                Everything included. No setup fees. No contracts.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Custom medical website design",
                  "Fast, HIPAA-conscious hosting",
                  "Appointment booking integration",
                  "Local SEO structure",
                  "Unlimited updates",
                  "Free redesigns",
                  "93% support done in &lt;1 hour",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <Link
                href="/web-design-pricing/"
                className="block w-full text-center py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors mb-3"
              >
                Get My Medical Website
              </Link>
              <a
                href="tel:5592823075"
                className="block w-full text-center py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
              >
                (559) 282-3075
              </a>
            </div>

            {/* Trust signals */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed italic mb-3">
                &ldquo;Brandon&apos;s expertise and genuine care for my success have been game-changers.&rdquo;
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                Dr. Arjun Kanuri, MD, MBA
              </p>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">CalTech Web By the Numbers</div>
              {[
                { value: "800+", label: "Websites Designed" },
                { value: "93%", label: "Updates in Under 1 Hour" },
                { value: "5–7", label: "Days to Launch" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-600">{label}</span>
                  <span className="font-bold text-blue-600 text-sm">{value}</span>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800 text-sm">Brandon&apos;s Guarantee</span>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                Not satisfied? Get a full refund and keep your website. No fine print.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// --- Medical Features ---

const medicalFeatures = [
  {
    icon: Calendar,
    color: "text-blue-600 bg-blue-50",
    title: "Appointment Booking Integration",
    body: "We connect your site to your scheduling system, whether that's Zocdoc, Calendly, SimplePractice, or a custom form, so patients can book 24/7 from any device.",
  },
  {
    icon: Search,
    color: "text-green-600 bg-green-50",
    title: "Local SEO for Medical Practices",
    body: "Medical schema markup, optimized title tags for your specialty and location, Google Business Profile integration, and fast load times so you show up when patients search.",
  },
  {
    icon: Monitor,
    color: "text-purple-600 bg-purple-50",
    title: "Mobile-First, Always",
    body: "Over 68% of healthcare searches happen on mobile. Your practice website is designed for phones first, ensuring a fast, seamless booking experience on every screen size.",
  },
  {
    icon: Shield,
    color: "text-orange-600 bg-orange-50",
    title: "HIPAA-Conscious Contact Forms",
    body: "Secure inquiry forms that ask the right questions upfront without collecting protected health information, keeping you compliant and patients comfortable.",
  },
  {
    icon: TrendingUp,
    color: "text-indigo-600 bg-indigo-50",
    title: "Trust Signals That Convert",
    body: "Credentials, certifications, patient testimonials, and professional photography displayed prominently. Patients make high-stakes decisions, your site needs to build confidence fast.",
  },
  {
    icon: RefreshCw,
    color: "text-teal-600 bg-teal-50",
    title: "Unlimited Updates Included",
    body: "New services, updated office hours, staff changes, seasonal promotions. Just email support@caltechweb.com. Updates are included, with 93% completed in under 1 hour.",
  },
];

function MedicalFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Stethoscope className="w-4 h-4" />
            Built for medical practices
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything Your Practice Website Needs
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Medical practice web design is different from a standard business site. Patients are making health decisions. Trust, clarity, and speed aren&apos;t optional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicalFeatures.map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Medical Practices Choose CalTech Web
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            800+ websites built. Dozens of healthcare and professional service practices. We understand what makes patients book, not just browse.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: DollarSign,
              color: "text-green-600 bg-green-50",
              title: "$99/month, everything included",
              body: "Custom design, hosting, SSL, unlimited updates, and free redesigns. Most medical web agencies charge $5,000–$15,000 upfront, plus $150/hour for changes. We charge $99/month, period.",
            },
            {
              icon: Headphones,
              color: "text-blue-600 bg-blue-50",
              title: "93% of updates done in under 1 hour",
              body: "When you need to update office hours, add a new procedure page, or fix something, it happens fast. Not next week. Brandon handles it personally.",
            },
            {
              icon: Zap,
              color: "text-orange-600 bg-orange-50",
              title: "Live in 5-7 days",
              body: "Dr. Kanuri's complete redesign launched in 5 days. We move fast without cutting corners because we've built 800+ sites and know exactly what medical practices need.",
            },
            {
              icon: Shield,
              color: "text-purple-600 bg-purple-50",
              title: "Satisfaction guarantee",
              body: "Not satisfied? You get a full refund and keep your website files. We can offer this because it almost never happens. The results speak for themselves.",
            },
          ].map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-shadow"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---

const faqs = [
  {
    q: "How much does a medical practice website cost?",
    a: "$99/month includes everything: custom design, hosting, SSL security, unlimited updates, and free redesigns. There is no setup fee, no contract, and no per-update charges. Month-to-month only.",
  },
  {
    q: "How long does it take to build a medical practice website?",
    a: "Most medical practice websites are live within 5–7 business days of receiving your content: logo, photos, services list, doctor bio, and any text you'd like us to use. Dr. Kanuri's complete redesign launched in 5 days.",
  },
  {
    q: "Are your medical contact forms HIPAA compliant?",
    a: "We build HIPAA-conscious contact forms that collect appointment inquiry information without capturing protected health information (PHI). For full electronic health record integration, we can recommend and connect you to dedicated patient portal solutions.",
  },
  {
    q: "Can you integrate with our appointment scheduling system?",
    a: "Yes. We integrate with popular scheduling platforms including Zocdoc, Calendly, SimplePractice, Healthie, and others. If you have a custom system, we can embed your booking flow seamlessly into the website.",
  },
  {
    q: "Do you handle local SEO for our specialty?",
    a: "Yes. Every medical practice website includes medical schema markup, optimized title tags and meta descriptions for your specialty and location, Google Business Profile integration, and a site structure that helps you appear when patients search for your services nearby.",
  },
  {
    q: "What if we need changes after launch?",
    a: "Unlimited updates are included in your $99/month. New procedures, updated hours, staff photos, seasonal promotions, whatever you need, just email support@caltechweb.com. 93% of updates are done in under an hour.",
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No contracts, ever. CalTech Web is month-to-month. If your practice ever needs to cancel, you keep your website files. No penalties, no hassle. We want you to stay because you're thrilled with the results, not because you're locked in.",
  },
];

function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Medical Website Questions, Answered
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Common questions from physicians and practice managers before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none">
                <span className="font-semibold text-gray-900 pr-4">{q}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CTA ---

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
          <Users className="w-8 h-8 text-blue-200" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to stop losing patients to a slow website?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Dr. Kanuri&apos;s new site launched in 5 days and costs $99/month. The results were measurable within 90 days. Call us for a free, honest review of your current site.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Medical Website
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

export default function MedicalPracticeWebsiteDesignPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <ResultsBar />
        <CaseStudy />
        <MedicalFeatures />
        <WhyCalTechWeb />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
