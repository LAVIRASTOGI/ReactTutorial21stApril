import React, { useContext } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import { USERContext } from "../UserContext";
import Login from "./Login";
import Logout from "./Logout";

function NavBar() {
  const { isUser } = useContext(USERContext);
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">AboutUs</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <br />
      <NavLink to="/users">Users</NavLink>

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
    </div>
  );
}

export default NavBar;
