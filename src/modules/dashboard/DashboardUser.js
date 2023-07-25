import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DashboardUser({ src }) {
  return (
    <div className="mr-3 w-[52px] h-[52px] border rounded-full cursor-pointer">
      <div className="w-full h-full flex items-center justify-center text-[1.6rem]">
        {src ? (
          <img
            src={src}
            className="w-full h-full object-cover rounded-full"
            alt="user"
          />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
      </div>
    </div>
  );
}

export default DashboardUser;
