import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import HeroRegister from "./components/HeroRegister/HeroRegister.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/register",
              element: <Register></Register>
            },
            {
              path: "/heroRegister",
              element: <HeroRegister></HeroRegister>
            },
            //   {
            //     path: "/donation/:id",
            //     element: <DonationDetails></DonationDetails>,
            //     loader: () => fetch("./donation.json"),
            //   },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
