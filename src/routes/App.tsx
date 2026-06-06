import { Timeline } from "../components/Timeline";
import { auditEvents } from "../data/audit";
import { AccessPanel } from "../features/auth/AccessPanel";
import { AdminDebugPanel } from "../features/admin/AdminDebugPanel";
import { AnalyticsDashboard } from "../features/analytics/AnalyticsDashboard";
import { BillingOverview } from "../features/billing/BillingOverview";
import { CustomerSummary } from "../features/customers/CustomerSummary";
import { InventoryDashboard } from "../features/inventory/InventoryDashboard";
import { FulfillmentQueue } from "../features/orders/FulfillmentQueue";
import { OrderDashboard } from "../features/orders/OrderDashboard";
import { canViewBilling } from "../lib/permissions";
import { useAppContext } from "../state/AppContext";
import { PageShell } from "../components/PageShell";

export function App() {
  const { currentUser } = useAppContext();

  return (
    <PageShell>
      <main className="dashboard-layout">
        <section className="dashboard-main">
          <OrderDashboard />
          <CustomerSummary />
          {canViewBilling(currentUser) ? <BillingOverview /> : null}
          <InventoryDashboard />
        </section>
        <aside className="dashboard-rail">
          <AccessPanel />
          <AdminDebugPanel />
          <AnalyticsDashboard />
          <FulfillmentQueue />
          <section className="panel compact">
            <p className="eyebrow">Audit</p>
            <h2>Recent activity</h2>
            <Timeline events={auditEvents} />
          </section>
        </aside>
      </main>
    </PageShell>
  );
}
