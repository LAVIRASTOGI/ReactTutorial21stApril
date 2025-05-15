import React from "react";
import Child2Comp from "./Child2Comp";

function Child1comp({ age, clickHandler }) {
  return (
    <div>
      <h1>Child 1 :{age}</h1>
      <Child2Comp age={age} clickHandler={clickHandler} />
    </div>
  );
}

export default Child1comp;
