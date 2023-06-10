import React from "react";
import { FaHandMiddleFinger, FaHome, FaUsers } from "react-icons/fa";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const role = "admin";

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
                    <FaHandMiddleFinger className="h-5 w-5"></FaHandMiddleFinger>{" "}
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
                  <NavLink to="/dashboard/"> Add Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/"> MY Class</NavLink>
                </li>
                <li>
                  <NavLink to="/"> Home</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink>My Enrolled Class</NavLink>
                </li>
                <li>
                  <NavLink>My Select Class</NavLink>
                </li>
                <li>
                  <NavLink to="/"> Home</NavLink>
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
