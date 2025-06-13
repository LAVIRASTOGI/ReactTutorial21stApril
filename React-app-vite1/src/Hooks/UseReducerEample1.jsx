import React, { useReducer, useState } from "react";

const counterInitialState = {
  count: 0,
};
const userInitialState = {
  user: null,
};

// state-  current state
// action-  action to be performed

const CounterReducer = (state, action) => {
  // type and payload
  switch (action?.type) {
    case "increment":
      //  return { count: state.count + 1 };
      return { count: state.count + action.payload.count };
    case "decrement":
      // return { count: state.count - 1 };
      return { count: state.count - action.payload.count };
    default:
      return { count: 0 };
  }
};

const UserReducer = (state, action) => {
  switch (action?.type) {
    case "login":
      return { user: action.payload.user };
    case "logout":
      return { user: null };
    case "login2":
      return { user: action.payload.user };
    case "logout3":
      return { user: null };
    case "login4":
      return { user: action.payload.user };
    case "logout33":
      return { user: null };
    default:
      return { user: null };
  }
};

function UseReducerEample1() {
  const [state, dispatch] = useReducer(CounterReducer, counterInitialState);

  const [userState, userDispatch] = useReducer(UserReducer, userInitialState);

  //const [counter, setCounter] = useState(0);
  //   const handleIncrement = () => {
  //     setCounter(counter + 1);
  //   };
  //   const handleDecrement = () => {
  //     setCounter(counter - 1);
  //   };

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: { count: 3 } });
          //   dispatch({ type: "decrement", payload: { count: 1 } });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: { count: 2 } })}
      >
        Decrement
      </button>
      <button onClick={() => dispatch()}>Reset</button>
      <h1>{state.count}</h1>

      <h1>User</h1>
      <button
        onClick={() =>
          // await api call se user --
          userDispatch({ type: "login", payload: { user: "Lavi" } })
        }
      >
        Login
      </button>
      <button onClick={() => userDispatch({ type: "logout" })}>Logout</button>
      <h1>{userState.user}</h1>
    </>
  );
}

export default UseReducerEample1;
