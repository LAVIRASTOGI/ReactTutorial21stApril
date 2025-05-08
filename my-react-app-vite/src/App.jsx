import React from "react";
import Heading from "./Heading";
import Button from "./Button";
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
  //react hooks -- useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect, useImperativeHandle, useDebugValue
  return (
    <div>
      <h1>Hello World</h1>
      {/* heading is a  child component */}
      {/* props */}
      <Heading
        name="Lavi"
        age={32}
        flag={true}
        obj={{ name: "Lavi", age: 32 }}
        arr={["Lavi", "yashu", "niteesh"]}
        clickHandler={() => {
          console.log("hello");
        }}
      />
      <Heading
        name="yashu"
        age={31}
        flag={true}
        obj={{ name: "Lavi", age: 32 }}
        arr={["Lavi", "yashu", "niteesh"]}
        clickHandler={() => {
          console.log("hello");
        }}
      />

      <Button name="chhavi" age={52} />
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
