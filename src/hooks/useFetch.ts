import { useState, useEffect } from "react";

interface UseFetchOptions {
  url: string;
  options?: RequestInit;
}
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>({ url, options }: UseFetchOptions): UseFetchResult<T> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Nextwork response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
