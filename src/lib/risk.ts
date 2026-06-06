import type { Customer, Invoice, Order } from "../types/domain";

export function orderRiskLabel(order: Order): "normal" | "watch" | "urgent" {
  if (order.riskScore >= 80 || order.priority === "critical") return "urgent";
  if (order.riskScore >= 60 || order.priority === "high") return "watch";
  return "normal";
}

export function customerRiskScore(customer: Customer, invoices: Invoice[]): number {
  const overdueCount = invoices.filter((invoice) => invoice.customerId === customer.id && invoice.status === "overdue").length;
  const ticketPenalty = Math.min(customer.openTickets * 4, 24);
  const invoicePenalty = overdueCount * 12;
  return Math.max(0, Math.min(100, 100 - customer.healthScore + ticketPenalty + invoicePenalty));
}

export function explainRisk(order: Order): string {
  if (order.riskScore > 85) return "Critical risk order requires manual approval.";
  if (order.riskScore > 60) return "Watch order before release.";
  return "Normal fulfillment risk.";
}
