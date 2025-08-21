import React, { useCallback, useEffect, useRef, useState } from "react";

function LazyLoadingExample1() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (ele, index) => "item" + index)
  );
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const loadMoreData = useCallback(async () => {
    if (inputRef?.current) return;
    //api call
    setLoading(true);
    inputRef.current = true;
    await new Promise((res) =>
      setTimeout(() => {
        console.log("came in settimeout");
        res("ddd");
      }, 2000)
    );
    setItems([
      ...items,
      ...Array.from(
        { length: 10 },
        (ele, index) => "item" + (items.length + index)
      ),
    ]);
    setLoading(false);
    inputRef.current = false;
  }, [items]);
  const handleScroll = useCallback(() => {
    console.log("came inside handle scroll");
    if (
      window.scrollY + window.innerHeight >=
      document.body.offsetHeight - 50
    ) {
      //   console.log(
      //     window.scrollY,
      //     window.innerHeight,
      //     document.body.offsetHeight
      //   );
      //   loadMoreData();
      console.log("came here");
      //   setItems((prev) => [
      //     ...prev,
      //     ...Array.from(
      //       { length: 20 },
      //       (ele, index) => "item" + (prev.length + index)
      //     ),
      //   ]);
      loadMoreData();
    }
  }, [loadMoreData]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      {items && items.map((ele) => <h1>{ele}</h1>)}
      {loading && <h1>Loading .............</h1>}
    </>
  );
}

export default LazyLoadingExample1;
