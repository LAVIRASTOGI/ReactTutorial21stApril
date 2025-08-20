import React, { useCallback, useEffect, useState } from "react";

function LazyLoadingExample1() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (ele, index) => "item" + index)
  );

  const loadMoreData = useCallback(async () => {
    //api call
    await new Promise((res) =>
      setTimeout(() => {
        console.log("ddd");
        res("ddd");
      }, 5000)
    );
    let arr = items.map((ele, index) => "item" + (items.length + index));
    setItems([...items, ...arr]);
  }, [items]);
  const handleScroll = useCallback(() => {
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
  return <>{items && items.map((ele) => <h1>{ele}</h1>)} </>;
}

export default LazyLoadingExample1;
