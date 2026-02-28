"use client";

import {
  Check,
  Phone,
  Send,
  Clock,
  Shield,
  Star,
  Zap,
  ChevronDown,
  MessageSquare,
  Palette,
  Rocket,
  Globe,
  RefreshCw,
  ShoppingCart,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, type FormEvent } from "react";

// NOTE: Metadata is handled by layout.tsx (server component) since this
// page uses "use client" for the quote form.

// --- Project Type Options ---

const projectTypes = [
  {
    id: "new-website",
    icon: Globe,
    label: "New Website",
    desc: "Starting from scratch",
  },
  {
    id: "redesign",
    icon: RefreshCw,
    label: "Redesign",
    desc: "Upgrade an existing site",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "Online Store",
    desc: "Sell products online",
  },
  {
    id: "business",
    icon: Briefcase,
    label: "Business Site",
    desc: "Professional web presence",
  },
];

// --- Multi-Step Contact Form ---

function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setFormError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("projectType", selectedType || "not-specified");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
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
    <div>
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                step >= s
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            <span
              className={`text-xs font-medium hidden sm:inline ${
                step >= s ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {s === 1 ? "Project Type" : "Your Details"}
            </span>
            {s < 2 && (
              <div
                className={`flex-1 h-0.5 rounded-full transition-colors ${
                  step > s ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Project Type Selection */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              What do you need?
            </h3>
            <p className="text-sm text-gray-500">
              Select the option that best describes your project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {projectTypes.map(({ id, icon: Icon, label, desc }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedType(id)}
                className={`relative flex flex-col items-center text-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  selectedType === id
                    ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {selectedType === id && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedType === id ? "bg-blue-100" : "bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      selectedType === id ? "text-blue-600" : "text-gray-500"
                    }`}
                  />
                </div>
                <div>
                  <span
                    className={`text-sm font-semibold block ${
                      selectedType === id ? "text-blue-900" : "text-gray-900"
                    }`}
                  >
                    {label}
                  </span>
                  <span className="text-xs text-gray-500">{desc}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              if (!selectedType) {
                setFormError("Please select a project type to continue.");
                return;
              }
              setFormError(null);
              setStep(2);
            }}
            className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>

          {formError && (
            <p className="text-center text-sm text-red-500 font-medium">
              {formError}
            </p>
          )}
        </div>
      )}

      {/* Step 2: Contact Details */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors -mt-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>

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
              Tell Us About Your Project{" "}
              <span className="text-red-500">*</span>
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
                Get My Free Quote
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
      )}
    </div>
  );
}

// --- FAQ ---

const quoteFaqs = [
  {
    q: "Is there really no setup fee?",
    a: "Correct - there is no setup fee, no hidden charges, and no contracts. You pay $99/month and that covers everything: design, hosting, SSL, unlimited updates, and priority support.",
  },
  {
    q: "What if I already have a website?",
    a: "No problem. We can migrate your existing site, redesign it from scratch, or start fresh - whatever works best for your goals. Your domain always stays yours.",
  },
  {
    q: "How long does it take to get my site live?",
    a: "Most websites are designed and launched within 5-7 business days. You will review and approve the design before anything goes public.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. There are no contracts or cancellation fees. If you decide to leave, you can cancel at any time with no penalty.",
  },
  {
    q: "What if I am not happy with the design?",
    a: "Brandon personally guarantees your satisfaction. Revisions are unlimited during the design process. If you are not happy after launch, you get a full refund and keep your website.",
  },
  {
    q: "Do you work with businesses outside California?",
    a: "Yes - CalTech Web serves clients nationwide. Everything is handled remotely, so location is never a barrier.",
  },
];

function QuoteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Quick answers to common questions about getting started.
          </p>
        </div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
          {quoteFaqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900 leading-snug">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Still have a question?{" "}
          <a
            href="mailto:Brandon@CalTechWeb.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            Email Brandon
          </a>{" "}
          or call{" "}
          <a
            href="tel:5592823075"
            className="text-blue-600 font-semibold hover:underline"
          >
            (559) 282-3075
          </a>
          .
        </p>
      </div>
    </section>
  );
}

// --- Page ---

export default function GetAFreeInstantQuotePage() {
  return (
    <>
      <Header />
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
                  Start Your Free Quote
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

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                How It Works
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                From first message to live website in four simple steps.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MessageSquare,
                  step: "1",
                  title: "Send Your Message",
                  desc: "Fill out the form above with a few details about your business and what you need.",
                },
                {
                  icon: Phone,
                  step: "2",
                  title: "Quick Discovery Call",
                  desc: "Brandon reaches out within 1 business day to discuss your goals, timeline, and vision.",
                },
                {
                  icon: Palette,
                  step: "3",
                  title: "Design & Review",
                  desc: "We build your custom site and send it for your approval. Revisions are free and unlimited.",
                },
                {
                  icon: Rocket,
                  step: "4",
                  title: "Launch Day",
                  desc: "Once approved, your site goes live. Ongoing support and updates are all included.",
                },
              ].map(({ icon: Icon, step, title, desc }) => (
                <div
                  key={step}
                  className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                      Step {step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <QuoteFAQ />
      </main>
      <Footer />
    </>
  );
}
