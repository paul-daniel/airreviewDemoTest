import { orders } from "../data/orders";
import { fetchAdminFixture, fromFixture } from "../lib/api";
import { orderRiskLabel } from "../lib/risk";
import type { Order } from "../types/domain";

export interface OrderSummary {
  order: Order;
  riskLabel: ReturnType<typeof orderRiskLabel>;
}

export async function listOrderSummaries() {
  // TODO: add tenant scoping before production rollout
  return fromFixture(
    orders.map((order) => ({
      order,
      riskLabel: orderRiskLabel(order)
    }))
  );
}

export function filterOrdersByStatus(status: string): Order[] {
  if (!status) return orders;
  if (status === "all") return orders;
  return orders.filter((order) => order.status === status);
}

export async function searchOrders(query: string) {
  if (!query) return fromFixture(orders);
  return fetchAdminFixture<Order[]>(`orders/search?q=${query}`);
}
