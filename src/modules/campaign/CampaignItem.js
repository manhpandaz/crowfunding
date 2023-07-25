import { current } from "@reduxjs/toolkit";
import { IconFolder } from "components/Icons";
import React from "react";
import { Link } from "react-router-dom";

function CampaignItem({
  src,
  title = "Title",
  desc = "Desc",
  folder = "Folder",
  currentRice = 0,
  raised = 0,
  totalBackers = 0,
  userImg,
  userName,
}) {
  return (
    <div className="shadow-sidebar mb-5">
      <Link>
        <div className="h-[200px] rounded-2xl mb-4">
          {" "}
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={
              src ||
              "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt=""
          />
        </div>
      </Link>
      <div className="p-4">
        <Link className="flex justify-start items-center text-sm text-center">
          <IconFolder className="mr-3" />
          <span className="text-center">{folder}</span>
        </Link>
        <div className="mb-4 text-start">
          <h3 className="text-base text-text1 font-semibold py-4">{title}</h3>
          <span className="text-xs text-text3">{desc}</span>
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
        </div>
        <div className="flex items-center gap-2 mt-5">
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
        </div>
      </div>
    </div>
  );
}

export default CampaignItem;
