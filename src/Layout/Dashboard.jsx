import React from "react";
import { FaHome, FaMediumM, FaUsers } from "react-icons/fa";
import { BiAddToQueue, BiSelectMultiple } from "react-icons/bi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  // const role = "instructor";
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open max-w-7xl mx-auto px-4">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/manageclass">
                    <FaMediumM className="h-5 w-5"></FaMediumM>
                    Manage Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageuser">
                    <FaUsers className="h-5 w-5"></FaUsers> Manage User
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaHome className="h-5 w-5"></FaHome> Home
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/addclass">
                    <BiAddToQueue className="h-5 w-5"></BiAddToQueue>
                    Add Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclass">
                    <SiGoogleclassroom className="h-5 w-5"></SiGoogleclassroom>{" "}
                    MY Class
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaHome className="h-5 w-5"></FaHome> Home
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/myselectedclass">
                    <BiSelectMultiple className="h-5 w-5"></BiSelectMultiple>
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myenrolledclass">
                    <BsBookmarkPlusFill className="h-5 w-5"></BsBookmarkPlusFill>
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaHome className="h-5 w-5"></FaHome> Home
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
