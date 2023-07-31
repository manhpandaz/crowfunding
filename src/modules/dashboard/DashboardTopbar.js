import {
  faAngleDown,
  faArrowTrendUp,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardSearch from "./DashboardSearch";
import DashboardUser from "./DashboardUser";
import Button from "components/Button";

function DashboardTopbar(props) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-14 items-center max-w-[458px]">
        <div>
          <img src="/logo.png" alt="" className="w-14" />
        </div>
        <DashboardSearch />
      </div>
      <div className="action w-[497px] flex justify-between items-center">
        <div className="flex">
          <FontAwesomeIcon icon={faArrowTrendUp} />
          <ul>
            <li>
              <span className="mx-2">Fundrising for</span>{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </li>
          </ul>
        </div>
        <Button
          title={"start a campaign"}
          href={"/campaign"}
          className="bg-secondary font-semibold text-white p-3 rounded-lg"></Button>
        <DashboardUser
          src={
            "https://images.unsplash.com/photo-1688607931530-4767bf468bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
    </div>
  );
}

export default DashboardTopbar;
