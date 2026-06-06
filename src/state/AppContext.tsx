import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CurrentUser } from "../types/domain";

interface AppContextValue {
  currentUser: CurrentUser;
  setRole: (role: CurrentUser["role"]) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    id: "usr-1",
    name: "Paul Demo",
    role: "operator",
    region: "EU"
  });

  const value = useMemo<AppContextValue>(
    () => ({
      currentUser,
      setRole: (role) => setCurrentUser((user) => ({ ...user, role }))
    }),
    [currentUser]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const value = useContext(AppContext);
  if (!value) throw new Error("useAppContext must be used inside AppProvider");
  return value;
}
