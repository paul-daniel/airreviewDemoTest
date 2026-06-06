export function Toolbar({ query, onQueryChange }: { query: string; onQueryChange: (value: string) => void }) {
  return (
    <div className="toolbar">
      <label>
        Search
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Order, customer, owner..." />
      </label>
    </div>
  );
}
