import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import useData from "../../../hooks/useData";

const PopularInstructors = () => {
  // const instructors = useLoaderData();
  const [data] = useData();
  // Animation variants for the image
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 mt-16 mb-12">
      <h2 className="font-bold text-center text-3xl mb-12 md:mt-16 md:my-16">
        Our Popular Instructors
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {data.map((instructor) => (
          <div key={instructor._id} className="card h-90">
            <motion.img
              src={instructor.instructor_image}
              alt={instructor.instructor_name}
              className="w-full h-52 rounded-md border-2 border-gray-200"
              initial="initial"
              animate="animate"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <h3 className="text-xl font-bold mt-4">
              {instructor.instructor_name}
            </h3>
            <p className="text-gray-500">
              Students: {instructor.enrolled_student}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;