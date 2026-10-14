import { describe, expect, it } from "vitest";
import { formatResetDateTime, withResetDateTime } from "./resetDateTime";

describe("formatResetDateTime", () => {
  it("formats local time as zero-padded YYYY-MM-DD HH:mm", () => {
    expect(formatResetDateTime(new Date(2026, 9, 14, 10, 0))).toBe("2026-10-14 10:00");
    expect(formatResetDateTime(new Date(2026, 0, 5, 9, 7))).toBe("2026-01-05 09:07");
    expect(formatResetDateTime(new Date(2026, 11, 31, 23, 59, 59))).toBe("2026-12-31 23:59");
  });

  it("appends the absolute time to a countdown", () => {
    expect(withResetDateTime("Resets in 2h", new Date(2026, 9, 14, 10, 0).getTime())).toBe(
      "Resets in 2h · 2026-10-14 10:00",
    );
  });
});
