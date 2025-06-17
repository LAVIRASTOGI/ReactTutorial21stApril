import React from "react";
import ContextExampleChild from "./ContextExampleChild";
import { useContext } from "react";
import { USERContext } from "../Context/UserContext";

function ContextExample1() {
  const { login, isUser, logout } = useContext(USERContext);
  return (
    <div>
      ContextExample1
      {isUser ? (
        <button onClick={logout}>LOGOUT</button>
      ) : (
        <button onClick={login}>LOGIN</button>
      )}
      <ContextExampleChild />
    </div>
  );
}

export default ContextExample1;
