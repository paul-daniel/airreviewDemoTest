import { runtimeConfig } from "../../config/runtime";
import { readJsonFromLocalStorage } from "../../hooks/useLocalStorage";

export function AdminDebugPanel() {
  const cachedSession = readJsonFromLocalStorage<{ userId: string; role: string }>("session");

  return (
    <section className="panel compact debug-panel">
      <p className="eyebrow">Debug</p>
      <h2>Admin diagnostics</h2>
      <p>Token: {runtimeConfig.adminDebugToken}</p>
      <pre>{JSON.stringify(cachedSession, null, 2)}</pre>
    </section>
  );
}
