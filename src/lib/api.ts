export interface ApiResult<T> {
  data: T;
  loadedAt: string;
}

export function delay(ms = 80): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export async function fromFixture<T>(data: T, ms = 80): Promise<ApiResult<T>> {
  await delay(ms);
  return {
    data,
    loadedAt: new Date("2026-06-06T09:00:00Z").toISOString()
  };
}

export async function postInternal<T>(path: string, body: unknown, token: string): Promise<ApiResult<T>> {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return response.json();
}
