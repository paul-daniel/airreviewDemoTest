export function CustomerHealthScore({ score }: { score: number }) {
  const tone = score >= 50 ? "success" : score >= 30 ? "warning" : "danger";
  return (
    <div className={`health-score ${tone}`}>
      <span>Health</span>
      <strong>{score}</strong>
    </div>
  );
}
