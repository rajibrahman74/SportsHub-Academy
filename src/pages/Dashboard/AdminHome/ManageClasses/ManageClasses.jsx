import React from "react";
import useData from "../../../../hooks/useData";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [data, , refetch] = useData();
  console.log(data);

  const handlePending = (classInfo) => {
    console.log(classInfo);
    fetch(`http://localhost:5000/alldata/${classInfo}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (classInfo) => {
    console.log(classInfo);
    fetch(`http://localhost:5000/deny/${classInfo}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="mb-12">
      <Helmet>
        <title>Manage classes - SportsHub Academy</title>
      </Helmet>
      <h2 className="text-center text-2xl font-semibold my-12">
        Manage all classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Info</th>
              <th>Class Info</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((classInfo, index) => (
              <tr key={classInfo._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={classInfo.class_image} className="w-32" alt="" />
                </td>
                <td>{classInfo.class_name}</td>
                <td>
                  <div>
                    <div className="font-bold">{classInfo.instructor_name}</div>
                    <div className="text-sm opacity-50">
                      {classInfo.instructor_email}
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm font-lg">
                    Price:{" "}
                    <span className="font-bold ml-1">${classInfo.price}</span>
                  </span>
                  <span className="badge badge-ghost badge-sm">
                    Seats:{" "}
                    <span className="font-bold ml-1">
                      {classInfo.available_seats}
                    </span>
                  </span>
                </td>
                <td>Pending</td>
                <td className="flex flex-col gap-2 text-white">
                  {classInfo.class_status === "approved" ? (
                    <button className=" w-full btn btn-sm btn-disabled font-bold ">
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePending(classInfo.class_status)}
                      className="btn btn-ghost btn-xs bg-green-600 hover:text-black"
                    >
                      Approve
                    </button>
                  )}
                  {classInfo.class_status === "denied" ? (
                    <button className=" w-full btn btn-sm btn-disabled font-bold ">
                      Denied
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDeny(classInfo.class_status)}
                      className="btn btn-ghost btn-xs bg-red-600 hover:text-black"
                    >
                      Deny
                    </button>
                  )}
                  {classInfo.class_status === "denied" && (
                    <Link
                      state={classInfo}
                      to={"/dashboard/feedback"}
                      className=" w-full btn btn-sm font-bold"
                    >
                      FeedBack
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
