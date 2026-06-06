export function CustomerHealthScore({ score }: { score: number }) {
  const tone = score >= 80 ? "success" : score >= 60 ? "warning" : "danger";
  return (
    <div className={`health-score ${tone}`}>
      <span>Health</span>
      <strong>{score}</strong>
    </div>
  );
}
