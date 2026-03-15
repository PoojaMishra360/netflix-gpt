import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, Router ,RouterProvider } from "react-router-dom";

export default function Body() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browser", element: <Browser /> },
  ]);
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  );
}
