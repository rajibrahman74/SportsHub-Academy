import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);