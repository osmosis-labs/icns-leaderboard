import React from "react";
import { Home } from "../home/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserPage } from "../user/user-page";
import { NotFound } from "../not-found/not-found";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:name",
      element: <UserPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="gridBackground h-full w-full min-h-screen relative">
      <ToastContainer autoClose={2000} theme="colored" />
      <RouterProvider router={router} />
    </div>
  );
};
