"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle, Star, Globe } from "lucide-react";

const items = [
  {
    icon: "check" as const,
    title: "Sermon upload done for Calvary Chapel",
    subtitle: "38 minutes ago · under 1 hour",
  },
  {
    icon: "star" as const,
    title: "Dr. Arjun Kanuri - 9-year client, 40% traffic boost",
    subtitle: "Plastic surgery · DC/MD/VA",
  },
  {
    icon: "globe" as const,
    title: "New website live: Fuentes Concrete, Inc.",
    subtitle: "6 days ago · launched in under a week",
  },
  {
    icon: "check" as const,
    title: "Photo gallery updated for ALV Floors",
    subtitle: "28 minutes ago · under 1 hour",
  },
  {
    icon: "star" as const,
    title: "Madera County Farm Bureau - 55% traffic increase",
    subtitle: "3-year client · 1,000+ pages",
  },
  {
    icon: "globe" as const,
    title: "TurboThao Nails website went live",
    subtitle: "5 days ago · booking page included",
  },
];

const IconMap = {
  check: CheckCircle,
  star: Star,
  globe: Globe,
};

const colorMap = {
  check: "text-green-500",
  star: "text-yellow-500",
  globe: "text-blue-500",
};

const fillMap = {
  check: "",
  star: "fill-yellow-500",
  globe: "",
};

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Show after 4s delay
  useEffect(() => {
    const delay = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(delay);
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    if (!visible || dismissed) return;
    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setFading(false);
      }, 250);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible, dismissed]);

  function dismiss() {
    setVisible(false);
    setTimeout(() => setDismissed(true), 400);
  }

  if (dismissed) return null;

  const item = items[index];
  const Icon = IconMap[item.icon];

  return (
    <div
      className={`hidden md:block fixed bottom-6 left-6 z-40 max-w-[300px] transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-0.5 bg-gray-100">
          <div
            key={index}
            className="h-full bg-blue-400 rounded-full"
            style={{ animation: "toast-progress 6s linear forwards" }}
          />
        </div>

        <div className="flex items-start gap-3 px-4 py-3.5">
          {/* Icon */}
          <div className={`shrink-0 mt-0.5 ${colorMap[item.icon]}`}>
            <Icon className={`w-4.5 h-4.5 ${fillMap[item.icon]}`} />
          </div>

          {/* Text */}
          <div
            className={`flex-1 min-w-0 transition-all duration-250 ${
              fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              {item.title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
          </div>

          {/* Dismiss */}
          <button
            onClick={dismiss}
            className="shrink-0 p-0.5 -mt-0.5 text-gray-300 hover:text-gray-500 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
