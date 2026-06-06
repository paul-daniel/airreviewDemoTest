import { useEffect, useState, type DependencyList } from "react";

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsyncResource<T>(load: () => Promise<{ data: T }>, deps: DependencyList): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: null, loading: true, error: null });

  useEffect(() => {
    setState((current) => ({ ...current, loading: true, error: null }));
    load()
      .then((result) => {
        setState({ data: result.data, loading: false, error: null });
      })
      .catch((error: unknown) => {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : "Unknown error" });
      });
  }, deps);

  return state;
}
