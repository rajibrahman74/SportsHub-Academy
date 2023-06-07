import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignUp from "../pages/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;