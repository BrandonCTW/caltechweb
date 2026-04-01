"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Zap, Users } from "lucide-react";
import { useFormProtection } from "@/hooks/useFormProtection";
import MathCaptcha from "@/components/MathCaptcha";
import HoneypotField from "@/components/HoneypotField";

export default function InlineQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({ name: "", contact: "" });
  const {
    honeypot,
    setHoneypot,
    mathChallenge,
    mathAnswer,
    setMathAnswer,
    mathError,
    setMathError,
    getProtectionPayload,
    validateMath,
  } = useFormProtection();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateMath()) return;
    setSending(true);

    try {
      const protection = await getProtectionPayload("homepage_quote");
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "caltechweb.com",
          name: fields.name,
          email: fields.contact,
          website: "",
          message: `Contact: ${fields.contact}`,
          source: "homepage-quote",
          ...protection,
        }),
      });
    } catch {
      // Submit optimistically — don't block user on network errors
    } finally {
      setSending(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <section id="get-started" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-2xl inline-block w-full">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" strokeWidth={3} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Got it, we'll be in touch soon!
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Our team personally reviews every request. Expect to hear back within a few hours, usually sooner.
            </p>
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm"
            >
              Need it faster? Call (559) 282-3075
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="py-20 bg-blue-600">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-sm font-semibold text-blue-100 mb-4">
            <Zap className="w-4 h-4 text-yellow-300" />
            Takes less than 30 seconds
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Get Your Website Started
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Tell us your name and how to reach you &mdash; we&apos;ll handle the rest.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-sm text-blue-100">
              We limit new projects each month to ensure quality &mdash; spots are first come, first served
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative"
        >
          <HoneypotField value={honeypot} onChange={setHoneypot} />
          <div className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                value={fields.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-base"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email or Phone
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="you@yourbusiness.com or (555) 123-4567"
                value={fields.contact}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-base"
              />
            </div>
            <MathCaptcha
              question={mathChallenge?.question ?? null}
              answer={mathAnswer}
              onChange={(v) => {
                setMathAnswer(v);
                if (mathError) setMathError("");
              }}
              error={mathError}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Get My Website"}
            {!sending && <ArrowRight className="w-5 h-5" />}
          </button>

          {/* Social proof inside the form */}
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Users className="w-4 h-4 text-blue-500 shrink-0" />
            <span>
              <span className="font-semibold text-gray-700">800+</span> businesses already trust us with their websites
            </span>
          </div>

          <p className="text-center text-sm text-gray-400 mt-3">
            Or call us directly at{" "}
            <a
              href="tel:5592823075"
              className="text-blue-600 font-semibold hover:underline"
            >
              (559) 282-3075
            </a>
          </p>
        </form>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-blue-100">
          {[
            "No obligation",
            "No sales pressure",
            "Response in under 24 hours",
            "Cancel anytime",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-300 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
