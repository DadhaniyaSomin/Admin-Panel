import React from "react";
import Sidebar from "../componant/Sidebar";
import Topbar from "../componant/Topbar";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
