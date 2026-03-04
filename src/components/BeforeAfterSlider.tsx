"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  width: number;
  height: number;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  width,
  height,
}: Props) {
  const [position, setPosition] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      setHasInteracted(true);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prevent = (e: Event) => e.preventDefault();
    el.addEventListener("dragstart", prevent);
    return () => el.removeEventListener("dragstart", prevent);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none touch-none cursor-col-resize overflow-hidden"
      style={{ aspectRatio: `${width} / ${height}` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* After image (full, behind) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
        draggable={false}
      />

      {/* Before image (clipped via clip-path) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          width={width}
          height={height}
          className="absolute inset-0 w-full h-full object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          boxShadow: "0 0 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.2)",
        }}
      >
        {/* Drag handle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center ${
            hasInteracted
              ? "shadow-lg shadow-black/30"
              : "shadow-[0_0_0_4px_rgba(245,158,11,0.4),0_0_20px_rgba(245,158,11,0.3)] animate-pulse"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 10H2M2 10L4.5 7.5M2 10L4.5 12.5M14 10H18M18 10L15.5 7.5M18 10L15.5 12.5"
              stroke="#374151"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* "Drag to compare" hint */}
      {!hasInteracted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-sm font-semibold text-white pointer-events-none animate-bounce">
          Drag to compare
        </div>
      )}

      {/* Labels */}
      <div
        className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-sm font-bold text-white pointer-events-none transition-opacity duration-200"
        style={{ opacity: position > 12 ? 1 : 0 }}
      >
        Before
      </div>
      <div
        className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-lg bg-amber-500 text-sm font-bold text-white pointer-events-none transition-opacity duration-200"
        style={{ opacity: position < 88 ? 1 : 0 }}
      >
        After
      </div>
    </div>
  );
}
