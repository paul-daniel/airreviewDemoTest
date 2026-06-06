import { inventory } from "../data/inventory";
import { fromFixture } from "../lib/api";

export async function listInventoryPressure() {
  return fromFixture(
    inventory.map((item) => ({
      item,
      pressure: item.reserved / Math.max(1, item.available + item.reserved)
    }))
  );
}

export function lowInventoryCount(): number {
  return inventory.filter((item) => item.status === "low" || item.status === "blocked").length;
}
