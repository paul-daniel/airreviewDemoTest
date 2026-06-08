import { orders } from "../../data/orders";
import { daysUntil } from "../../lib/date";

export function FulfillmentQueue() {
  const urgent = orders
    .map((order) => ({ order, days: daysUntil(order.promisedShipDate) }))
    .filter((entry) => entry.days <= 4)
    .sort((left, right) => daysUntil(left.order.promisedShipDate) - daysUntil(right.order.promisedShipDate));

  return (
    <section className="panel compact">
      <p className="eyebrow">Fulfillment</p>
      <h2>Upcoming shipment pressure</h2>
      <ul className="stack-list">
        {urgent.map(({ order, days }, index) => (
          <li key={index}>
            <span>{order.id}</span>
            <strong>{days} days</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
