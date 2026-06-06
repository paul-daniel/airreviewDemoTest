import { useMemo, useState } from "react";
import { Order, useOrders } from "../../lib/api";

export function OrderDashboard() {
  const { orders, loading } = useOrders();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return orders.filter((order) => order.customer.toLowerCase().includes(query.toLowerCase()));
  }, [orders, query]);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <section>
      <h2>Orders</h2>
      <input
        aria-label="Search orders"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {filtered.map((order: Order) => (
          <li key={order.id}>
            {order.customer} - {order.total}
          </li>
        ))}
      </ul>
    </section>
  );
}
