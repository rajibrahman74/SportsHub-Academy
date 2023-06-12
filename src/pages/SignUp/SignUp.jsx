import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../../src/assets/google.png";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, googleSigIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data.email, data.password, data.name, data.photoURL)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUsers = {
          name: data.name,
          email: data.email,
          role: "student",
        };
        fetch("https://sports-hub-academy-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUsers),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleSigIn()
      .then((result) => {
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          role: "student",
        };

        fetch("https://sports-hub-academy-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: error.message,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // toggle show password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-12 rounded-none shadow-xl p-6 max-w-sm mx-auto">
      <Helmet>
        <title>Sign up - SportsHub Academy</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-semibold text-2xl my-6 text-center">Sign up</h1>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 font-medium">
            Full name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="photoURL" className="block mb-2 font-medium">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            {...register("photoURL")}
            className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
          />
        </div>
        <div className="flex gap-3">
          <div className="mb-2 w-1/2 relative">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              })}
              className={`w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-warning"
              }`}
            />
            <svg
              onClick={toggleShowPassword}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-11 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
              fill={showPassword ? "none" : "currentColor"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
            {errors.password && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters long and contain at least
                one uppercase letter, one lowercase letter, one number, and one
                special character.
              </p>
            )}
          </div>
          <div className="mb-2 w-1/2">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === document.getElementById("password").value,
              })}
              className={`w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 ${
                errors.confirmPassword
                  ? "focus:ring-red-500"
                  : "focus:ring-warning"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
          </div>
        </div>
        <div className="mt-1 mb-4 flex items-center justify-center">
          Already have an account?
          <Link to="/login" className="text-warning underline ml-1">
            Login
          </Link>
        </div>

        {/* Social Login */}
        <div className="justify-between">
          <div className="mb-2 ">
            <input
              type="submit"
              value="Sign up"
              className="w-full px-4 py-2 bg-warning text-white font-semibold hover:text-black rounded-none hover:border hover:border-warning btn btn-primary cursor-pointer"
            />
          </div>
        </div>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="my-6 bg-primary text-black w-[200px] cursor-pointe font-semibold flex justify-center mx-auto items-center cursor-pointer hover:border hover:border-warning border-transparent"
      >
        <img className="max-w-[28px] mr-2 py-2" src={google} alt="" />
        <span className="pr-1">Sign up with Google</span>
      </button>
    </div>
  );
};

export default SignUp;
