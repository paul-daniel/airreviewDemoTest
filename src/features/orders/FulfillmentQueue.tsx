import { orders } from "../../data/orders";
import { daysUntil } from "../../lib/date";

export function FulfillmentQueue() {
  const urgent = orders.filter((order) => daysUntil(order.promisedShipDate) <= 4);

  return (
    <section className="panel compact">
      <p className="eyebrow">Fulfillment</p>
      <h2>Upcoming shipment pressure</h2>
      <ul className="stack-list">
        {urgent.map((order) => (
          <li key={order.id}>
            <span>{order.id}</span>
            <strong>{daysUntil(order.promisedShipDate)} days</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
