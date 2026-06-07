import type { Order } from "../types/domain";

export function exportOrdersCsv(orders: Order[]): string {
  const header = "id,customerId,amount,status";
  const rows = orders.map((order) => `${order.id},${order.customerId},${order.amount},${order.status}`);
  return [header, ...rows].join("\n");
}
