import { useMemo, useState } from "react";
import { DataTable } from "../../components/DataTable";
import { EmptyState } from "../../components/EmptyState";
import { RiskBadge } from "../../components/RiskBadge";
import { StatusPill } from "../../components/StatusPill";
import { StatCard } from "../../components/StatCard";
import { Toolbar } from "../../components/Toolbar";
import { useAsyncResource } from "../../hooks/useAsyncResource";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { formatDate } from "../../lib/date";
import { formatMoney, sum } from "../../lib/money";
import { getCustomerName } from "../../services/customerService";
import { listOrderSummaries } from "../../services/orderService";
import { releaseOrderWithOverride, sortOrdersForExport } from "../../services/orderService";
import { exportOrdersCsv } from "../../services/exportService";
import { useAppContext } from "../../state/AppContext";

export function OrderDashboard() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 150);
  const { data, loading, error } = useAsyncResource(listOrderSummaries, []);
  const { currentUser } = useAppContext();
  const rows = data ?? [];
  const filtered = useMemo(() => {
    const normalized = debouncedQuery.trim().toLowerCase();
    if (!normalized) return rows;
    return rows.filter(({ order }) => order.id.toLowerCase().includes(normalized) || getCustomerName(order.customerId).toLowerCase().includes(normalized));
  }, [debouncedQuery, rows]);
  const exportPreview = exportOrdersCsv(sortOrdersForExport(rows.map(({ order }) => order))).slice(0, 120);
  const highRiskOrders = rows.filter(({ order }) => order.riskScore > 70);
  const totalRevenue = sum(rows.map(({ order }) => order.amount));

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Orders</p>
          <h2>Release and fulfillment queue</h2>
        </div>
        <span>{rows.length} orders</span>
      </div>
      <div className="stats-grid">
        <StatCard label="High risk" value={String(highRiskOrders.length)} tone="danger" />
        <StatCard label="Total value" value={formatMoney(totalRevenue, "USD")} caption="mixed currency demo" />
        <StatCard label="Queue size" value={String(rows.length)} />
      </div>
      <Toolbar query={query} onQueryChange={setQuery} />
      <button
        onClick={() => {
          const first = rows[0]?.order;
          if (first) void releaseOrderWithOverride(first, currentUser.id);
        }}
      >
        Release first blocked order
      </button>
      <pre className="export-preview">{exportPreview}</pre>
      {loading ? <EmptyState title="Loading orders" body="Fetching operational queue..." /> : null}
      {error ? <EmptyState title="Could not load orders" body={error} /> : null}
      {!loading && !filtered.length ? <EmptyState title="No matching orders" body="Try another search term." /> : null}
      {filtered.length ? (
        <DataTable
          rows={filtered}
          rowKey={({ order }) => order.id}
          columns={[
            { key: "id", header: "Order", render: ({ order }) => order.id },
            { key: "customer", header: "Customer", render: ({ order }) => getCustomerName(order.customerId) },
            { key: "date", header: "Ship by", render: ({ order }) => formatDate(order.promisedShipDate) },
            { key: "status", header: "Status", render: ({ order }) => <StatusPill label={order.status} /> },
            { key: "risk", header: "Risk", render: ({ order }) => <RiskBadge value={order.riskScore} /> },
            { key: "amount", header: "Amount", render: ({ order }) => formatMoney(order.amount, order.currency) }
          ]}
        />
      ) : null}
    </section>
  );
}
