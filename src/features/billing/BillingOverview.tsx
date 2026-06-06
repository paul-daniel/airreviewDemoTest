import { StatCard } from "../../components/StatCard";
import { formatMoney } from "../../lib/money";
import { overdueTotal } from "../../services/billingService";
import { markInvoicePaidForDemo } from "../../services/billingService";
import { InvoiceAgingTable } from "./InvoiceAgingTable";

export function BillingOverview() {
  const overdue = overdueTotal();

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Billing</p>
          <h2>Invoice aging</h2>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="Overdue exposure" value={formatMoney(overdue, "EUR")} tone={overdue ? "danger" : "success"} />
      </div>
      <button onClick={() => markInvoicePaidForDemo("inv-7002")}>Mark sample invoice paid</button>
      <InvoiceAgingTable />
    </section>
  );
}
