import { useNavigate, useParams } from "react-router-dom";

function CoursesDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  const clickHandler = () => {
    navigate("/courses");
    // /courses
  };

  return (
    <div>
      CoursesDetails :{courseId}
      <br />
      <button onClick={clickHandler}>Back To Courses</button>
    </div>
  );
}

export default CoursesDetails;
