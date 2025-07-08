import React, { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function CoursesView() {
  const [paramsVal, setParamsVal] = useSearchParams();
  console.log(
    paramsVal,
    paramsVal.get("courseDetailVal"),
    paramsVal.get("name1")
  );
  // useEffect(() => {
  //   setParamsVal({ courseDetailVal: "lavi" });
  // }, []);
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
