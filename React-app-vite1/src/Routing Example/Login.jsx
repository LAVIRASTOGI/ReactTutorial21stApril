import React, { useContext } from "react";
import { USERContext } from "../Context/UserContext";

function Login() {
  const { login } = useContext(USERContext);
  return (
    <>
      <button onClick={login}>Login In </button>
    </>
  );
}

export default Login;
