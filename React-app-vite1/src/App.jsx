import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> count is {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <InputComp />
      {new Array(3).fill(0).map((_, index) => (
        <div key={index}>
          <h1>count is {index}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;

function InputComp() {
  return <input type="text" />;
}

// create fiber node

// create fiber root node

// code
// rootFiber = {
//   tag: HostRoot,
//   stateNode: document.getElementById("root"),
//   child: appFiber
// }
// code

// appFiber = {
//   tag: FunctionComponent,
//   type: App,
//   child: divFiber,
//   return: rootFiber
// }
// code

// divFiber = {
//   tag: HostComponent,
//   type: 'div',
//   child: h1Fiber,
//   return: appFiber,
//   effectTag: 'Placement' // newly created node / flag
// };

// h1Fiber = {
//   tag: HostComponent,
//   type: 'h1',
//   sibling: buttonFiber,
//   return: divFiber,
//   effectTag: 'Placement' // update
//flag: true;
// };

// buttonFiber = {
//   tag: HostComponent,
//   type: 'button',
//   sibling: inputFibre,
//   return: divFiber,
//   effectTag: 'Placement'
// };

// inputFibreComp = {
//   tag: FunctionComponent,
//   type: 'InputComp',
// sibling: null,
//   return: divFiber,
//   child: inputFibre2,
//   effectTag: 'Placement'
// };

// inputFibre = {
//   tag: HostComponent,
//   type: 'input',
//   sibling: null,
//   return: inputFibreComp ,
//   effectTag: 'Placement'
// };
