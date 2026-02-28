"use client";

import { Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-200 mb-6">
          <MessageSquare className="w-3.5 h-3.5" />
          Brandon reads every message personally
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Let&apos;s Talk About Your Website
        </h1>
        <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Whether you&apos;re starting from scratch or looking to upgrade, we&apos;ll help you
          get a professional site live in 5–7 days - for just $99/month, all-inclusive.
        </p>

        {/* Quick contact options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Call (559) 282-3075
          </a>
          <a
            href="mailto:Brandon@CalTechWeb.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Brandon@CalTechWeb.com
          </a>
        </div>
      </div>
    </section>
  );
}
