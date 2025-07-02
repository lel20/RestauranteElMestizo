import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [datos, setDatos] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const cargarApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setDatos(data);

        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
        setLoading(false);
      }
    };
    cargarApi();
  }, [url]);
  return { datos, loading, error };
}
