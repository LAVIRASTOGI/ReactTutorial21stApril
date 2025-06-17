import React, { useEffect, useRef, useState } from "react";
import InputComponent from "../InputComponent";

function UseRefExample1() {
  // step -1
  // inputRef?.current=null
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const divRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // console.log(inputRef);
    inputRef?.current?.focus();
  }, []);

  const clickHandler = () => {
    console.log(inputRef?.current?.value);
    console.log(inputRef2?.current?.value);
  };
  const openHandler = () => {
    console.log(divRef);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <h1>Ref Example</h1>
      {/* // step - 2 attatch ur inputref to the input */}
      <input type="text" placeholder="name" ref={inputRef}  />
      <button onClick={clickHandler}>Check Value</button>
      <h1>Ref Example 2</h1>

      <button onClick={openHandler}>Open Div</button>

      <div
        style={{
          height: isOpen ? divRef.current.scrollHeight + "px" : "0px",
          backgroundColor: "pink",
          transition: "all 2s",
          overflow: "hidden",
        }}
        ref={divRef}
      >
        <h1>I am opened</h1>
        <h1>I am opened</h1> <h1>I am opened</h1> <h1>I am opened</h1>{" "}
        <h1>I am opened</h1> <h1>I am opened</h1> <h1>I am opened</h1>{" "}
        <h1>I am opened</h1> <h1>I am opened</h1>
      </div>

      <InputComponent ref={inputRef2} />
    </>
  );
}

export default UseRefExample1;
