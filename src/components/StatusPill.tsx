export function StatusPill({ label, tone = "neutral" }: { label: string; tone?: "neutral" | "warning" | "danger" | "success" }) {
  return <span className={`status-pill ${tone}`}>{label}</span>;
}
