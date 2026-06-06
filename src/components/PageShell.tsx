import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="shell">
      <header>
        <h1>Operations dashboard</h1>
        <p>Review orders, customers, and operational risk.</p>
      </header>
      <div className="content">{children}</div>
    </main>
  );
}
