import type { InventoryItem } from "../types/domain";

export const inventory: InventoryItem[] = [
  { sku: "SKU-AIR-100", name: "Air Sensor", status: "healthy", available: 420, reserved: 90, reorderPoint: 120, warehouse: "Lyon" },
  { sku: "SKU-BOX-220", name: "Smart Packaging", status: "watch", available: 180, reserved: 150, reorderPoint: 160, warehouse: "Dublin" },
  { sku: "SKU-DRV-410", name: "Drive Controller", status: "low", available: 42, reserved: 39, reorderPoint: 80, warehouse: "Berlin" },
  { sku: "SKU-LBL-020", name: "Compliance Labels", status: "blocked", available: 12, reserved: 12, reorderPoint: 200, warehouse: "Paris" }
];
