import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBarRoutes from ".";
import ErrorPage from "./error-page.jsx";
import Homepage from "./pages/HomePage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Authentication/Signup/Signup";
import Login from "./pages/Authentication/Login/Login";
import { RecoilRoot } from "recoil";
import Details from "./pages/Details/Details";
import SearchPage from "./pages/HomePage/SearchPage";
import LikedSongs from "./pages/LikedSongs";

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
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/song/:id",
        element: <Details />,
      },
      {
        path: "/liked-songs",
        element: <LikedSongs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
