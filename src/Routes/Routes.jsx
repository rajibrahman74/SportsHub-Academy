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
import ManageUsers from "../pages/Dashboard/AdminHome/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/AdminHome/ManageClasses/ManageClasses";
import AddClass from "../pages/Dashboard/InstructorHome/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/InstructorHome/MyClasses/MyClasses";
import MyEnrolledClasses from "../pages/Dashboard/UsersHome/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../pages/Dashboard/UsersHome/MySelectedClasses/MySelectedClasses";
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
      // admin home routes
      {
        path: "manageclass",
        element: <ManageClasses />,
      },
      {
        path: "manageuser",
        element: <ManageUsers />,
      },
      // instructor home routes
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "myclass",
        element: <MyClasses />,
      },
      // all users or students home routes
      {
        path: "myselectedclass",
        element: <MySelectedClasses />,
      },
      {
        path: "myenrolledclass",
        element: <MyEnrolledClasses />,
      },
    ],
  },
]);

export default router;
