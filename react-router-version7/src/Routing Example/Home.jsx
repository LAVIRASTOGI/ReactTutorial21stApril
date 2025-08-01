import React from "react";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterActionCreator";

// using Redux
function Home() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hi All</h1>
      <h1>{counter}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* <Contact /> */}
    </>
  );
}

export default Home;
