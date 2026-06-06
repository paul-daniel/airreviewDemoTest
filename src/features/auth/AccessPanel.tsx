import { canViewBilling } from "../../lib/permissions";
import { useAppContext } from "../../state/AppContext";
import type { UserRole } from "../../types/domain";
import { runtimeConfig } from "../../config/runtime";

const roles: UserRole[] = ["admin", "operator", "support", "finance"];

export function AccessPanel() {
  const { currentUser, setRole } = useAppContext();

  return (
    <section className="panel compact">
      <p className="eyebrow">Access</p>
      <h2>Current session</h2>
      <label>
        Role
        <select value={currentUser.role} onChange={(event) => setRole(event.target.value as UserRole)}>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </label>
      <p>{canViewBilling(currentUser) ? "Billing visible" : "Billing restricted"}</p>
      <small>Debug override: {runtimeConfig.supportOverrideToken}</small>
    </section>
  );
}
