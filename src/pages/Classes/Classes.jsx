import React from "react";
import { Helmet } from "react-helmet";
import useData from "../../hooks/useData";

const Classes = () => {
  const [data] = useData();

  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      <Helmet>
        <title>Classes - SportsHub Academy</title>
      </Helmet>
      <h2 className="font-bold text-center text-3xl mb-16">All Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {data.map((item) => (
          <div
            key={item._id}
            className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
          >
            {/* Image */}
            <figure>
              <img
                src={item.class_image}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/* Body */}
            <div className="p-6">
              <header className="mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  {item.class_name}
                </h3>
                <p className="font-semibold text-black text-md my-3">{item.instructor_name}</p>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Price: ${item.price}</span>
                  <span className="text-slate-400">
                    Available seats: {item.available_seats}
                  </span>
                </div>
              </header>
            </div>
            {/* Action base sized basic button */}
            <div className="flex justify-end p-6 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-none bg-warning px-5 text-sm font-medium tracking-wide text-white">
                <span>Select class</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
