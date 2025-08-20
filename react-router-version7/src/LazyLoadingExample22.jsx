// Lazy Loading Example 2
// same as lazyloading 1 but with intersection observer

import { useState, useEffect, useRef } from "react";

function LazyLoadingExample2() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => "item" + i)
  );
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setLoading(true);

        // fake delay (5s)
        await new Promise((r) => setTimeout(r, 5000));

        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 10 }, (_, i) => "item" + (prev.length + i)),
        ]);

        setLoading(false);
      }
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>LazyLoadingExample2</h1>

      {items.map((ele, idx) => (
        <h2 key={idx}>{ele}</h2>
      ))}

      {loading && <p>Loading...</p>}

      {/* This div triggers loading when it comes into view */}
      <div ref={bottomRef} style={{ height: 20 }} />
    </div>
  );
}

export default LazyLoadingExample2;
