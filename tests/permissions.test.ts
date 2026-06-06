import { describe, expect, test } from "vitest";
import { canReleaseOrder, canViewBilling } from "../src/lib/permissions";
import type { CurrentUser, Order } from "../src/types/domain";

const order: Order = {
  id: "ord-test",
  customerId: "cus-test",
  placedAt: "2026-06-01T00:00:00Z",
  status: "review",
  priority: "medium",
  amount: 100,
  currency: "USD",
  riskScore: 35,
  promisedShipDate: "2026-06-08",
  tags: []
};

const user = (role: CurrentUser["role"]): CurrentUser => ({ id: role, name: role, role, region: "EU" });

describe("permissions", () => {
  test("allows finance users to view billing", () => {
    expect(canViewBilling(user("finance"))).toBe(true);
  });

  test("allows support release only on low-risk review orders", () => {
    expect(canReleaseOrder(user("support"), order)).toBe(true);
    expect(canReleaseOrder(user("support"), { ...order, riskScore: 70 })).toBe(false);
  });
});
