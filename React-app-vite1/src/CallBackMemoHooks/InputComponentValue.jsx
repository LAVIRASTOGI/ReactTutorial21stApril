import React from "react";
const InputComponentValue = React.memo(({ searchValue, changeHandler }) => {
  console.log("input is rerendering");
  return (
    <input
      type="text"
      placeholder="Enter Value"
      value={searchValue}
      onChange={changeHandler}
    />
  );
});

export default InputComponentValue;
