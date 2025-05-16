import React from "react";

// import styles from "./Button.module.css";
// import "./App.css";
import styles from "./App.module.css";

function Button({ name, age, onClickHandler }) {
  const clickHandler = (event) => {
    // do some work
    console.log("i did my work");
    onClickHandler(event, "this is my customcomoment");
    // onClickHandler(event, ["sss"]);
    // onClickHandler(event);
  };
  return (
    <button onClick={clickHandler} className={styles.button}>
      Click me {name} {age}
    </button>
  );
}

export default Button;
