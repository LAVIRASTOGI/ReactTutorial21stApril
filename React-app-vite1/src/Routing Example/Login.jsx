import React, { useContext } from "react";
import { USERContext } from "../Context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(USERContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
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
