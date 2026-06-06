import type { ReactNode } from "react";
import { useAppContext } from "../state/AppContext";

export function PageShell({ children }: { children: ReactNode }) {
  const { currentUser } = useAppContext();

  return (
    <div className="page-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">AirOps Console</p>
          <h1>Commerce operations cockpit</h1>
        </div>
        <span className="status-pill">{currentUser.role}</span>
      </header>
      {children}
    </div>
  );
}
