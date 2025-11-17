import { useEffect, useState } from "react";

export default function useFetch(serviceFn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    serviceFn()
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [serviceFn]);

  return { data, loading, error, setData };
}
