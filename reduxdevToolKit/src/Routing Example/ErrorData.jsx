import React from "react";
import { Navigate, useNavigate, useRouteError } from "react-router-dom";

function ErrorData() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error?.message);

  if (error?.status == 401) {
    return <h1 onClick={() => navigate("/")}>Unauthorized</h1>;
  }
  if (error?.status == 404) {
    return <h1>Page Not found</h1>;
  }
  if (error?.status == 500) {
    return <h1>Internal server</h1>;
  } else {
    return <div>{error.message}</div>;
  }
}

export default ErrorData;
