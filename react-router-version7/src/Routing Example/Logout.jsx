import React, { useContext } from "react";
import { USERContext } from "../UserContext";

function Logout() {
  const { logout } = useContext(USERContext);
  return (
    <>
      <button onClick={logout}>LogOut </button>
    </>
  );
}

export default Logout;
