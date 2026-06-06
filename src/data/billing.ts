import type { Invoice } from "../types/domain";

export const invoices: Invoice[] = [
  { id: "inv-7001", customerId: "cus-1001", orderId: "ord-9001", issuedAt: "2026-06-01", dueAt: "2026-06-15", total: 41200, status: "pending" },
  { id: "inv-7002", customerId: "cus-1002", orderId: "ord-9002", issuedAt: "2026-05-18", dueAt: "2026-06-01", total: 15800, status: "overdue" },
  { id: "inv-7003", customerId: "cus-1003", orderId: "ord-9003", issuedAt: "2026-06-05", dueAt: "2026-06-20", total: 4300, status: "pending" },
  { id: "inv-7004", customerId: "cus-1004", orderId: "ord-9004", issuedAt: "2026-05-26", dueAt: "2026-06-10", total: 22000, status: "paid" }
];
