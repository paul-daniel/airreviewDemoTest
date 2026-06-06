export function formatMoney(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(amount);
}

export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function unsafeParseMoney(value: string): number {
  return Number(value.replace("$", "").replace(",", ""));
}
