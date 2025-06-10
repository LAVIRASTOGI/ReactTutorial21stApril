import React, { useState } from "react";

function Example1({ name }) {
  console.log(name);
  console.log("rerendered");
  // rerender - updating phase
  // updaing phase - initial value will not run
  // name1 - lavi 
  const [name1, setName1] = useState(name);
  return <div>{name1}</div>;
}

export default Example1;
