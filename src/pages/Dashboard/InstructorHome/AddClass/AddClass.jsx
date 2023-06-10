import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProviders";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
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
              <label htmlFor="class-name" className="block mb-2 font-medium">
                Class name
              </label>
              <input
                type="text"
                id="class-name"
                {...register("class-name", { required: true })}
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
                htmlFor="available-seats"
                className="block mb-2 font-medium"
              >
                Available seats
              </label>
              <input
                type="text"
                id="available-seats"
                {...register("available-seats", { required: true })}
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
            <label htmlFor="class-image" className="block mb-2 font-medium">
              Class Image
            </label>
            <input
              type="text"
              id="class-image"
              {...register("class-image")}
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
            <label
              htmlFor="instructor-image"
              className="block mb-2 font-medium"
            >
              Instructor Image
            </label>
            <input
              type="text"
              id="instructor-image"
              {...register("instructor-image")}
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