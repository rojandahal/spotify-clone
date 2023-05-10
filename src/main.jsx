import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBarRoutes from "./components/SideBar/SideBar";
import ErrorPage from "./error-page.jsx";
import Thumbnail from "./components/Cards/SongCard";
import Homepage from "./pages/HomePage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Authentication/Signup/Signup";

const router = createBrowserRouter([
  {
    element: <NavBarRoutes />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/features",
        element: <Thumbnail />,
      },
    ],
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
