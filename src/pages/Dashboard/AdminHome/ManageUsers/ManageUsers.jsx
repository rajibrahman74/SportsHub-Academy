import React from "react";
import { FaAd, FaUserShield } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ManageUsers = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Manage user!!</h2>

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
                  <button className="btn btn-ghost">
                    <FaAd></FaAd>
                  </button>
                </td>
                <td>
                  <button className="btn text-lg btn-ghost ">
                    <FaUserShield></FaUserShield>
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