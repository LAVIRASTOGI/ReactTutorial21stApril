import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routing Example/Home";
import NavBar from "./Routing Example/NavBar";
import { UserProvider } from "./UserContext";
import AppLayout from "./Routing Example/AppLayout";
import Aboutus from "./Routing Example/Aboutus";
import Courses from "./Routing Example/Courses";
import CoursesView from "./Routing Example/CoursesView";
import CoursesFeedback from "./Routing Example/CoursesFeedback";
import CoursesDetails from "./Routing Example/CoursesDetails";
import ErrorData from "./Routing Example/ErrorData";
import Users from "./Routing Example/Users";
import { postsFetch } from "./Routing Example/service";

function App() {
  const router33 = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorData />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "about",
          element: <Aboutus />,
        },
        {
          path: "/users",
          element: <Users />,
          loader: postsFetch,
        },
        {
          path: "courses",
          // errorElement: <ErrorData />,
          element: <Courses />,
          // errorElement: <ErrorData />,
          children: [
            {
              path: "/courses",
              element: <CoursesView />,
            },
            {
              path: ":courseId",
              element: <CoursesDetails />,
            },
            {
              path: "feedback",
              element: <CoursesFeedback />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      lazy: () =>
        import("./Routing Example/Login").then((module) => ({
          //  The module object returned by import()
          //	We are returning an object with a key named Component
          //  module.default	The default export from DiscountedProducts.js
          //  Component	We assign it to key named Component
          Component: module.default,

          // if not default name
          // Component: module.DiscountedProducts,
        })),
    },
  ]);
  return (
    <>
      <UserProvider>
        <RouterProvider router={router33} />
      </UserProvider>
    </>
  );
}

export default App;
