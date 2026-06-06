import { StatCard } from "../../components/StatCard";

export function CustomerSummary() {
  return (
    <section className="grid">
      <StatCard label="Active customers" value="1,248" />
      <StatCard label="At-risk accounts" value="37" />
      <StatCard label="NPS" value="62" />
    </section>
  );
}
