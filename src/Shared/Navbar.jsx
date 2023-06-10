import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // logout imnpliment here
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <header className="bg-[#eeeff1] sticky top-0 z-[100]">
      <nav className="navbar max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-gray-900 font-medium">
              <NavLink
                exact
                activeclassName="active text-[#757575] font-semibold hover:text-warning"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-900 font-medium">
              <NavLink
                activeclassName="active text-[#757575] font-semibold hover:text-warning"
                to="/instructors"
              >
                Instructors
              </NavLink>
            </li>
            <li className="text-gray-900 font-medium">
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/classes"
              >
                Classes
              </NavLink>
            </li>

            {user && (
              <li className="text-gray-900 font-medium">
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="my-auto me-auto">
          <Link to="/">
            <img className="w-36 md:w-[200px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex me-auto">
          <ul className="flex items-center justify-start gap-6 px-1">
            <li className="text-gray-900 font-medium">
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-900 font-medium">
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/instructors"
              >
                Instructors
              </NavLink>
            </li>
            <li className="text-gray-900 font-medium">
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/classes"
              >
                Classes
              </NavLink>
            </li>

            {user && (
              <li className="text-gray-900 font-medium">
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-end md:justify-center gap-6">
              {user ? (
                <span className="flex items-center justify-center gap-3">
                  <img
                    title={user.displayName}
                    className="-mr-1 md:m-0 w-10 h-10 md:w-12 md:h-12 rounded-full"
                    //   src={user.photoURL}
                    src={user.photoURL}
                    alt="User profile image"
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn border-0 text-white hover:text-black hover:border hover:border-warning bg-warning px-4 py-1.5 md:px-6 md:py-2 font-semibold  flex items-center gap-1 rounded-none hover:btn-outline"
                  >
                    Logout
                  </button>
                </span>
              ) : (
                <Link to="/login">
                  <button className="btn border-0 text-white hover:text-black hover:border hover:border-warning bg-warning px-4 py-1.5 md:px-6 md:py-2 font-semibold  flex items-center gap-1 rounded-none hover:btn-outline">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;