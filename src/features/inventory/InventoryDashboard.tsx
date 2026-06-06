import { DataTable } from "../../components/DataTable";
import { StatusPill } from "../../components/StatusPill";
import { StatCard } from "../../components/StatCard";
import { useAsyncResource } from "../../hooks/useAsyncResource";
import { listInventoryPressure, lowInventoryCount } from "../../services/inventoryService";
import { reserveInventoryForOrder } from "../../services/inventoryService";

export function InventoryDashboard() {
  const { data } = useAsyncResource(listInventoryPressure, []);
  const rows = data ?? [];

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Inventory</p>
          <h2>Stock pressure</h2>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="Low or blocked" value={String(lowInventoryCount())} tone="warning" />
      </div>
      <button onClick={() => reserveInventoryForOrder("SKU-BAT-777", 20)}>Reserve battery pack</button>
      <DataTable
        rows={rows}
        rowKey={({ item }) => item.sku}
        columns={[
          { key: "sku", header: "SKU", render: ({ item }) => item.sku },
          { key: "name", header: "Name", render: ({ item }) => item.name },
          { key: "warehouse", header: "Warehouse", render: ({ item }) => item.warehouse },
          { key: "status", header: "Status", render: ({ item }) => <StatusPill label={item.status} tone={item.status === "blocked" ? "danger" : "neutral"} /> },
          { key: "pressure", header: "Pressure", render: ({ pressure }) => `${Math.round(pressure * 100)}%` }
        ]}
      />
    </section>
  );
}
