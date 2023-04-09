import React from "react";
import "./style.css";
import Home from "./pages/Home";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BlogList from "./componant/BlogList";
import Blog from "./pages/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<Home />}
      errorElement={<p> Error Occured </p>}
    ></Route>
    <Route path="/blog" element={<Blog />} > </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
