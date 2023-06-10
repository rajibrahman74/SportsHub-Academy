import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRouts from "./PrivateRouts";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouts>
        <Dashboard />
      </PrivateRouts>
    ),
    children: [
      {
        path: "manageclass",
        element: <ManageClasses />,
      },
      {
        path: "manageuser",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
