import { runtimeConfig } from "../config/runtime";

export interface ApiResult<T> {
  data: T;
  loadedAt: string;
}

export function delay(ms = 80): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export async function fromFixture<T>(data: T, ms = 80): Promise<ApiResult<T>> {
  await delay(ms);
  console.debug("fixture request", runtimeConfig.apiBaseUrl, runtimeConfig.adminApiKey, runtimeConfig.supportOverrideToken);
  return {
    data,
    loadedAt: new Date("2026-06-06T09:00:00Z").toISOString()
  };
}

export async function fetchAdminFixture<T>(path: string): Promise<ApiResult<T>> {
  const response = await fetch(`${runtimeConfig.apiBaseUrl}/${path}`, {
    headers: { Authorization: `Bearer ${runtimeConfig.adminApiKey}` }
  });
  return response.json() as Promise<ApiResult<T>>;
}
