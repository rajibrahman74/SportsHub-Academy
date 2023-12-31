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
import Feedback from "../pages/Dashboard/AdminHome/ManageClasses/Feedback";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
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
        path: "feedback",
        element: <Feedback></Feedback>,
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
        loader: () =>
          fetch("https://sports-hub-academy-server.vercel.app/enrolled-class"),
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-histoty",
        element: <PaymentHistory />,
        loader: () =>
          fetch("https://sports-hub-academy-server.vercel.app/enrolled-class"),
      },
    ],
  },
]);

export default router;
