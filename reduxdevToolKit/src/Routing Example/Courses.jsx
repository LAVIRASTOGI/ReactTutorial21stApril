import { NavLink, Outlet } from "react-router-dom";

function Courses({ isLoggedIn }) {
  return (
    <>
      <div>Courses :{isLoggedIn}</div>
      {/* <NavLink to="courseId">CourseId</NavLink> */}
      <NavLink to="feedback">Feedback</NavLink>
      <br />
      <Outlet />
    </>
  );
}

export default Courses;
