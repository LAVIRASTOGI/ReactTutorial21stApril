import { useState, useEffect, useRef, useCallback } from "react";

function LazyLoadingExample1() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, index) => "item" + index)
  );
  const [loading, setLoading] = useState(false);

  // prevents overlapping loads (stable across renders)
  const isFetchingRef = useRef(false);
  const BATCH = 10;

  const loadMore = useCallback(async () => {
    if (isFetchingRef.current) return; // already loading
    isFetchingRef.current = true;
    setLoading(true);

    // simulate network delay
    await new Promise((r) => setTimeout(r, 5000));

    setItems((prev) => [
      ...prev,
      ...Array.from({ length: BATCH }, (_, i) => "item" + (prev.length + i)),
    ]);

    setLoading(false);
    isFetchingRef.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    if (nearBottom && !isFetchingRef.current) {
      // kick off async work; don't await here
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <h1>LazyLoadingExample1</h1>

      {items.map((ele, idx) => (
        <h1 key={idx}>{ele}</h1>
      ))}

      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}

export default LazyLoadingExample1;
