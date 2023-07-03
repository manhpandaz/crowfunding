import React from "react";

function Checkbox({ checked = false, onClick = () => {}, name }) {
  return (
    <>
      <input
        type="checkbox"
        id="temps"
        className="hidden"
        onChange={() => {}}
      />
      <label
        className={`relative inline-block mr-2 w-5 h-5 border border-strock rounded cursor-pointer  ${
          checked ? "bg-primary border-primary" : "border-strock"
        }`}
        onClick={onClick}>
        <span className="absolute flex justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </label>
    </>
    // <label
    //   htmlFor=""
    //   className="inline-block w-5 h-5 rounded border-strock"></label>
  );
}

export default Checkbox;
