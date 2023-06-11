// DarkModeToggle.js
import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !darkMode;
    localStorage.setItem("darkMode", updatedMode);
    setDarkMode(updatedMode);
    document.documentElement.classList.toggle("dark", updatedMode);

    // Update the page background color based on the dark mode status
    if (updatedMode) {
      document.documentElement.style.backgroundColor = "#1f2937";
      document.documentElement.style.color = "#ffffff";
      document.getElementsByClassName("nav")[0].style.background = "#1f2937";
      document.getElementsByClassName("nav")[0].style.color = "#ffffff";
    } else {
      document.documentElement.style.backgroundColor = "#ffffff";
      document.documentElement.style.color = "#1f2937";
      document.getElementsByClassName("nav")[0].style.background = "#ffffff";
      document.getElementsByClassName("nav")[0].style.color = "#1f2937";
    }
  };

  return (
    <button
      className="fixed bottom-12 right-12 p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <FiSun className="w-6 h-6 text-yellow-500" />
      ) : (
        <FiMoon className="w-6 h-6 text-gray-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;