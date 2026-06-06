import type { AuditEvent } from "../types/domain";

export const auditEvents: AuditEvent[] = [
  { id: "evt-1", actor: "Maya Chen", action: "released order", entity: "ord-9004", createdAt: "2026-06-05T12:20:00Z" },
  { id: "evt-2", actor: "Nina Diallo", action: "added risk note", entity: "ord-9002", createdAt: "2026-06-05T10:12:00Z" },
  { id: "evt-3", actor: "system", action: "inventory sync completed", entity: "SKU-AIR-100", createdAt: "2026-06-05T09:00:00Z" },
  { id: "evt-4", actor: "support-bot", action: "opened escalation lane", entity: "ord-9005", createdAt: "2026-06-06T09:15:00Z" }
];
