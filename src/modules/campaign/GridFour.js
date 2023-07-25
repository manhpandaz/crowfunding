import React from "react";

function GridFour({ children, className }) {
  return <div className={`grid grid-cols-4 gap-[30px] `}>{children}</div>;
}

export default GridFour;
