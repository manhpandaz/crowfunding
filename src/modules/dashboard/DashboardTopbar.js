import {
  faAngleDown,
  faArrowTrendUp,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DashboardTopbar(props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src="/logo.png" alt="" className="w-14" />
      </div>
      <div>
        <input type="text" className="border" />
        <button>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faArrowTrendUp} />
        <ul>
          <li>
            Fundrising for <FontAwesomeIcon icon={faAngleDown} />
          </li>
        </ul>
        <button>start a campaign</button>
        <div className="">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
}

export default DashboardTopbar;
