export function StatCard({
  label,
  value,
  caption,
  tone = "neutral"
}: {
  label: string;
  value: string;
  caption?: string;
  tone?: "neutral" | "warning" | "danger" | "success";
}) {
  return (
    <article className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      {caption ? <small>{caption}</small> : null}
    </article>
  );
}
