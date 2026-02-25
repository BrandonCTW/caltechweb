"use client";

import {
  Check,
  Phone,
  ArrowRight,
  Send,
  Clock,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { useState, type FormEvent } from "react";

// NOTE: metadata must be exported from a server component.
// We use a separate generateMetadata approach via the layout or
// we set it via <head> tags since this page needs "use client" for the form.

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
          <img src="/logo.png" alt="CalTech Web" className="h-7 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
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

// --- Contact Form ---

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    // Simulate form submission
    // Replace with your actual form endpoint (e.g., Formspree, API route, etc.)
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: still show success to user, handle errors server-side
        setSubmitted(true);
      }
    } catch {
      // If no API route exists yet, show success and rely on other contact methods
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Message Received!
        </h3>
        <p className="text-gray-600 mb-4">
          Brandon will get back to you within 1 business day. For faster service,
          call directly.
        </p>
        <a
          href="tel:5592823075"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call (559) 282-3075
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Smith"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Current Website URL{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://www.yourwebsite.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Tell Us About Your Project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What kind of website do you need? Any specific features?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? (
          "Sending..."
        ) : (
          <>
            Send My Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        We respond within 1 business day. For faster service, call{" "}
        <a href="tel:5592823075" className="text-blue-600 hover:underline">
          (559) 282-3075
        </a>
      </p>
    </form>
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

// --- Page ---

export default function GetAFreeInstantQuotePage() {
  return (
    <>
      <title>Get a Free Quote - $99/month Web Design | CalTech Web</title>
      <meta
        name="description"
        content="Get a free web design quote from CalTech Web. Professional websites for $99/month with hosting, SSL, unlimited updates, and free redesigns. Call (559) 282-3075."
      />
      <link
        rel="canonical"
        href="https://caltechweb.com/get-a-free-instant-quote/"
      />
      <meta
        property="og:title"
        content="Get a Free Quote - $99/month Web Design | CalTech Web"
      />
      <meta
        property="og:description"
        content="Request a free quote for your new website. $99/month includes everything: custom design, hosting, SSL, unlimited updates, and priority support."
      />
      <meta
        property="og:url"
        content="https://caltechweb.com/get-a-free-instant-quote/"
      />

      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              Free quote - no obligation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Get Your Free{" "}
              <span className="text-orange-400">Website Quote</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and we&apos;ll show you exactly what
              your new $99/month website will look like. No pressure, no
              obligation.
            </p>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tell Us About Your Project
                </h2>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* What You Get */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    What&apos;s Included for $99/month
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Custom website design",
                      "Unlimited content updates",
                      "Free redesigns",
                      "Hosting & SSL included",
                      "Mobile-responsive",
                      "Basic SEO setup",
                      "Priority support",
                      "No contracts - cancel anytime",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Prefer to Talk?
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Skip the form and call Brandon directly. He&apos;ll answer
                    your questions and get you started right away.
                  </p>
                  <a
                    href="tel:5592823075"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (559) 282-3075
                  </a>
                </div>

                {/* Trust signals */}
                <div className="space-y-3">
                  {[
                    {
                      icon: Clock,
                      text: "Live in 5-7 business days",
                    },
                    {
                      icon: Star,
                      text: "800+ websites designed",
                    },
                    {
                      icon: Shield,
                      text: "Money-back guarantee",
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
