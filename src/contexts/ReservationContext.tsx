"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ReservationIntent = {
  eventId?: string;
  eventTitle?: string;
};

type ReservationContextValue = {
  isOpen: boolean;
  intent: ReservationIntent | null;
  openReservation: (intent?: ReservationIntent) => void;
  closeReservation: () => void;
};

const ReservationContext = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<ReservationIntent | null>(null);

  const openReservation = useCallback((next?: ReservationIntent) => {
    setIntent(next ?? null);
    setIsOpen(true);
  }, []);

  const closeReservation = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, intent, openReservation, closeReservation }),
    [isOpen, intent, openReservation, closeReservation]
  );

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
}

export function useReservation() {
  const ctx = useContext(ReservationContext);
  if (!ctx) throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
}
