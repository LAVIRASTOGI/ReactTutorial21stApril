import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { USERContext } from "../Context/UserContext";

function ProtectedRoute() {
  const { isUser } = useContext(USERContext);

  if (!isUser) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default ProtectedRoute;
