export const httpClient = (url, method = "GET") => {
  return fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
