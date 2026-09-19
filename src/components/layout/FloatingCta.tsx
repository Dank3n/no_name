"use client";

import { useState } from "react";
import { Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import { useReservation } from "@/contexts/ReservationContext";

export default function FloatingCta() {
  const { ui } = useLocale();
  const { openReservation } = useReservation();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pointer-events-none fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-2 sm:right-6">
      {expanded && (
        <div className="pointer-events-auto flex flex-col items-stretch gap-2">
          <a
            href={siteConfig.contact.phoneHref}
            className="btn-premium inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-gold)]/50 bg-black/90 px-4 py-3 text-[10px] tracking-[0.18em] text-[var(--color-gold-light)] uppercase shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <Phone className="h-4 w-4" />
            {ui("cta.callNow")}
          </a>
          <button
            type="button"
            onClick={() => {
              setExpanded(false);
              openReservation();
            }}
            className="btn-premium inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-pink)]/50 bg-[var(--color-pink)]/15 px-4 py-3 text-[10px] tracking-[0.18em] text-[var(--color-pink)] uppercase shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <Calendar className="h-4 w-4" />
            {ui("cta.reserveNow")}
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          if (expanded) {
            openReservation();
            setExpanded(false);
            return;
          }
          setExpanded(true);
        }}
        className="btn-premium pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-4 py-3.5 text-[11px] font-medium tracking-[0.16em] text-black uppercase shadow-[0_10px_30px_rgba(201,169,98,0.35)] sm:px-5"
        aria-expanded={expanded}
        aria-label={ui("cta.reserveNow")}
      >
        <Calendar className="h-4 w-4" />
        <span className="max-w-[9.5rem] truncate sm:max-w-none">{ui("cta.reserveNow")}</span>
      </button>
    </div>
  );
}
