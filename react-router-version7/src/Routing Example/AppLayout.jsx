import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <h1>footer</h1>
    </>
  );
}

export default AppLayout;
