// src/App.jsx
import React, { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./Routing Example/AppLayout";
import Home from "./Routing Example/Home";
import Aboutus from "./Routing Example/Aboutus";
import Users from "./Routing Example/Users";
import Courses from "./Routing Example/Courses";
import CoursesView from "./Routing Example/CoursesView";
import CoursesDetails from "./Routing Example/CoursesDetails";
import CoursesFeedback from "./Routing Example/CoursesFeedback";
import ErrorData from "./Routing Example/ErrorData";
import { contactAction, postsFetch } from "./Routing Example/service";
import Loading from "./Routing Example/Loading";
import { UserProvider } from "./UserContext";
import Contact from "./Routing Example/Contact";
import FeedBackForm from "./Routing Example/FeedbackForm";
import Registration from "./Routing Example/Registration";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorData />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <Aboutus /> },
      {
        path: "users",
        element: <Users />,
        loader: postsFetch,
        // loader: ({ params }) => postsFetch(params.id),
      },
      {
        path: "contact",
        element: <Contact />,
        // action:contactAction
      },
         {
        path: "registration",
        element: <Registration />,
        // action:contactAction
      },
      {
        path: "feedback",
        element: <FeedBackForm />,
        action:contactAction
      },
      {
        path: "courses",
        element: <Courses />,
        children: [
          { index: true, element: <CoursesView /> },
          { path: ":courseId", element: <CoursesDetails /> },
          { path: "feedback", element: <CoursesFeedback /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    lazy: () =>
      import("./Routing Example/Login").then((m) => ({ Component: m.default })),
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
