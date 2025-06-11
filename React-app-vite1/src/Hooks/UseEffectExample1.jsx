import { useEffect, useState } from "react";
import UseEffectExample2 from "./UseEffectExample2";

function UseEffectExample1() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const fetchHandler = async () => {
    await new Promise((res) => {
      setTimeout(() => {
        res("hello");
      }, 3000);
    });
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataRes = await result.json();
    setData(dataRes);
  };

  // run only once - at time of mounting - []  - componentDidMount

  useEffect(() => {
    console.log("fetch");
    fetchHandler();
    // unmounting phase
    // api calls close event listners remove // clear
    return () => {
      console.log("unmounted");
    };
  }, []);

  // whenever data value changes
  useEffect(() => {
    console.log("you will run when data changes");
    // return works everytime when data changes
    // settime clear interval
    return () => {
      console.log("unmounted from depencdency", data);
    };
  }, [data]);

  // no dependency so it will run after every rerender // conponet did update
  // not advised
  useEffect(() => {
    console.log("run everytime");
    // setCount(count+1)
  });

  return (
    <div>
      <h1>Users Data:</h1>
      <h1>Counter:{count}</h1>
      {/* <button onClick={fetchHandler}>Fetch users</button> */}
      <button onClick={() => setCount(count + 1)}>Click Count</button>
      {/* {data && data.map((ele) => <h1 key={ele.id}>{ele?.name}</h1>)} */}
      <UseEffectExample2 />
    </div>
  );
}

export default UseEffectExample1;
