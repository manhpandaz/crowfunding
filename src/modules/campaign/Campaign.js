import React from "react";
import { v4 } from "uuid";
import CampaignItem from "./CampaignItem";
import GridFour from "./GridFour";
import CampainHeader from "./CampainHeader";
import Gap from "components/Common/Gap";
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
  {
    folder: "Home",
    title: "The Watchman's Chairs",
    desc: "Your home for indie and classic cinema has just been handed an...",
    currentRice: 5000,
    raised: 109000,
    totalBackers: 100,
    userImg: "",
    userName: "Nill",
  },
];

const campainHeaderData = [
  {
    folder: "Architecture",
    title: "Remake - We Make architecture exhibition",
    desc: "Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation",
    currentRice: 2000,
    raised: 2500,
    totalBackers: 173,
    dayLeft: 30,
  },
];

// function Card({ data }) {
//   const { folder, title, ...props } = data;
// }
function Campaign() {
  return (
    <div>
      {campainHeaderData.map((item) => {
        return <CampainHeader key={v4()} {...item} />;
      })}
      <Gap />
      <GridFour>
        {Array(1)
          .fill(0)
          .map((item) => {
            return (
              dataGrid.length <= 4 &&
              dataGrid.map((item, index) => {
                return <CampaignItem key={v4()} {...item} />;
              })
            );
          })}
      </GridFour>
    </div>
  );
}

export default Campaign;
