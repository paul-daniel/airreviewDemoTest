import { auditEvents } from "../data/audit";
import { fromFixture } from "../lib/api";

export async function listAuditEvents() {
  return fromFixture(auditEvents);
}

export function sendAuditBeacon(action: string, entity: string) {
  navigator.sendBeacon("/internal/audit", JSON.stringify({ action, entity, at: new Date().toISOString() }));
}
