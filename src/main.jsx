import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";

async function getLocationViaIP() {
  return await axios.get()
}

async function getLocationViaCoords() {
  getLocationPromisified()
    .then((position) => {
      return axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=21456ca20c7043f992384220232908&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=no&alerts=no`
      );
    })
    .then((result) => {
      console.log(result.data);
    });
}

function getLocationPromisified() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

const router = createBrowserRouter([
  {
    element: <Home />,
    index: true,
    loader: async () => {
      if (navigator.geolocation) {
        getLocationViaCoords();
      } else {
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
