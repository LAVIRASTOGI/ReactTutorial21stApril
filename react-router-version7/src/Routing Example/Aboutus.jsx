import React, { useId, useState, useTransition } from "react";

function Aboutus() {
  const [inputVal, setInputVal] = useState("");
  const [nameData, setNameData] = useState("");
  const [query, setQuery] = useState("");
 const id= useId();

  const [isPending, startTransition] = useTransition();

  console.log("rerender");
  const changeHandler = (e) => {
    // 1
    setInputVal(e.target.value);
    setNameData(nameData + "2");

//not urgent 
    startTransition(()=>{
      setQuery([])
    })
    

    // setTimeout(() => {
    //   // 2
    //   setInputVal(inputVal + "1");
    //   setNameData(nameData + "2");
    // }, 1000);
    // setTimeout(() => {
    //   // 3
    //   setInputVal(inputVal + "21");
    //   setNameData(nameData + "27");
    // }, 2000);
    // setTimeout(() => {
    //   // 4
    //   setInputVal(inputVal + "12");
    //   setNameData(nameData + "24");
    // }, 3000);
  };
  return (
    <>
      <input onClick={changeHandler} placeholder="Enter Name" />
      {isPending && 'updating'}
      {/* {query.map(ele=>{

      })} */}
    </>
  );
}

export default Aboutus;
