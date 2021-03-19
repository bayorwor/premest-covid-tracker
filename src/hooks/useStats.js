import { useEffect, useState } from "react";

const useStats = (url) => {
  const [stats, setStats] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => setError(err));
      setStats(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    stats,
    loading,
    error,
  };
};

export default useStats;
