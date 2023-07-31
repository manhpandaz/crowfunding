import React from "react";

function CampaignInput(props) {
  return (
    <form className="mt-[40px] p-[100px]">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center mb-[40px]">
          Start a Campaign
        </h1>
        <div className="flex justify-between mb-[25px]">
          <div className="flex flex-col w-1/2">
            <label htmlFor="titleCampaign">Campaign Title *</label>
            <input
              id="titleCampaign"
              name="titleCampaign"
              className="py-[15px] px-[25px] self-stretch"
              type="text"
              placeholder="Write a title"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="category">Select a category *</label>
            <select
              placeholder="Write a category"
              className="py-[15px] px-[25px] self-stretch">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="mb-[25px]">
          <span name="campaignTitle">Short Description *</span>
          <textarea
            className="w-full h-[145px] p-[25px]"
            name="campaignTitle"
            placeholder="Write a short description...."
            id=""
            cols="30"
            rows="10"></textarea>
        </div>
        <div className="mb-[25px]">
          <span name="campaignTitle">Story *</span>
          <textarea
            className="w-full h-[303px] p-[25px]"
            name="campaignTitle"
            placeholder="Write a short description...."
            id=""
            cols="30"
            rows="10"></textarea>
        </div>
      </div>
      <div className="total-raise"></div>
      <form action="">
        <div className="flex justify-between mb-[45px]">
          <div>
            <label htmlFor="goal" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="goal" type="number" placeholder="$0.00 USD" />
          </div>
          <div>
            <label htmlFor="raiseAmount" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="raiseAmount" type="number" placeholder="$0.00 USD" />
          </div>
        </div>

        <div className="flex justify-between mb-[45px]">
          <div>
            <label htmlFor="goal" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="goal" type="number" placeholder="$0.00 USD" />
          </div>
          <div>
            <label htmlFor="raiseAmount" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="raiseAmount" type="number" placeholder="$0.00 USD" />
          </div>
        </div>

        <div className="flex justify-between mb-[45px]">
          <div>
            <label htmlFor="goal" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="goal" type="number" placeholder="$0.00 USD" />
          </div>
          <div>
            <label htmlFor="raiseAmount" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="raiseAmount" type="number" placeholder="$0.00 USD" />
          </div>
        </div>

        <div className="flex justify-between gap-[45px]">
          <div>
            <label htmlFor="goal" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="goal" type="number" placeholder="$0.00 USD" />
          </div>
          <div>
            <label htmlFor="raiseAmount" className="flex flex-col text-start">
              Goal *
            </label>
            <input id="raiseAmount" type="number" placeholder="$0.00 USD" />
          </div>
        </div>
      </form>
    </form>
  );
}

export default CampaignInput;
