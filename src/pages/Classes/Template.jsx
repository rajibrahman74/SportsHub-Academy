import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Template = () => {
  const [classes, setClasses] = useState([]);
  const {user}  =useAuth();
  const [axiosSecure] = useAxiosSecure()

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/classes");
      const classesData = response.data;
      setClasses(classesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectClass = (cls) => {
    const { className, classImage, instructorName, price } = cls;
    if (user?.email) {
      const addedClass = {
        userEmail: user?.email,
        className,
        classImage,
        instructorName,
        price,
      };
      axiosSecure
        .post("/selectedclass", addedClass)
        .then((data) => {
          console.log(data.data.insertedId);
          if (data.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Selected successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
   <>
       <Helmet>
        <title>Song Book | Classes</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className={`rounded-lg p-4 shadow ${
            classItem.availableSeats <= 0 ? "bg-red-300" : "bg-white"
          }`}
        >
          <img src={classItem.classImage} alt="Class Image" className="mb-4 h-64 w-full rounded-xl" />
          <h2 className="text-xl font-bold mb-2">{classItem.className}</h2>
          <p className="mb-2">Instructor: {classItem.instructorName}</p>
          <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
          <p className="mb-4">Price: {classItem.price}</p>

          {classItem.availableSeats > 0 ? (
            <button onClick={() => handleSelectClass(classItem)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Select
            </button>
          ) : (
            <button className="bg-gray-500 cursor-not-allowed text-white px-4 py-2 rounded-lg" disabled>
              Not Available
            </button>
          )}
        </div>
      ))}
    </div>
   </>
  );
};

export default Template;