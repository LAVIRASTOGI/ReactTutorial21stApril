import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { USERContext } from "../Context/UserContext";

function ProtectedRoute() {
  const { isUser } = useContext(USERContext);
  const location = useLocation();
  console.log(location);
  if (!isUser) {
    return (
      <>
        <Navigate to="/login" state={{ pathData: location?.pathname }} />
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
