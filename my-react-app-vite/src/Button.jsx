import React from "react";

function Button({ name, age, onClickHandler }) {
  const clickHandler = (event) => {
    // do some work
    console.log("i did my work");
    onClickHandler(event, "this is my customcomoment");
    // onClickHandler(event, ["sss"]);
    // onClickHandler(event);
  };
  return (
    <button onClick={clickHandler}>
      Click me {name} {age}
    </button>
  );
}

export default Button;
