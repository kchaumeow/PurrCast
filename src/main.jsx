import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { getLocationViaIP, getLocationViaCoords } from "./api";

const router = createBrowserRouter([
  {
    element: <Home />,
    index: true,
    loader: async () => {
      if (navigator.geolocation) {
        await getLocationViaCoords();
      } else {
        await getLocationViaIP();
      }
      return null;
    },
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
