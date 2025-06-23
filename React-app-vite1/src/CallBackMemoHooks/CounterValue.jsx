import React from "react";
import { useThrotlling } from "./useThrotlling";

const CounterValue = React.memo(({ count, incrementHandler }) => {
  const throttleIncrementHandler = useThrotlling(incrementHandler, 3000);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={throttleIncrementHandler}>Increment</button>
    </>
  );
});

export default CounterValue;
