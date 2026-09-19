"use client";

import { useEffect, useState } from "react";
import { getVenueStatus } from "@/lib/hours";
import { useLocale } from "@/contexts/LocaleContext";

type OpenNowBadgeProps = {
  compact?: boolean;
  className?: string;
};

export default function OpenNowBadge({ compact = false, className = "" }: OpenNowBadgeProps) {
  const { ui } = useLocale();
  const [status, setStatus] = useState<ReturnType<typeof getVenueStatus> | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getVenueStatus());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span
        className={`inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase opacity-0 ${className}`}
        aria-hidden
      >
        {ui("hours.closed")}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] tracking-[0.16em] uppercase ${
        status.isOpen
          ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
          : "border-rose-400/35 bg-rose-500/10 text-rose-200"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
          status.isOpen ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" : "bg-rose-400"
        }`}
      />
      {compact
        ? status.isOpen
          ? ui("hours.openShort")
          : ui("hours.closedShort")
        : status.isOpen
          ? `${ui("hours.open")} ${status.until}`
          : `${ui("hours.closed")} ${status.until}`}
    </span>
  );
}
