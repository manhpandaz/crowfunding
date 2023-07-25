import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

function LayoutDashboard({ children }) {
  return (
    <div className="p-10 bg-lightBg">
      <div className="overlay hidden fixed inset-0 bg-black bg-opacity-10"></div>
      <DashboardTopbar />
      <div className="flex ">
        <DashboardSidebar />
        <div className="flex-1"> {children}</div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
