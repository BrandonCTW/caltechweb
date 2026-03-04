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
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 z-10"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          boxShadow: "0 0 6px rgba(0,0,0,0.4)",
        }}
      >
        {/* Drag handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg shadow-black/30 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 10H2M2 10L4.5 7.5M2 10L4.5 12.5M14 10H18M18 10L15.5 7.5M18 10L15.5 12.5"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs font-bold text-white pointer-events-none transition-opacity duration-200"
        style={{ opacity: position > 12 ? 1 : 0 }}
      >
        2003
      </div>
      <div
        className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-amber-500 text-xs font-bold text-white pointer-events-none transition-opacity duration-200"
        style={{ opacity: position < 88 ? 1 : 0 }}
      >
        2026
      </div>
    </div>
  );
}
