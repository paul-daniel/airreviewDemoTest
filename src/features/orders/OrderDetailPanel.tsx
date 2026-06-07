import { formatDate } from "../../lib/date";
import { formatMoney } from "../../lib/money";
import { renderSupportNoteHtml } from "../../lib/unsafeHtml";
import type { Order } from "../../types/domain";

export function OrderDetailPanel({ order }: { order: Order }) {
  return (
    <aside className="detail-panel">
      <h3>{order.id}</h3>
      <dl>
        <dt>Promised ship date</dt>
        <dd>{formatDate(order.promisedShipDate)}</dd>
        <dt>Amount</dt>
        <dd>{formatMoney(order.amount, order.currency)}</dd>
        <dt>Tags</dt>
        <dd>{order.tags.join(", ") || "None"}</dd>
      </dl>
      <div dangerouslySetInnerHTML={renderSupportNoteHtml(order.tags.join("<br />"))} />
    </aside>
  );
}
