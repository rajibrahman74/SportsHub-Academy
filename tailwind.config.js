/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#f46164",
          accent: "#87edda",
          neutral: "#242742",
          "base-100": "#F7F7F8",
          info: "#51D1F5",
          success: "#10b981",
          warning: "#f24040",
          error: "#F64174",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};