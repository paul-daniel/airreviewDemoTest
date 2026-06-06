export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

export function daysUntil(value: string, today = new Date("2026-06-06T00:00:00Z")): number {
  const target = new Date(value);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / 86_400_000);
}
