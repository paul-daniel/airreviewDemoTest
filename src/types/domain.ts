export type Priority = "low" | "medium" | "high" | "critical";
export type OrderStatus = "new" | "review" | "held" | "released" | "fulfilled";
export type PaymentStatus = "paid" | "pending" | "overdue" | "failed";
export type InventoryStatus = "healthy" | "watch" | "low" | "blocked";
export type UserRole = "admin" | "support" | "finance" | "operator";

export interface Customer {
  id: string;
  name: string;
  tier: "standard" | "growth" | "enterprise";
  owner: string;
  healthScore: number;
  region: string;
  openTickets: number;
  lastContactAt: string;
}

export interface Order {
  id: string;
  customerId: string;
  placedAt: string;
  status: OrderStatus;
  priority: Priority;
  amount: number;
  currency: "USD" | "EUR" | "GBP";
  riskScore: number;
  promisedShipDate: string;
  tags: string[];
}

export interface InventoryItem {
  sku: string;
  name: string;
  status: InventoryStatus;
  available: number;
  reserved: number;
  reorderPoint: number;
  warehouse: string;
}

export interface Invoice {
  id: string;
  customerId: string;
  orderId: string;
  issuedAt: string;
  dueAt: string;
  total: number;
  status: PaymentStatus;
}

export interface AuditEvent {
  id: string;
  actor: string;
  action: string;
  entity: string;
  createdAt: string;
}

export interface CurrentUser {
  id: string;
  name: string;
  role: UserRole;
  region: string;
}
