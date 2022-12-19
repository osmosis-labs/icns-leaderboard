import React from "react";
import { Home } from "../home/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "../../providers/data.provider";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="gridBackground h-full w-full min-h-screen">
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
};
