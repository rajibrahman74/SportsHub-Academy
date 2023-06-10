import React from "react";
import { FaAd, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ManageUsers = () => {
  // const users = useLoaderData();
  // console.log(users);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res.data);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: `${user.name} is and admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: `${user.name} is and Instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mb-12">
      <Helmet>
        <title>Manage users - SportsHub Academy</title>
      </Helmet>
      <h2 className="text-center text-2xl font-semibold my-12">
        Manage all users
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {users.map((user, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {user.email}
                  </span>
                </td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-ghost"
                  >
                    {user.role === "instructor" ? "Instructor" : <FaAd />}
                  </button>
                </td>
                <td>
                  {/* <button className="btn text-lg btn-ghost ">
                    <FaUserShield></FaUserShield>
                  </button> */}
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost btn-xl bg:hover-none bg-none border-0"
                  >
                    {user.role === "admin" ? "Admin" : <FaUserShield />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
