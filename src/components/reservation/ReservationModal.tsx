"use client";

import { useEffect, useId, useMemo, useState, type FormEvent } from "react";
import { Calendar, Check, Users, X } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import { useReservation } from "@/contexts/ReservationContext";
import { RESERVATION_TIMES } from "@/lib/hours";

const STORAGE_KEY = "noname-reservations";

function todayIso() {
  const now = new Date();
  const tz = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Bucharest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  return tz;
}

export default function ReservationModal() {
  const { isOpen, intent, closeReservation } = useReservation();
  const { ui, dir } = useLocale();
  const titleId = useId();
  const minDate = useMemo(todayIso, []);
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("20:00");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeReservation();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeReservation]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }
    setDate(todayIso());
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      date,
      time,
      guests: Number(guests),
      name: name.trim(),
      phone: phone.trim(),
      notes: notes.trim(),
      eventId: intent?.eventId,
      eventTitle: intent?.eventTitle,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, payload]));
    } catch {
      /* storage might be blocked */
    }

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `${ui("reserve.whatsappPrefix")} ${date} ${time}, ${guests} ${ui("reserve.guests").toLowerCase()}${
      intent?.eventTitle ? ` — ${intent.eventTitle}` : ""
    }${name ? `, ${name}` : ""}`
  );

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeReservation}
        aria-label={ui("a11y.close")}
      />
      <div
        dir={dir}
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto border border-[var(--color-gold)]/25 bg-[var(--color-base-elevated)] shadow-2xl sm:max-h-[90vh]"
      >
        <button
          type="button"
          onClick={closeReservation}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center border border-[var(--color-gold)]/40 text-[var(--color-gold-light)] transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
          aria-label={ui("a11y.close")}
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="px-6 py-12 text-center sm:px-10">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-300">
              <Check className="h-5 w-5" />
            </span>
            <h2 id={titleId} className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl tracking-[0.18em] text-gold-gradient uppercase">
              {ui("reserve.successTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm text-[var(--color-text-muted)]">{ui("reserve.successDesc")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={siteConfig.contact.phoneHref} className="btn-premium border border-[var(--color-gold)] px-6 py-3 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase">
                {ui("cta.callNow")}
              </a>
              <a
                href={`${siteConfig.contact.whatsappHref}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium border border-[var(--color-emerald)]/50 px-6 py-3 text-[10px] tracking-[0.2em] text-[var(--color-emerald)] uppercase"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-10 sm:px-10">
            <p className="text-[10px] tracking-[0.4em] text-[var(--color-pink)]/80 uppercase">{ui("reserve.kicker")}</p>
            <h2 id={titleId} className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl tracking-[0.18em] text-gold-gradient uppercase">
              {ui("reserve.title")}
            </h2>
            {intent?.eventTitle && (
              <p className="mt-3 text-xs tracking-[0.16em] text-[var(--color-gold-light)] uppercase">{intent.eventTitle}</p>
            )}
            <div className="gold-line mt-5 max-w-xs" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block text-[10px] tracking-[0.18em] text-[var(--color-gold)] uppercase">
                {ui("reserve.date")}
                <input
                  required
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full border border-[var(--color-gold)]/25 bg-black/50 px-3 py-2.5 text-sm tracking-normal text-[var(--color-text)] normal-case outline-none focus:border-[var(--color-gold)]"
                />
              </label>
              <label className="block text-[10px] tracking-[0.18em] text-[var(--color-gold)] uppercase">
                {ui("reserve.time")}
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-2 w-full border border-[var(--color-gold)]/25 bg-black/50 px-3 py-2.5 text-sm tracking-normal text-[var(--color-text)] normal-case outline-none focus:border-[var(--color-gold)]"
                >
                  {RESERVATION_TIMES.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-[10px] tracking-[0.18em] text-[var(--color-gold)] uppercase">
                {ui("reserve.guests")}
                <span className="relative mt-2 block">
                  <Users className="pointer-events-none absolute top-3 left-3 h-4 w-4 text-[var(--color-gold)]/60" />
                  <select
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full border border-[var(--color-gold)]/25 bg-black/50 py-2.5 pr-3 pl-10 text-sm tracking-normal text-[var(--color-text)] normal-case outline-none focus:border-[var(--color-gold)]"
                  >
                    {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </span>
              </label>
              <label className="block text-[10px] tracking-[0.18em] text-[var(--color-gold)] uppercase">
                {ui("reserve.phone")}
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full border border-[var(--color-gold)]/25 bg-black/50 px-3 py-2.5 text-sm tracking-normal text-[var(--color-text)] normal-case outline-none focus:border-[var(--color-gold)]"
                />
              </label>
              <label className="block text-[10px] tracking-[0.18em] text-[var(--color-gold)] uppercase sm:col-span-2">
                {ui("reserve.name")}
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full border border-[var(--color-gold)]/25 bg-black/50 px-3 py-2.5 text-sm tracking-normal text-[var(--color-text)] normal-case outline-none focus:border-[var(--color-gold)]"
                />
              </label>
              <label className="block text-[10px] tracking-[0.18em] text-[var(--color-gold)] uppercase sm:col-span-2">
                {ui("reserve.notes")}
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full resize-none border border-[var(--color-gold)]/25 bg-black/50 px-3 py-2.5 text-sm tracking-normal text-[var(--color-text)] normal-case outline-none focus:border-[var(--color-gold)]"
                />
              </label>
            </div>

            <button
              type="submit"
              className="btn-premium mt-8 inline-flex w-full items-center justify-center gap-2 border border-[var(--color-gold)] bg-[var(--color-gold)]/15 py-3.5 text-[11px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase"
            >
              <Calendar className="h-4 w-4" />
              {ui("reserve.submit")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
