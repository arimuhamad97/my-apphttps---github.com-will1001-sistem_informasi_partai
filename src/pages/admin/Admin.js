import React, { useState } from "react";
import SideBar from "../../component/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./DashboardAdmn";
import RealCountAdmn from "./RealCountAdmn";
import AdminContent from "../../component/sidebar/AdminContent";

function Admin() {
  return (
    <>
      <div className="flex">
        <div className="basis-3/12 h-full">
          <SideBar content={<AdminContent />} />
        </div>
        <div className="basis-9/12">
          <Routes>
            <Route path="/Dashboard" element={<AdminDashboard />} />
            <Route path="/real-count" element={<RealCountAdmn />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Admin;
