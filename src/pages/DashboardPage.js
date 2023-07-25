import Heading from "components/Common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import Campaign from "modules/campaign/Campaign";
import React from "react";

function DashboardPage(props) {
  return (
    <div>
      <LayoutDashboard>
        <Heading children={"Your Campaign"} number={4} />
        <Campaign />
      </LayoutDashboard>
    </div>
  );
}

export default DashboardPage;
