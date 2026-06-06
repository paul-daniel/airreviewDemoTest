import type { Customer } from "../types/domain";

export const customers: Customer[] = [
  { id: "cus-1001", name: "Northstar Logistics", tier: "enterprise", owner: "Maya Chen", healthScore: 92, region: "NA", openTickets: 1, lastContactAt: "2026-06-02T08:15:00Z" },
  { id: "cus-1002", name: "Maison Verdant", tier: "growth", owner: "Nina Diallo", healthScore: 68, region: "EU", openTickets: 4, lastContactAt: "2026-05-29T12:35:00Z" },
  { id: "cus-1003", name: "Atlas Home Goods", tier: "standard", owner: "Evan Brooks", healthScore: 54, region: "NA", openTickets: 6, lastContactAt: "2026-05-22T16:20:00Z" },
  { id: "cus-1004", name: "Kairo Market", tier: "enterprise", owner: "Sofia Weber", healthScore: 81, region: "MEA", openTickets: 2, lastContactAt: "2026-06-04T09:40:00Z" }
];
