import React from "react";
import { FaHome, FaMediumM, FaUsers } from "react-icons/fa";
import { BiAddToQueue, BiSelectMultiple } from "react-icons/bi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const role = "instructor";

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
            {role === "admin" ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <FaMediumM className="h-5 w-5"></FaMediumM>
                    Manage Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageuser">
                    <FaUsers className="h-5 w-5"></FaUsers> Manage User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome className="h-5 w-5"></FaHome> Home
                  </NavLink>
                </li>
              </>
            ) : role === "instructor" ? (
              <>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <BiAddToQueue className="h-5 w-5"></BiAddToQueue>
                    Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <SiGoogleclassroom className="h-5 w-5"></SiGoogleclassroom>{" "}
                    MY Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome className="h-5 w-5"></FaHome> Home
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/myselectedclass">
                    <BiSelectMultiple className="h-5 w-5"></BiSelectMultiple>
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myenrolledclass">
                    <BsBookmarkPlusFill className="h-5 w-5"></BsBookmarkPlusFill>
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome className="h-5 w-5"></FaHome> Home
                  </NavLink>
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
