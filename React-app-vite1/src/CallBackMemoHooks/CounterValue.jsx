import React from "react";

const CounterValue = React.memo(({ count, incrementHandler }) => {
  console.log("counter runs");
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
});

export default CounterValue;
