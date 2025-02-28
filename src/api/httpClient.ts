export const httpClient = <TResponse = unknown>(url: string) => {
  return fetch(url, {
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json() as TResponse);
};
