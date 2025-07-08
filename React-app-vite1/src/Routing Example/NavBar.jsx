import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { USERContext } from "../Context/UserContext";
import Login from "./Login";
import Logout from "./Logout";

function NavBar() {
  const { isUser } = useContext(USERContext);
  return (
    <div className="flex flex-row gap-4 bg-blue-500 text-white justify-center items-center">
      <NavLink to="/">Home</NavLink>
      {isUser ? (
        <>
          <NavLink to="/courses?courseDetailVal=xyz&name1=erere">
            Courses
          </NavLink>
          <NavLink to="/mock" state={{ pathData: "ddddddddddd" }}>
            Mock
          </NavLink>
        </>
      ) : (
        ""
      )}

      {isUser ? <Logout /> : <Login />}
      <Outlet />
    </div>
  );
}

export default NavBar;
