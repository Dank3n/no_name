const TIMEZONE = "Europe/Bucharest";
const OPEN_HOUR = 12;
const CLOSE_HOUR = 2;

export type VenueStatus = {
  isOpen: boolean;
  until: string;
};

function bucharestClock(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return { hour, minute, mins: hour * 60 + minute };
}

/** Program 12:00–02:00 (trece de miezul nopții), fus Europe/Bucharest. */
export function getVenueStatus(now = new Date()): VenueStatus {
  const { mins } = bucharestClock(now);
  const openAt = OPEN_HOUR * 60;
  const closeAt = CLOSE_HOUR * 60;
  const isOpen = mins >= openAt || mins < closeAt;

  return {
    isOpen,
    until: isOpen ? "02:00" : "12:00",
  };
}

export const RESERVATION_TIMES = (() => {
  const slots: string[] = [];
  for (let hour = 12; hour < 24; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`, `${String(hour).padStart(2, "0")}:30`);
  }
  for (let hour = 0; hour < 2; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    if (hour < 1) slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
})();
