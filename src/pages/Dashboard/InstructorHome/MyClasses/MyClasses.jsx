import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProviders";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const [addedClass, setAddedClass] = useState([]);

  useEffect(() => {
    const fetchAddedClasses = async () => {
      try {
        const response = await axiosSecure.get(
          `/addclasses?email=${user?.email}`
        );
        const addedClassesData = response.data;
        setAddedClass(addedClassesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAddedClasses();
  }, [axiosSecure, user]);

  return (
    <>
      <Helmet>
        <title>My classes - SportsHub Academy</title>
      </Helmet>
      <div>
        <h2 className="text-center text-2xl font-semibold my-12">
          Instructor Classes
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Class name</th>
                <th>Status</th>
                <th>Enrolled students</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {addedClass.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.class_name}</td>
                  <td>{item.class_status}</td>
                  <td>{item.enrolled_student}</td>
                  <td>
                    {Array.isArray(item.feedback) ? (
                      item.feedback.map((feedbackItem, index) => (
                        <p key={index} className="mb-2">
                          {feedbackItem}
                        </p>
                      ))
                    ) : (
                      <p className="mb-2">There is no Feedback</p>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyClasses;
