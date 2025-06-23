import { useState } from "react";
import InputComponentValue from "./InputComponentValue";
import CounterValue from "./CounterValue";
import { useCallback } from "react";
import UserDataValue from "./UserDataValue";
import ResizeWindow from "./ResizeWindow";

function UseCallbackHookExample() {
  const [searchValue, setSearchValue] = useState([]);
  const [count, setCount] = useState(0);

  const changeHandler = useCallback((e) => {
    setSearchValue(e.target.value);
    // setSearchValue(e.target.value);
  }, []); // refence const

  const incrementHandler = useCallback(() => {
    // firsttime count = 0
    setCount(count + 2);
  }, [count]); // when my count changes a new refeence is created

  return (
    <>
      <h1> Giving Example for UseCalback</h1>
      <ResizeWindow/>
      <InputComponentValue
        searchValue={searchValue}
        changeHandler={changeHandler}
      />
      <CounterValue count={count} incrementHandler={incrementHandler} />
      <UserDataValue />
      
    </>
  );
}

export default UseCallbackHookExample;
