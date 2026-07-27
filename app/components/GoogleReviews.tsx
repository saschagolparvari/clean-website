"use client";

import { useEffect, useRef, useState } from "react";
import {
  ELFSIGHT_WIDGET_ID,
  GOOGLE_PROFILE_URL,
} from "./googleReviewsConfig";

type WidgetStatus = "unconfigured" | "loading" | "loaded" | "error";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_SCRIPT_ATTR = "data-elfsight-platform";
// Wie lange wir maximal auf das Laden der echten Bewertungen warten,
// bevor wir den Hinweis-Fallback anzeigen (z.B. bei Adblockern oder falscher Widget-ID).
const LOAD_TIMEOUT_MS = 9000;

/**
 * Zeigt echte, automatisch aktualisierte Google-Bewertungen über das
 * kostenlose Elfsight "Google Reviews"-Widget an.
 *
 * - Es werden keine Zugangsdaten oder API-Keys benötigt, nur die im Elfsight-
 *   Dashboard hinterlegte Google Place ID / der Profil-Link.
 * - Das Skript wird erst geladen, sobald die Sektion in den sichtbaren
 *   Bereich scrollt (IntersectionObserver), um die Ladezeit der Seite nicht
 *   unnötig zu belasten.
 * - Solange die Widget-ID noch nicht eingetragen ist, das Skript nicht lädt
 *   oder blockiert wird (z.B. durch einen Adblocker), wird ein sauber
 *   gestalteter Fallback mit Link zu den Google-Bewertungen angezeigt.
 */
export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetHostRef = useRef<HTMLDivElement>(null);
  const isConfigured = !ELFSIGHT_WIDGET_ID.startsWith("PLATZHALTER");

  const [status, setStatus] = useState<WidgetStatus>(
    isConfigured ? "loading" : "unconfigured"
  );

  useEffect(() => {
    if (!isConfigured) return;

    const section = containerRef.current;
    if (!section) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let mutationObserver: MutationObserver | undefined;

    const loadElfsightScript = () => {
      const existingScript = document.querySelector(
        `script[${ELFSIGHT_SCRIPT_ATTR}]`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = ELFSIGHT_SCRIPT_SRC;
        script.defer = true;
        script.setAttribute(ELFSIGHT_SCRIPT_ATTR, "true");
        script.onerror = () => setStatus("error");
        document.body.appendChild(script);
      }

      // Beobachten, ob Elfsight tatsächlich Inhalte in den Widget-Container
      // einfügt. Erst dann gilt das Widget als erfolgreich geladen.
      if (widgetHostRef.current) {
        mutationObserver = new MutationObserver(() => {
          if (widgetHostRef.current && widgetHostRef.current.childNodes.length > 0) {
            setStatus("loaded");
            if (timeoutId) clearTimeout(timeoutId);
            mutationObserver?.disconnect();
          }
        });
        mutationObserver.observe(widgetHostRef.current, { childList: true });
      }

      timeoutId = setTimeout(() => {
        setStatus((current) => (current === "loaded" ? current : "error"));
      }, LOAD_TIMEOUT_MS);
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadElfsightScript();
          intersectionObserver.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    intersectionObserver.observe(section);

    return () => {
      intersectionObserver.disconnect();
      mutationObserver?.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isConfigured]);

  return (
    <div ref={containerRef}>
      {/* Das Elfsight-Widget wird hier eingehängt, sobald es geladen ist. */}
      {isConfigured && (
        <div
          ref={widgetHostRef}
          className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
          data-elfsight-app-lazy
        />
      )}

      {status !== "loaded" && (
        <div aria-live="polite">
          {status === "loading" && <ReviewsSkeleton />}
          {(status === "error" || status === "unconfigured") && (
            <ReviewsFallback showConfigHint={status === "unconfigured"} />
          )}
        </div>
      )}
    </div>
  );
}

function ReviewsSkeleton() {
  return (
    <div className="grid animate-pulse gap-6 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 h-4 w-24 rounded bg-slate-200" />
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-slate-200" />
            <div className="h-3 w-5/6 rounded bg-slate-200" />
            <div className="h-3 w-2/3 rounded bg-slate-200" />
          </div>
          <div className="mt-4 h-3 w-32 rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
}

function ReviewsFallback({ showConfigHint }: { showConfigHint: boolean }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="text-2xl tracking-[0.2em] text-amber-400">★★★★★</div>
      <p className="mt-3 text-base font-semibold text-slate-900">
        Google-Bewertungen sind derzeit nicht eingebettet
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
        {showConfigHint
          ? "Das Bewertungs-Widget wurde noch nicht eingerichtet."
          : "Das Bewertungs-Widget konnte gerade nicht geladen werden."}{" "}
        Alle echten Bewertungen sind jederzeit direkt bei Google einsehbar.
      </p>
      <a
        href={GOOGLE_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
      >
        Bewertungen bei Google ansehen
      </a>
    </div>
  );
}
