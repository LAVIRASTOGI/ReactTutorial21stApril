import React, { useState } from "react";
import Example1 from "./Example1";

function UseStateExample1() {
  // const [name, setName] = useState("lavi");
  //once initial value is run  when mountinng pjhse
  // current state - name -- iitail value only once
  const [name, setName] = useState("lavi");

  const [obj, setObj] = useState({ name: "yashu" });

  // const [arr, setArr] = useState(function () {
  //   return ["chhavi", "dilip"];
  // });

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const [count, setCount] = useState(0);

  const incrementHandler = async () => {
    // 1 rerender
    // count - curreent state count - 0
    // setCount(count + 1); // 0+1 = 1
    // setArr([...arr, "niteesh"]);
    // setCount(count + 1); // 0+1
    // setCount(count + 1); // 0+1
    // setCount(count + 6); // 0+6

    // prev ==> prev state
    setCount((prev) => prev + 1); // 0+1 = 1
    setArr([...arr, "niteesh"]);
    setCount((prev) => prev + 1); // 1+1
    setCount((prev) => prev + 1); // 2+1
    setCount((prev) => prev + 1); // 3+1

    setTimeout(() => {
      console.log(count);
      // before react 18 -- 4  rerender
      // after react 18 - 1 render
      // count = 1
      // setArr([...arr, "niteesh"]);
      // setCount(count + 1); // 0+1
      setCount((prev) => prev + 1); //4+1
      setCount((prev) => prev + 1); //5+1
    }, 5000);

    // await new Promise((res) => {
    //   setTimeout(() => {
    //     setCount(count + 1);
    //   }, 1000);
    // });
    console.log(count);
  };

  const clickHandler = () => {
    // react - rerender -- lavi lavi
    // lavi lavi
    // current state lavi
    //setName(name + name);
    // setArr([...arr, "niteesh"]);
    // setObj({
    //   ...obj,
    //   name: "xyz",
    // });
    console.log(arr, obj);

    // setArr(arr.slice(1, 4));
    // obj.name = "llll";
    // setObj

    // setArr
    //setName("lavi");

    // prev state - lavi
    setName((prev) => {
      return prev + prev;
    });
  };

  return (
    <>
      <h1>welcome :{name}</h1>
      <button onClick={clickHandler}> Click for name change</button>
      <h2>{obj.name}</h2>
      <h2>{arr}</h2>
      <h1>{count}</h1>

      <button onClick={incrementHandler}>Count Click</button>
      {/* <Example1 name={name} /> */}
    </>
  );
}

export default UseStateExample1;
