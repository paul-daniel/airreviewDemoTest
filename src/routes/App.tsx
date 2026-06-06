import { OrderDashboard } from "../features/orders/OrderDashboard";
import { CustomerSummary } from "../features/customers/CustomerSummary";
import { PageShell } from "../components/PageShell";

export function App() {
  return (
    <PageShell>
      <CustomerSummary />
      <OrderDashboard />
    </PageShell>
  );
}
