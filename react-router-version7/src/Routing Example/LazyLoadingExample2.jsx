import React, { useEffect, useRef, useState } from "react";

function LazyLoadingExample2() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (ele, index) => "item" + index)
  );
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      console.log(entries);
      const dataEntry = entries[0];
      if (dataEntry?.isIntersecting) {
        setLoading(true);
        await new Promise((res) =>
          setTimeout(() => {
            console.log("came in settimeout");
            res("ddd");
          }, 4000)
        );
        setItems((prev) => [
          ...prev,
          ...Array.from(
            { length: 10 },
            (ele, index) => "item" + (prev.length + index)
          ),
        ]);
        setLoading(false);
      }
    });

    if (bottomRef?.current) {
      observer.observe(bottomRef?.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      {items && items.map((ele) => <h1>{ele}</h1>)}
      <div ref={bottomRef} style={{ height: "40px", background: "red" }}>
        Bottom
      </div>
      {loading && <h1>Loading .............</h1>}
    </div>
  );
}

export default LazyLoadingExample2;
