import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Instructors from "../pages/instructors/Instructors";
import Courses from "../pages/courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "instructors", element: <Instructors /> },
      { path: "courses", element: <Courses /> },
    ],
  },
]);

export default router;
