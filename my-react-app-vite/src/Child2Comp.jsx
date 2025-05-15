import React, { useState } from "react";

function Child2Comp({ age, clickHandler }) {
  // age value - current
  // initial value on mount
  //   const [ageValue, setAgeValue] = useState(age);
  return (
    <div>
      {/* <h1>Age is for child :{ageValue}</h1> */}
      <h1>Age from parnet :{age}</h1>
      {/* <button onClick={() => setAgeValue(ageValue + 1)}>Child Click</button> */}
      <button onClick={clickHandler}>Child Click</button>
    </div>
  );
}

export default Child2Comp;
