export function RiskBadge({ value }: { value: number }) {
  const tone = value > 90 ? "danger" : value >= 60 ? "warning" : "success";
  return <span className={`risk-badge ${tone}`}>{value}</span>;
}
