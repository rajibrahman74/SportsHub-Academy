import React from "react";
import { useLoaderData } from "react-router-dom";
import useData from "../../../hooks/useData";

const PopularClasses = () => {
  // const classes = useLoaderData();
  const [data] = useData();

  return (
    <div className="max-w-7xl w-full mx-auto px-4 mt-32">
      <h2 className="font-bold text-center text-3xl mt-48 mb-12 md:mt-24">
        Our Popular Classes
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {data.map((popularClass) => (
          <div key={popularClass._id} className="w-full md:w-auto p-4">
            <div className="rounded-lg shadow-lg">
              <img
                className="rounded-t-lg"
                src={popularClass.class_image}
                alt={popularClass.class_name}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {popularClass.class_name}
                </h3>
              </div>
              <div className="p-4 bg-gray-100 rounded-b-lg">
                <p className="text-gray-500 text-base font-semibold">
                  Students: {popularClass.enrolled_student}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;