import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function UseRefExample2() {
  let otpArray = new Array(4).fill("");
  const { toggleHandler, theme } = useContext(ThemeContext);
  const [inputValues, setInputValues] = useState(otpArray);
  //   inputrefs.current=[]
  //   inputrefs.current[0]= 1st input
  //  inputrefs.current[1]= 2nd input
  //  inputrefs.current[2]= 3rd
  // inputrefs.current[3]= 4th
  const inputrefs = useRef([]);

  useEffect(() => {
    console.log(inputrefs);
    if (inputrefs?.current[0]) {
      inputrefs?.current[0].focus();
    }
  }, []);

  const changeHandler = (e, index) => {
    if (e.target.value && e.target.value > 0 && e.target.value <= 9) {
      if (index < otpArray.length - 1) {
        inputrefs?.current[index + 1].focus();
      }
      const inputValueNew = [...inputValues];
      inputValueNew[index] = e.target.value;
      setInputValues(inputValueNew);
    }
  };
  return (
    <>
      <button onClick={toggleHandler}>Toogle to {theme}</button>
      <h1>OTP </h1>
      {/* dynmaic input box */}
      {inputValues?.map((ele, index) => {
        return (
          <input
            type="number"
            id={index}
            key={index}
            value={ele}
            ref={(ref) => (inputrefs.current[index] = ref)}
            onChange={(e) => changeHandler(e, index)}
          />
        );
      })}
    </>
  );
}

export default UseRefExample2;
