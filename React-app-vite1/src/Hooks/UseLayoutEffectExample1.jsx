import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffectExample1() {
  useLayoutEffect(() => {
    console.log("useLayoutEffectExample1");
    // width // dom measurements // animation mean transitions
  }, []);
  useEffect(() => {
    console.log("useEffectExample1");
  }, []);
  return <h1>hello </h1>;
}

export default UseLayoutEffectExample1;
