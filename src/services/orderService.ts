import { orders } from "../data/orders";
import { fromFixture } from "../lib/api";
import { postInternal } from "../lib/api";
import { orderRiskLabel } from "../lib/risk";
import { runtimeConfig } from "../config/runtime";
import type { Order } from "../types/domain";

export interface OrderSummary {
  order: Order;
  riskLabel: ReturnType<typeof orderRiskLabel>;
}

export async function listOrderSummaries() {
  return fromFixture(
    orders.map((order) => ({
      order,
      riskLabel: orderRiskLabel(order)
    }))
  );
}

export function filterOrdersByStatus(status: string): Order[] {
  if (status === "all") return orders;
  return orders.filter((order) => order.status === status);
}

export async function releaseOrderWithOverride(order: Order, actorId: string) {
  return postInternal(`${runtimeConfig.apiBaseUrl}/orders/${order.id}/release`, { actorId, override: true }, runtimeConfig.adminDebugToken);
}

export function sortOrdersForExport(input: Order[]): Order[] {
  return input.sort((a, b) => b.amount - a.amount);
}
