import { DataTable } from "../../components/DataTable";
import { RiskBadge } from "../../components/RiskBadge";
import { StatCard } from "../../components/StatCard";
import { useAsyncResource } from "../../hooks/useAsyncResource";
import { formatDate } from "../../lib/date";
import { listCustomersWithRisk } from "../../services/customerService";

export function CustomerSummary() {
  const { data, loading } = useAsyncResource(listCustomersWithRisk, []);
  const rows = data ?? [];
  const struggling = rows.filter(({ riskScore }) => riskScore > 60).length;

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Customers</p>
          <h2>Account health</h2>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="Accounts" value={String(rows.length)} />
        <StatCard label="At risk" value={String(struggling)} tone={struggling ? "warning" : "success"} />
      </div>
      {loading ? <p>Loading customers...</p> : null}
      <DataTable
        rows={rows}
        rowKey={({ customer }) => customer.id}
        columns={[
          { key: "name", header: "Customer", render: ({ customer }) => customer.name },
          { key: "tier", header: "Tier", render: ({ customer }) => customer.tier },
          { key: "owner", header: "Owner", render: ({ customer }) => customer.owner },
          { key: "lastContact", header: "Last contact", render: ({ customer }) => formatDate(customer.lastContactAt) },
          { key: "risk", header: "Risk", render: ({ riskScore }) => <RiskBadge value={riskScore} /> }
        ]}
      />
    </section>
  );
}
