import React, { useEffect, useState } from "react";

function LazyLoadingExample1() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (ele, index) => "item" + index)
  );

  const loadMoreData = () => {
    //api call
    let arr = items.map((ele, index) => "item" + items.length + index);
    setItems([...items, ...arr]);
  };
  const handleScroll = () => {
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
      console.log("came here", items);
      let arr = items.map((ele, index) => "item" + (items.length + index));
      setItems([...items, ...arr]);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <>{items && items.map((ele) => <h1>{ele}</h1>)}</>;
}

export default LazyLoadingExample1;
