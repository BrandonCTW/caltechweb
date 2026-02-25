"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Globe, Clock, HeartHandshake, Zap } from "lucide-react";

function useCountUp(target: number, duration = 1400, trigger = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, target, duration]);

  return count;
}

type StatDef =
  | { kind: "numeric"; value: number; suffix: string; comma?: boolean; label: string; icon: React.ElementType }
  | { kind: "text"; display: string; label: string; icon: React.ElementType };

const statDefs: StatDef[] = [
  { kind: "numeric", value: 800,  suffix: "+",  label: "Websites Managed",               icon: Globe         },
  { kind: "numeric", value: 93,   suffix: "%",  label: "Support Done in Under 1 Hour",   icon: Clock         },
  { kind: "numeric", value: 5000, suffix: "+", comma: true, label: "Support Tickets Closed", icon: HeartHandshake },
  { kind: "text",   display: "5–7 Days",        label: "Average Launch Time",             icon: Zap           },
];

function NumericStat({
  value,
  suffix,
  comma,
  label,
  icon: Icon,
  trigger,
}: {
  value: number;
  suffix: string;
  comma?: boolean;
  label: string;
  icon: React.ElementType;
  trigger: boolean;
}) {
  const count = useCountUp(value, 1400, trigger);
  const display = comma ? count.toLocaleString() : String(count);

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-3 mx-auto">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-extrabold text-gray-900 mb-1 tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="text-sm text-gray-500 leading-snug">{label}</div>
    </div>
  );
}

function TextStat({ display, label, icon: Icon }: { display: string; label: string; icon: React.ElementType }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-3 mx-auto">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-extrabold text-gray-900 mb-1">{display}</div>
      <div className="text-sm text-gray-500 leading-snug">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          observer.disconnect();
        }
      });
    },
    [triggered]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section ref={sectionRef} className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statDefs.map((stat) =>
            stat.kind === "numeric" ? (
              <NumericStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                comma={stat.comma}
                label={stat.label}
                icon={stat.icon}
                trigger={triggered}
              />
            ) : (
              <TextStat
                key={stat.label}
                display={stat.display}
                label={stat.label}
                icon={stat.icon}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
