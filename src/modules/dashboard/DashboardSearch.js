import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function DashboardSearch(props) {
  return (
    <div className="relative">
      <div className="search w-full max-w-[458px] flex-1 h-11 bg-white border rounded-3xl flex items-center relative ">
        <input
          type="text"
          className="flex-1 h-full border rounded-3xl py-3 pl-3 pr-20 bg-transparent"
          placeholder="Do fundrise now"
        />
        <button className="absolute right-0 border w-[72px] flex-shrink-0 h-full rounded-3xl px-7 bg-primary">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-white"></FontAwesomeIcon>
        </button>
      </div>
      <div className="search-result hidden absolute w-full lg:w-[843px] bg-white top-full left-0 shadow-sidebar translate-y-5 pb-6 rounded-3xl">
        <div className="flex  justify-between items-center p-[10px] mb-[25px]">
          <Link className="total-result underline">
            <span>
              See all <span>10,102</span> fundriser
            </span>
          </Link>
          <button className="close px-5 py-3 hover:text-[#EB5757] hover:bg-[#f9a9a9] cursor-pointer rounded-lg">
            <FontAwesomeIcon className="" icon={faClose} />
          </button>
        </div>
        <div className="mb-[15px] p-[25px]">
          <ResultItem />
          <ResultItem />
        </div>
        <div className="releted p-6 ">
          <h4 className="font-semibold mb-[15px]">Releted searchs</h4>
          <div className="flex flex-col gap-[10px] font-normal">
            <span className=" ">schoralship fund</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultItem() {
  return (
    <div className="user flex mb-[15px]">
      <img
        className="w-[50px] h-[50px] rounded-xl"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="ml-5">
        <h4 className="font-semibold text-text1">
          Education fund for Durgham Family By Durgham Family
        </h4>
        <span className="font-normal text-text3">By Durgham Family</span>
      </div>
    </div>
  );
}

// function ReletedSearch() {}

export default DashboardSearch;
