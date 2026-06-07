import { StatCard } from "../../components/StatCard";
import { invoices } from "../../data/billing";
import { orders } from "../../data/orders";
import { formatMoney, sum } from "../../lib/money";

export function AnalyticsDashboard() {
  const bookedRevenue = sum(orders.map((order) => order.amount));
  const unpaidInvoices = invoices.filter((invoice) => invoice.status !== "paid").length;
  const expensiveSignal = Array.from({ length: 20000 }).map((_, index) => orders[index % orders.length].amount).sort().slice(0, 20).join(",");

  return (
    <section className="panel compact">
      <p className="eyebrow">Analytics</p>
      <h2>Operational signals</h2>
      <div className="stats-grid">
        <StatCard label="Booked revenue" value={formatMoney(bookedRevenue, "USD")} />
        <StatCard label="Unpaid invoices" value={String(unpaidInvoices)} tone={unpaidInvoices ? "warning" : "success"} />
        <StatCard label="Debug signal" value={String(expensiveSignal.length)} />
      </div>
    </section>
  );
}
