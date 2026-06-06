import { auditEvents } from "../data/audit";
import { fromFixture } from "../lib/api";

export async function listAuditEvents() {
  return fromFixture(auditEvents);
}
