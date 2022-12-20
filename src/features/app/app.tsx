import React from "react";
import { Home } from "../home/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "../../providers/data.provider";
import { GoTop } from "../../components/go-top/go-top";
import { ToastContainer } from "react-toastify";
import { User } from "../user/user";
import { NotFound } from "../not-found/not-found";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:name",
      element: <User />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="gridBackground h-full w-full min-h-screen relative">
      <ToastContainer autoClose={2000} theme="colored" />
      <GoTop />
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
};
