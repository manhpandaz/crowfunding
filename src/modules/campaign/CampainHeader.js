import { IconFolder } from "components/Icons";
import React from "react";
import { Link } from "react-router-dom";

function CampainHeader({
  title = "Title",
  desc = "Desc",
  folder = "Folder",
  currentRice = 0,
  raised = 0,
  totalBackers = 0,
  dayLeft = 0,
}) {
  return (
    <div className="flex gap-8 w-full max-w-[1048px] h-[266px]">
      <div className="flex-1 ">
        <img
          className="rounded-3xl w-full h-full"
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="flex-1 max-w-[435px] py-5">
        <Link className="flex justify-start items-center text-sm text-center">
          <IconFolder className="mr-3" />
          <span className="text-center">{folder}</span>
        </Link>
        <div className="mb-4 text-start">
          <h3 className="text-base text-text1 font-semibold py-4">{title}</h3>
          <span className="text-xs text-text3">{desc}</span>
        </div>
        <div className="range-bar mb-5 w-full h-[5px] rounded-md bg-[#EFEFEF]">
          <div className="w-[275px] h-[5px] bg-primary "></div>
        </div>
        <div className="mb-4 flex justify-between">
          <div className="flex flex-col text-center text-sm">
            <span>{`$ ${currentRice}`}</span>
            <span>{`Raised of $${raised}`}</span>
          </div>
          <div className="flex flex-col text-center text-sm">
            <span>{totalBackers}</span>
            <span>total backers</span>
          </div>
          <div className="day-left flex flex-col text-center text-sm">
            <span>{dayLeft}</span>
            <span>Days left</span>
          </div>
        </div>

        {/* <div className="flex items-center gap-2 mt-5">
          <div className="user w-8 h-8 rounded-3xl">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={
                userImg
                  ? userImg
                  : `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`
              }
              alt=""
            />
          </div>
          <Link>
            <div className="text-xs flex items-center gap-2">
              <span className="">by</span>
              <span className="font-semibold">{userName}</span>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default CampainHeader;
