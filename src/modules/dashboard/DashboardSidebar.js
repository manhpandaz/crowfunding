import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogOut,
  IconPayment,
  IconProfile,
  IconWithDraw,
} from "components/Icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

import "./Dashboard.module.scss";

const sibarList = [
  {
    icon: <IconDashboard />,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign />,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment />,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithDraw />,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile />,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogOut />,
    title: "Logout",
    url: "/logout",
    onClick: () => {},
  },

  {
    icon: <IconDarkmode />,
    title: "Darkmode",
    url: "/darkmode",
  },
];

function DashboardSidebar(props) {
  // const [activeIcon, setActiveIcon] = useState(null);
  // const handleClick = (iconName) => {
  //   setActiveIcon(iconName === activeIcon ? null : iconName);
  // };
  const navLinkClass =
    "flex items-center md:w-12 md:h-12 md:justify-center rounded-lg last:mt-auto last:rounded-lg last:shadow-sidebar";
  return (
    <div className="w-[76px] flex flex-shrink-0 items-center flex-col bg-white rounded-[20px] shadow-sidebar py-10 px-[14px] gap-8">
      {sibarList.map((item, index) => {
        return (
          <div>
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive }) =>
                isActive
                  ? `${navLinkClass} bg-primary text-primary fill-current stroke-green bg-opacity-20 `
                  : `${navLinkClass} text-iconColor`
              }>
              <span className="p-[10px]">{item.icon}</span>
              <span className="hidden">{item.title}</span>
            </NavLink>
          </div>
        );
      })}
      {/* <button className="mt-40">
        <IconDarkmode />
      </button> */}
    </div>
  );
}

export default DashboardSidebar;

// render icon

/* <NavLink
            key={item.index}
            to={item.url}
            onClick={() => handleClick(item.title)}
            isActive={() => activeIcon === item.title}
            className={`flex items-center md:w-12 md:h-12 md:justify-center rounded-lg last:mt-40 last:bg-white  last:rounded-lg last:shadow-sidebar ${
              activeIcon === item.title
                ? "bg-primary text-primary fill-green stroke-green bg-opacity-20"
                : ""
            }`}
           
          >
            <div className="p-[10px]">{item.icon}</div>
            <div className="hidden">{item.title}</div>
          </NavLink> 
          */
