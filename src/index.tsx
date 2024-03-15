import * as React from "react";
import { createRoot } from "react-dom/client";
import Fabricjs from "./Fabricjs";
import Price from "./Price";
import Main from "./Main";
import ReactCanvas from "./ReactCanvas";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Main/>
    ),
  },
  
  {path:"/reactcanvas",
  element: (
    <ReactCanvas/>
   ),
  },
  {
    path: "fabricjs",
    element: <Fabricjs />
  },

  {
    path: "price",
    element: <Price />
  },
]);

createRoot(document.getElementById("root") as any).render(
  <RouterProvider router={router} />
);