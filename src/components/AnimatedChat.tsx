"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Check } from "lucide-react";

type Message = {
  from: "client" | "brandon";
  text: string;
  time: string;
};

const messages: Message[] = [
  {
    from: "client",
    text: "Hey! Can you update the price on my chicken sandwich? It's now $12.99, not $10.99.",
    time: "2:14 PM",
  },
  {
    from: "brandon",
    text: "On it! Give me a few minutes.",
    time: "2:15 PM",
  },
  {
    from: "brandon",
    text: "Done! Price is updated on the menu page. Let me know if anything else needs a change!",
    time: "2:32 PM",
  },
];

// Delays (ms) between each step in the animation sequence
const TYPING_DURATION = 1200;
const PAUSE_BETWEEN = 800;

export default function AnimatedChat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const hasTriggered = useRef(false);

  const runSequence = useCallback(async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

    for (let i = 0; i < messages.length; i++) {
      setTyping(true);
      await delay(TYPING_DURATION);
      setTyping(false);
      setVisibleCount(i + 1);
      if (i < messages.length - 1) {
        await delay(PAUSE_BETWEEN);
      }
    }

    await delay(600);
    setShowBadge(true);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            observer.disconnect();
            runSequence();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [runSequence]);

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
    >
      {/* Chat header */}
      <div className="bg-blue-600 px-5 py-4 flex items-center gap-3">
        <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-9 h-9 rounded-full object-cover border-2 border-white/30 shrink-0" />
        <div>
          <div className="font-semibold text-white text-sm">
            Brandon &mdash; CalTech Web Support
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-blue-200">
              Usually responds in minutes
            </span>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="px-5 py-5 space-y-4 bg-gray-50 min-h-[220px]">
        {messages.slice(0, visibleCount).map((msg, i) =>
          msg.from === "client" ? (
            <div
              key={i}
              className="flex justify-end animate-[fadeSlideUp_0.35s_ease-out]"
            >
              <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[82%] shadow-sm">
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className="text-xs text-blue-200 mt-1.5 text-right">
                  {msg.time}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="flex items-end gap-2 animate-[fadeSlideUp_0.35s_ease-out]"
            >
              <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-7 h-7 rounded-full object-cover shrink-0 mb-0.5" />
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[82%]">
                <p className="text-sm text-gray-800">{msg.text}</p>
                <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
              </div>
            </div>
          )
        )}

        {/* Typing indicator */}
        {typing && visibleCount < messages.length && (
          <div className="flex items-end gap-2 animate-[fadeSlideUp_0.2s_ease-out]">
            {messages[visibleCount].from === "brandon" && (
              <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-7 h-7 rounded-full object-cover shrink-0 mb-0.5" />
            )}
            <div
              className={`${
                messages[visibleCount].from === "client"
                  ? "ml-auto bg-blue-100"
                  : "bg-white border border-gray-200"
              } rounded-2xl px-4 py-3 shadow-sm`}
            >
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer badge */}
      <div className="border-t border-gray-100 px-5 py-3.5 bg-white flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Actual support exchange &mdash; name changed for privacy
        </span>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold transition-all duration-500 ${
            showBadge
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
          Done in 18 min
        </span>
      </div>
    </div>
  );
}
