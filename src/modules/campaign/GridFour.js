import React from "react";

function GridFour({ children, className, type = "default" }) {
  if (type !== "default") {
    return <div className="grid grid-cols-1 gap-[40px]">{children}</div>;
  }
  return <div className={`grid grid-cols-4 gap-[30px] `}>{children}</div>;
}

export default GridFour;
