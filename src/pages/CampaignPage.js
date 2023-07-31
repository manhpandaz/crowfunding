import Heading from "components/Common/Heading";
import { IconPlusCircle } from "components/Icons";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignItem from "modules/campaign/CampaignItem";
import CampainHeader from "modules/campaign/CampainHeader";
import GridFour from "modules/campaign/GridFour";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import Button from "../components/Button";
const dataGrid = [
  {
    folder: "Education",
    title: "Powered Kits Learning Boxes",
    desc: "Fun, durable and reusable boxes with eco-friendly options.",
    currentRice: 2000,
    raised: 1900,
    totalBackers: 173,
    userImg: "",
    userName: "TranVanManh",
  },
  {
    folder: "Real Estate",
    title: "Building Hope Village",
    desc: "Together we can create access for everyone!",
    currentRice: 250,
    raised: 1900,
    totalBackers: 50,
    userImg: "",
    userName: "Adom Shafi",
  },
  {
    folder: "Real Estate",
    title: "New iMac For My Business!",
    desc: "My computer decided to die. As a result, my small business.",
    currentRice: 1200,
    raised: 1800,
    totalBackers: 12,
    userImg: "",
    userName: "Sami Ahmed",
  },
];
function CampaignPage({ children }) {
  return (
    <LayoutDashboard>
      <div className="flex justify-between mb-[40px]">
        <div className="flex items-start gap-[25px]">
          <div className="icon">
            <IconPlusCircle className="w-[54px] h-[54px]" />
          </div>
          <div className="campaign-title flex flex-col">
            <h3>Create Your Campaign</h3>
            <span>
              Jump right into our editor and create your first Virtue campaign!
            </span>
            <NavLink className="text-primary">
              Need any help? Learn More...
            </NavLink>
          </div>
        </div>
        <Button
          title={"Create campaign"}
          href={"/campaign/startCampaign"}
          classnames={"bg-[#EEEAFD] text-secondary"}></Button>
      </div>
      <Heading children="Your Campaign" number={4} />
      <GridFour type="grid">
        {dataGrid.map((item) => {
          return <CampainHeader {...item}></CampainHeader>;
        })}
      </GridFour>
    </LayoutDashboard>
  );
}

export default CampaignPage;
