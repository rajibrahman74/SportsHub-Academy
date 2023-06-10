import React from "react";
import useData from "../../../../hooks/useData";

const ManageClasses = () => {
  const [data] = useData();
  console.log(data);
  return (
    <div className="mb-12">
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
                  <button className="btn btn-ghost btn-xs bg-green-600 hover:text-black">
                    Approve
                  </button>
                  <button className="btn btn-ghost btn-xs bg-red-600 hover:text-black">
                    Deny
                  </button>
                  <button className="btn btn-ghost btn-xs bg-yellow-600 hover:text-black">
                    feedback
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

export default ManageClasses;