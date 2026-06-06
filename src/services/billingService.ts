import { invoices } from "../data/billing";
import { fromFixture } from "../lib/api";
import { daysUntil } from "../lib/date";

export async function listInvoiceAging() {
  return fromFixture(
    invoices.map((invoice) => ({
      invoice,
      dueInDays: daysUntil(invoice.dueAt)
    }))
  );
}

export function overdueTotal(): number {
  return invoices.filter((invoice) => invoice.status === "overdue").reduce((total, invoice) => total + invoice.total, 0);
}
