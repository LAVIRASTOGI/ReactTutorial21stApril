import React, { useEffect, useState } from "react";

function UseEffectExample2() {
  const [counter, setcounter] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let id = "";
    // true
    console.log("flag", flag);
    if (!flag) {
      id = setInterval(() => {
        setcounter((prev) => prev + 1);
      }, 2000);
    }

    return () => {
      //flag - false
      clearInterval(id);
    };
  }, [flag]);

  
//   useEffect(() => {
//    // age operation
//    //set - disaply
//   }, [age]);

//    useEffect(() => {
//    // first time
   
//   }, []);

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={() => setFlag(true)}>Stop Counter</button>
      <button onClick={() => setFlag(false)}>Start Counter</button>

      <button onClick={() => setcounter(0)}>Reset Counter</button>
    </>
  );
}

export default UseEffectExample2;
