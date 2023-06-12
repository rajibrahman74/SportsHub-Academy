import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    // Prepare the class object to be added to the database
    const newClass = {
      instructor_name: user.displayName,
      instructor_email: user.email,
      instructor_image: data.instructorImage,
      class_name: data.className,
      class_image: data.classImage,
      available_seats: data.availableSeats,
      price: parseFloat(data.price),
      class_status: "pending",
      enrolled_student: 0,
    };

    try {
      const res = await fetch(
        "https://sports-hub-academy-server.vercel.app/alldata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClass),
        }
      );

      if (res.ok) {
        console.log("Class added successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `New class added`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset(); // Reset the form fields
      } else {
        console.log("Error:", res.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="mb-12">
      <Helmet>
        <title>Add classes - SportsHub Academy</title>
      </Helmet>
      <h2 className="text-center text-2xl font-semibold my-12">Add a class</h2>
      <div className="max-w-[450px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between mb-2">
            <div>
              <label htmlFor="className" className="block mb-2 font-medium">
                Class name
              </label>
              <input
                type="text"
                id="className"
                {...register("className", { required: true })}
                className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
              />
            </div>
            <div>
              <label
                htmlFor="instructor-name"
                className="block mb-2 font-medium"
              >
                Instructor Name
              </label>
              <input
                type="text"
                id="instructor-name"
                defaultValue={user.displayName}
                {...register("instructor-name", { required: true })}
                className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
              />
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div>
              <label
                htmlFor="availableSeats"
                className="block mb-2 font-medium"
              >
                Available seats
              </label>
              <input
                type="text"
                id="availableSeats"
                {...register("availableSeats", { required: true })}
                className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 font-medium">
                Price
              </label>
              <input
                type="text"
                id="price"
                {...register("price", { required: true })}
                className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="classImage" className="block mb-2 font-medium">
              Class Image
            </label>
            <input
              type="text"
              id="classImage"
              {...register("classImage")}
              className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="instructor-email"
              className="block mb-2 font-medium"
            >
              Instructor email
            </label>
            <input
              type="text"
              id="instructor-email"
              defaultValue={user.email}
              {...register("instructor-email")}
              className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="instructorImage" className="block mb-2 font-medium">
              Instructor Image
            </label>
            <input
              type="text"
              id="instructorImage"
              {...register("instructorImage")}
              className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-warning"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Add class"
              className="w-full px-4 py-2 bg-warning text-white font-semibold  rounded-none btn hover:bg-warning cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
