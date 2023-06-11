import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [selectClass, refetch] = useSelectedClass();
  console.log(selectClass);
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedclass/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div>
        <h2 className="text-center text-2xl font-semibold my-12">
          Select Classes
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Class Img</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {selectClass.map((user, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold h-12 w-24">
                        <img src={user.class_image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{user.class_name}</span>
                </td>
                <td>{user.instructor_name}</td>

                <td>{user.price}</td>

                <td>
                  {user.role == "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-
                                    bg-red-600 text-white border-0 btn-sm hover:bg-black"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  )}
                </td>
                <td>
                  <Link to="/dashboard/payment" state={user}>
                    <button className="btn btn-warning btn-sm">Pay</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClasses;
