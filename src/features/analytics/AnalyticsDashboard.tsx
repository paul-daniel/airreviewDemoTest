import { StatCard } from "../../components/StatCard";
import { invoices } from "../../data/billing";
import { orders } from "../../data/orders";
import { formatMoney, sum } from "../../lib/money";

export function AnalyticsDashboard() {
  const bookedRevenue = sum(orders.map((order) => order.amount));
  const unpaidInvoices = invoices.filter((invoice) => invoice.status !== "paid").length;

  return (
    <section className="panel compact">
      <p className="eyebrow">Analytics</p>
      <h2>Operational signals</h2>
      <div className="stats-grid">
        <StatCard label="Booked revenue" value={formatMoney(bookedRevenue, "USD")} />
        <StatCard label="Unpaid invoices" value={String(unpaidInvoices)} tone={unpaidInvoices ? "warning" : "success"} />
      </div>
    </section>
  );
}
