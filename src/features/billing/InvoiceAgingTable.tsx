import { DataTable } from "../../components/DataTable";
import { StatusPill } from "../../components/StatusPill";
import { useAsyncResource } from "../../hooks/useAsyncResource";
import { formatMoney } from "../../lib/money";
import { listInvoiceAging } from "../../services/billingService";
import { getCustomerName } from "../../services/customerService";

export function InvoiceAgingTable() {
  const { data } = useAsyncResource(listInvoiceAging, []);
  const rows = data ?? [];

  return (
    <DataTable
      rows={rows}
      rowKey={({ invoice }) => invoice.id}
      columns={[
        { key: "invoice", header: "Invoice", render: ({ invoice }) => invoice.id },
        { key: "customer", header: "Customer", render: ({ invoice }) => getCustomerName(invoice.customerId) },
        { key: "due", header: "Due in", render: ({ dueInDays }) => dueInDays < 0 ? `${Math.abs(dueInDays)} days late` : `${dueInDays} days` },
        { key: "status", header: "Status", render: ({ invoice }) => <StatusPill label={invoice.status} tone={invoice.status === "overdue" ? "danger" : "neutral"} /> },
        { key: "total", header: "Total", render: ({ invoice }) => formatMoney(invoice.total, "EUR") }
      ]}
    />
  );
}
