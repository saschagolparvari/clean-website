"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  title: string;
  beforeSrc: string;
  afterSrc: string;
};

/**
 * Interaktiver Vorher/Nachher-Schieberegler: Der Nutzer kann per Maus,
 * Touch oder Tastatur den Regler bewegen, um Vorher- und Nachher-Bild
 * miteinander zu vergleichen.
 */
export default function BeforeAfterSlider({
  title,
  beforeSrc,
  afterSrc,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // Prozent, 0 = ganz "vorher", 100 = ganz "nachher"
  const [isDragging, setIsDragging] = useState(false);

  const updatePositionFromClientX = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl"
        onMouseDown={(e) => {
          setIsDragging(true);
          updatePositionFromClientX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (isDragging) updatePositionFromClientX(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => updatePositionFromClientX(e.touches[0].clientX)}
        onTouchMove={(e) => updatePositionFromClientX(e.touches[0].clientX)}
      >
        {/* Nachher-Bild (Basis, vollständig sichtbar) */}
        <Image
          src={afterSrc}
          alt={`${title} – nachher`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="pointer-events-none object-cover"
        />

        {/* Vorher-Bild (wird per clip-path bis zur Reglerposition eingeblendet) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={`${title} – vorher`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          Vorher
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          Nachher
        </span>

        {/* Regler-Linie + Griff */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${position}%` }}
        />
        <div
          className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-teal-600 shadow-md"
          style={{ left: `${position}%` }}
        >
          ↔
        </div>

        {/* Für Tastatur- und Screenreader-Zugänglichkeit */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Vorher/Nachher-Vergleich: ${title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-900">{title}</p>
    </div>
  );
}
