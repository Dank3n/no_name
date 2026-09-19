"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { ReservationProvider } from "@/contexts/ReservationContext";
import ReservationModal from "@/components/reservation/ReservationModal";
import FloatingCta from "@/components/layout/FloatingCta";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ReservationProvider>
        {children}
        <ReservationModal />
        <FloatingCta />
      </ReservationProvider>
    </LocaleProvider>
  );
}
