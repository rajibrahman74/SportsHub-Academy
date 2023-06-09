import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useData from "../../hooks/useData";

const Instructors = () => {
  // const instructors = useLoaderData();
  const [data] = useData()
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Instructors - SportsHub Academy</title>
      </Helmet>
      <h2 className="font-bold text-center text-3xl mt-12 mb-12">
        Our All Instructors
      </h2>
      <div className="max-w-7xl mx-auto px-4 my-16 grid md:grid-cols-2 gap-16">
        {data.map((instructor) => (
          <div
            key={instructor.id}
            className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row h-80"
          >
            {/* Image */}
            <figure className="flex-1">
              <img
                src={instructor.instructor_image}
                alt={instructor.class_name}
                className="object-cover min-h-full aspect-auto"
              />
            </figure>
            {/* Body */}
            <div className="flex justify-center items-center p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                    {instructor.instructor_name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {instructor.instructor_email}
                  </p>
                </div>
              </header>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructors;
