import { useState } from "react";

export default function useMutation(serviceFn) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const res = await serviceFn(payload);
      return res;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}
