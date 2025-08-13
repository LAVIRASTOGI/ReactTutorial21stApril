import React, { useContext } from "react";
import { USERContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(USERContext);

  const navigate = useNavigate();

  const clickHandler = () => {
    login();
    navigate(location?.state?.pathData || "/", {
      state: { name: "dddddddddd" },
    });
  };
  return (
    <>
      <button onClick={clickHandler}>Login In </button>
    </>
  );
}

export default Login;
