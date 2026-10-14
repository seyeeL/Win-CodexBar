function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

/** Local-time `YYYY-MM-DD HH:mm` for a reset instant (24-hour clock). */
export function formatResetDateTime(target: Date): string {
  return (
    `${target.getFullYear()}-${pad2(target.getMonth() + 1)}-${pad2(target.getDate())} ` +
    `${pad2(target.getHours())}:${pad2(target.getMinutes())}`
  );
}

/** Append the absolute reset time to a relative countdown: "Resets in 2h 5m · 2026-10-14 10:00". */
export function withResetDateTime(countdown: string, target: number): string {
  return `${countdown} · ${formatResetDateTime(new Date(target))}`;
}
