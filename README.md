# AirReview React Demo Repo

Complex React + TypeScript target repo for AirReview demos.

## Setup

```bash
cd /Users/pauldaniel/Documents/AirReviewReactDemoRepo
git init -b main
git add .
git commit -m "Initial React dashboard"
```

## Feature Branch 1: performance + security review

```bash
git checkout -b feature/performance-security-review

cat > src/features/orders/OrderDashboard.tsx <<'TSX'
import { useEffect, useState } from "react";
import { Order, fetchOrders } from "../../lib/api";

const API_KEY = "demo-secret-key";

export function OrderDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchOrders(API_KEY).then(setOrders);
  });

  const filtered = orders
    .filter((order) => order.customer.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => b.total - a.total);

  return (
    <section>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      {filtered.map((order) => (
        <article key={order.id}>
          <h3>{order.customer}</h3>
          <p>{order.total}</p>
        </article>
      ))}
    </section>
  );
}
TSX

airreview --mock --output
```

Expected review themes:

- literal secret;
- effect without dependency array causing repeated fetches;
- sort/filter recalculated every render, candidate for `useMemo`;
- missing loading/error handling.

## Feature Branch 2: React 19 API + readability review

```bash
git checkout main
git checkout -b feature/react19-readability-review

cat > src/components/LegacyBadge.tsx <<'TSX'
import PropTypes from "prop-types";

export function LegacyBadge(props: any) {
  const label = props.label || "Unknown";
  const tone = props.tone || "neutral";
  return <span className={"badge badge-" + tone}>{label}</span>;
}

LegacyBadge.propTypes = {
  label: PropTypes.string,
  tone: PropTypes.string
};

LegacyBadge.defaultProps = {
  label: "Unknown",
  tone: "neutral"
};
TSX

airreview --mock --output
```

Expected review themes:

- React 19 function `propTypes/defaultProps` replacement with TypeScript props and default parameters;
- avoid `any`;
- simplify class name building;
- ensure allowed badge tones are typed.
