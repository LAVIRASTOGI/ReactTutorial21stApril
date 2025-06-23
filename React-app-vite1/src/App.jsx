import { useContext, useState } from "react";
import UseLayoutEffectExample1 from "./Hooks/UseLayoutEffectExample1";
import UseReducerEample1 from "./Hooks/UseReducerEample1";
import UseRefExample1 from "./Hooks/UseRefExample1";
import UseRefExample2 from "./Hooks/UseRefExample2";
import ContextExample1 from "./Hooks/ContextExample1";
import { UserProvider } from "./Context/UserContext";
import { ThemeContext } from "./Context/ThemeContext";
import UserData from "./CustomHooks/UserData";
import PostData from "./CustomHooks/PostData";
import UseCallbackHookExample from "./CallBackMemoHooks/UseCallbackHookExample";
import MemoExample1 from "./MemoHookExamples/MemoExample1";
import TodoApp from "./ReactExamples/TodoApp";

function App() {
  // const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* <div className={theme}> */}
      {/* <h1> count is {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <InputComp />
      {new Array(3).fill(0).map((_, index) => (
        <div key={index}>
          <h1>count is {index}</h1>
        </div>
      ))} */}
      {/* <UseEffectExample1 /> */}
      {/* <UseLayoutEffectExample1 /> */}
      {/* <UseReducerEample1 /> */}

      {/* <UseRefExample1 /> */}
      {/* <UseRefExample2 /> */}

      {/* <UserProvider>
          <ContextExample1 />
        </UserProvider> */}
      {/* custom Hook */}
      {/* <UserData /> */}
      {/* <PostData /> */}

      {/* use Callback */}
      {/* <UseCallbackHookExample /> */}

      {/* use memo  */}

      {/* <MemoExample1 /> */}
      <TodoApp />
      {/* </div> */}
    </>
  );
}

export default App;

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
