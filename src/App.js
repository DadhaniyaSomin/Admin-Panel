import React from "react";
import "./style.css";
import Home from "./pages/Home";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home />}
      errorElement={<p> Error Occured </p>}
    ></Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
