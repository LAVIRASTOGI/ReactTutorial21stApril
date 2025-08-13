import React, { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function CoursesView() {
  const [paramsVal, setParamsVal] = useSearchParams();
  const courses2 = {};
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
      {courses2.map((ele) => (
        <NavLink to={ele}>{ele}</NavLink>
      ))}
    </>
  );
}

export default CoursesView;
