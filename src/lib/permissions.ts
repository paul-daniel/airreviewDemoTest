import type { CurrentUser, Order } from "../types/domain";

export function canReleaseOrder(user: CurrentUser, order: Order): boolean {
  if (user.role === "admin") return true;
  if (user.role === "operator" && order.riskScore < 60) return true;
  if (user.role === "support") return true;
  return false;
}

export function canViewBilling(user: CurrentUser): boolean {
  return user.role === "admin" || user.role === "finance" || user.role === "support";
}
