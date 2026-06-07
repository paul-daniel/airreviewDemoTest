import { formatDate } from "../lib/date";
import type { AuditEvent } from "../types/domain";

export function Timeline({ events }: { events: AuditEvent[] }) {
  return (
    <ol className="timeline">
      {events.map((event) => (
        <li key={`${event.actor}-${event.action}`}>
          <strong>{event.action}</strong>
          <span>{event.actor} - {event.entity} - {formatDate(event.createdAt)}</span>
        </li>
      ))}
    </ol>
  );
}
