"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useFormProtection } from "@/hooks/useFormProtection";
import MathCaptcha from "@/components/MathCaptcha";
import HoneypotField from "@/components/HoneypotField";

export default function CompactLeadForm() {
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
    refreshChallenge,
  } = useFormProtection();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateMath()) return;
    setSending(true);

    try {
      const protection = await getProtectionPayload("homepage_cta");
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "caltechweb.com",
          name: fields.name,
          email: fields.contact,
          website: "",
          message: `Contact: ${fields.contact}`,
          source: "homepage-final-cta",
          ...protection,
          turnstileToken: document.querySelector<HTMLInputElement>("[name=cf-turnstile-response]")?.value || "",
        }),
      });
    } catch {
      // Submit optimistically
    } finally {
      setSending(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          We&apos;ll be in touch soon!
        </h3>
        <p className="text-gray-500 text-sm">
          Expect to hear back within a few hours.{" "}
          <a href="tel:5592823075" className="text-blue-600 font-semibold hover:underline">
            Call (559) 282-3075
          </a>{" "}
          for faster service.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto relative">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={fields.name}
          onChange={handleChange}
          className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-base bg-white"
        />
        <input
          name="contact"
          type="text"
          required
          placeholder="Email or phone"
          value={fields.contact}
          onChange={handleChange}
          className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-base bg-white"
        />
      </div>
      <div className="mb-3">
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
      <div className="cf-turnstile" data-sitekey="0x4AAAAAACyyvaAYDtMSgOUI"></div>

      <button
        type="submit"
        disabled={sending}
        className="w-full inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Get My Website — $99/mo"}
        {!sending && <ArrowRight className="w-5 h-5" />}
      </button>
      <p className="text-center text-xs text-gray-400 mt-3">
        No obligation · No contracts · Money-back guarantee
      </p>
    </form>
  );
}
