// import { useState, useEffect } from "react";

// const useDarkMode = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedDarkMode = localStorage.getItem("darkMode");
//     return savedDarkMode ? JSON.parse(savedDarkMode) : false;
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return [darkMode, toggleDarkMode];
// };

// export default useDarkMode;
