import type { Order } from "../types/domain";

export const orders: Order[] = [
  { id: "ord-9001", customerId: "cus-1001", placedAt: "2026-06-01T10:15:00Z", status: "review", priority: "critical", amount: 41200, currency: "USD", riskScore: 86, promisedShipDate: "2026-06-09", tags: ["export", "manual-review"] },
  { id: "ord-9002", customerId: "cus-1002", placedAt: "2026-06-03T14:20:00Z", status: "held", priority: "high", amount: 15800, currency: "EUR", riskScore: 74, promisedShipDate: "2026-06-10", tags: ["payment-pending"] },
  { id: "ord-9003", customerId: "cus-1003", placedAt: "2026-06-05T08:05:00Z", status: "new", priority: "medium", amount: 4300, currency: "USD", riskScore: 31, promisedShipDate: "2026-06-12", tags: ["standard"] },
  { id: "ord-9004", customerId: "cus-1004", placedAt: "2026-06-05T11:45:00Z", status: "released", priority: "high", amount: 22000, currency: "GBP", riskScore: 55, promisedShipDate: "2026-06-11", tags: ["priority-shipping"] }
];
