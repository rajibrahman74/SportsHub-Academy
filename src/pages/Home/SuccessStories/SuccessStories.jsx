import React from "react";
import img from "../../../assets/bannerimg/banner1.png";
import { FaUsers, FaStar, FaRegCalendarAlt } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <section className="max-w-7xl mx-auto py-[10rem] flex flex-col-reverse md:flex-row justify-center items-center gap-[70px] px-4 overflow-hidden">
      <div className="flex flex-col gap-[30px] md:w-1/2 md:pl-[30px] xs:text-center">
        <h1 className="text-4xl lg:text-5xl m-0 font-bold">
          Complete Sports Course with Our Best Trainer
        </h1>
        <p className="text-[17px] m-0 pt-2 pl-1">
          Enjoy the most effective and enjoyable journey with interactive
          lessons and guided support to become a sports.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* 1 */}
          <div className=" py-2 rounded">
            <div className="flex gap-2">
              <FaUsers className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">10k +</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* 2 */}
          <div className=" py-2 rounded">
            <div className="flex gap-2">
              <FaStar className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">1k +</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* 3 */}
          <div className=" py-2  rounded">
            <div className="flex gap-2">
              <FaRegCalendarAlt className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">3 month</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100">
            Enroll Now
          </button>
        </span>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="max-w-full" src={img} alt="" />
      </div>
    </section>
  );
};

export default SuccessStories;