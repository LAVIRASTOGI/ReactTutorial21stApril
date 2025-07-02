import React from "react";
import { NavLink } from "react-router-dom";

function CoursesView() {
  return (
    <>
      <NavLink to="course1">Course 1</NavLink>
      <NavLink to="course2">Course 2</NavLink>
      <NavLink to="course3">Course 3</NavLink>
      <NavLink to="course4">Course 4</NavLink>
    </>
  );
}

export default CoursesView;
