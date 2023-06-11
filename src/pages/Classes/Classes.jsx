// import React, { useContext } from "react";
// import { Helmet } from "react-helmet";
// import useData from "../../hooks/useData";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { AuthContext } from "../../providers/AuthProviders";
// import Swal from "sweetalert2";
// import useAdmin from "../../hooks/useAdmin";
// import useInstructor from "../../hooks/useInstructor";

// const Classes = () => {
//   const [data] = useData();
//   const [axiosSecure] = useAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const [isInstructor] = useInstructor();

//   const handleSelectClass = (cls) => {
//     const { class_name, class_image, instructor_name, price } = cls;
//     if (user?.email) {
//       const addedClass = {
//         userEmail: user?.email,
//         class_name,
//         class_image,
//         instructor_name,
//         price,
//       };
//       axiosSecure
//         .post("/selectedclass", addedClass)
//         .then((data) => {
//           console.log(data.data.insertedId);
//           if (data.data.insertedId) {
//             Swal.fire({
//               position: "center",
//               icon: "success",
//               title: "Selected successfully",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   const handleButtonClick = (item) => {
//     if (user) {
//       handleSelectClass(item);
//     } else {
//       Swal.fire({
//         position: "top-start",
//         icon: "error",
//         title: "Please log in first",
//         showConfirmButton: false,
//         timer: 500,
//       }).then(() => {
//         window.location.href = "/login";
//       });
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 my-20">
//       <Helmet>
//         <title>Classes - SportsHub Academy</title>
//       </Helmet>
//       <h2 className="font-bold text-center text-3xl mb-16">All Classes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//         {data.map((item) => (
//           <div
//             key={item._id}
//             className={`overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 ${
//               item.available_seats <= 0
//                 ? "border-[3px] border-red-600"
//                 : "border-0"
//             }`}
//           >
//             {/* Image */}
//             <figure>
//               <img
//                 src={item.class_image}
//                 alt="card image"
//                 className="aspect-video w-full"
//               />
//             </figure>
//             {/* Body */}
//             <div className="p-6">
//               <header className="mb-4">
//                 <h3 className="text-xl font-medium text-slate-700">
//                   {item.class_name}
//                 </h3>
//                 <p className="font-semibold text-black text-md my-3">
//                   {item.instructor_name}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-400">Price: ${item.price}</span>
//                   <span className="text-slate-400">
//                     Available seats: {item.available_seats}
//                   </span>
//                 </div>
//               </header>
//             </div>
//             {/* Action base sized basic button */}
//             <div className="flex justify-end p-6 pt-0">
//               {user && (isAdmin || isInstructor) ? (
//                 <button
//                   onClick={() => handleButtonClick(item)}
//                   className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-none bg-warning px-5 text-sm font-medium tracking-wide text-white opacity-50 cursor-not-allowed"
//                   disabled
//                 >
//                   <span>Select class</span>
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => handleButtonClick(item)}
//                   className={`inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-none bg-warning px-5 text-sm font-medium tracking-wide text-white ${
//                     item.available_seats <= 0
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//                   disabled={item.available_seats <= 0}
//                 >
//                   <span>Select class</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Classes;