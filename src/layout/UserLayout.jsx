import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Navbar />
        </div>
        <div className="col-span-10 w-full mx-auto bg-[#FAFBFF] ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
