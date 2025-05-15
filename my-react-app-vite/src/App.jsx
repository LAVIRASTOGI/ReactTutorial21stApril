import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import List from "./List";
// class App extends React.Component {
//   constructor(props) {
//     console.log("constructor");
//     super(props);
//     this.state = {
//       name: "Lavi",
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps");
//     return null;
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     this.setState({
//       name: "yashu",
//     });
//     //API calls side effects
//   }

//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate");
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate");
//     return null;
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//     //API calls side effects
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     //clean up
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>Hello {this.state.name}</h1>
//         <h2>Hello World</h2>
//         <h3>Hello World</h3>
//       </div>
//     );
//   }
// }

function App() {
  // const name = "lavi";

  const [name, setName] = useState("lavi");
  const [age, setAge] = useState(31);
  const [nameArr, setNameArr] = useState(["lavi", "niteesh", "abhijet"]);
  //react hooks -- useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect, useImperativeHandle, useDebugValue

  const clickButtonHandler = (event, a1 = "lavi") => {
    // event.stopPropagation();
    // console.log("click handler is called", event.clientX, event.clientY);
    // console.log("click handler is called", event?.clientX, event?.clientY);
    // console.log("second para is called", a1);
    console.log("clicked", event?.target.id);
    setAge(age + 1);
  };

  const clickArrHndler = () => {
    setNameArr([...nameArr, "yashu", "chhavi"]);
  };
  const clickButtonHandler2 = (event, a1 = "lavi") => {
    event.stopPropagation();
    // console.log("click handler is called", event.clientX, event.clientY);
    // console.log("click handler is called", event?.clientX, event?.clientY);
    // console.log("second para is called", a1);
    console.log("click h1", event?.target.id);
  };

  const clickButtonHandler3 = (event, a1 = "lavi") => {
    //event.stopPropagation();
    // console.log("click handler is called", event.clientX, event.clientY);
    // console.log("click handler is called", event?.clientX, event?.clientY);
    // console.log("second para is called", a1);
    console.log("clicked div", event?.target.id);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div
      // onMouseMove={clickButtonHandler}
      onClick={clickButtonHandler3}
      style={{ background: "red", height: "100vh" }}
      id="divClick"
    >
      {/* <h1>Hello World</h1> */}
      {/* heading is a  child component */}
      {/* props */}
      <List nameArr={nameArr} clickArrHndler={clickArrHndler} />
      {/* <Heading
        name="Lavi"
        age={age}
        flag={true}
        obj={{ name: "Lavi", age: 32 }}
        arr={["Lavi", "yashu", "chhavi", { name: "jj" }]}
        clickHandler={clickButtonHandler}
      /> */}

      {/* <Heading
        name="yashu"
        age={31}
        flag={true}
        obj={{ name: "Lavi", age: 32 }}
        arr={["Lavi", "yashu", "niteesh"]}
        clickHandler={() => {
          console.log("hello");
        }}
      /> */}
      {/* <h1>{name}</h1>
      <button
        onClick={(event) => {
          // event.preventDefault();
          // event.stopPropagation();
          clickButtonHandler(event);
          console.log("i am clicked", event);
        }}
        // onMouseMove={clickButtonHandler}
      >
        Click me 2
      </button>
      <h1 onClick={clickButtonHandler2} id="h1click">
        <button onClick={clickButtonHandler} id="buttonClick">
          Click me with parent
        </button>
      </h1>

      <input
        type="text"
        placeholder="enter name"
        onChange={changeHandler}
        onBlur={(e) => {
          console.log("blured", e.target.value);
        }}
      /> */}
      <hr />
      <Button name={name} age={age} onClickHandler={clickButtonHandler} />
      {/* <Button
        name="yashu"
        age={32}
        onClickHandler={(event, a11) => {
          clickButtonHandler(event, a11);
          console.log("lavi ur seconf button");
        }}
      /> */}
      {/* <div>
      <h1>Hello World from heading</h1>
      <h2> hello </h2>
      <div>
        <p>this is a paragraph</p>
      </div>
    </div> */}
    </div>
  );
}

export default App;
