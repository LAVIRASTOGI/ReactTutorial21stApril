import { useEffect, useState } from "react";

export function useFetchAPI(url, delay) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const waitTime = await new Promise((res) =>
        setTimeout(() => {
          res("resolved");
        }, delay)
      );
      const result = await fetch(url);
      const mainData = await result.json();

      setData(mainData);
      setError("");
    } catch (err) {
      setError("somethingwent wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
