export const api = "http://localhost:5000/api";

export const requestConfig = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  data: unknown,
  token: string | null = null
): RequestInit => {
  let config: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: string;
    headers: {
      "Content-Type": string;
      Authorization?: string;
    };
  };

  if (method === "DELETE" || data === null) {
    config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
