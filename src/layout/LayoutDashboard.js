import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

function LayoutDashboard({ children }) {
  return (
    <div className="p-10 bg-lightBg">
      <DashboardTopbar />
      <div className="flex ">
        <DashboardSidebar />
        <div> {children}</div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
