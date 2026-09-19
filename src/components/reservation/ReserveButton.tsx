"use client";

import type { ButtonHTMLAttributes } from "react";
import { useReservation, type ReservationIntent } from "@/contexts/ReservationContext";

type ReserveButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: ReservationIntent;
};

export default function ReserveButton({ intent, className = "", children, onClick, ...props }: ReserveButtonProps) {
  const { openReservation } = useReservation();

  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        openReservation(intent);
        onClick?.(event);
      }}
      className={`btn-premium ${className}`}
    >
      {children}
    </button>
  );
}
