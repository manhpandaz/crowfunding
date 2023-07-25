import React from "react";

function Heading({ children, className = "", number = null }) {
  return (
    <div
      className={`text-lg font-semibold text-text1 inline-flex mb-5 ${className}`}>
      <h3 className="mr-2">{children}</h3>
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </div>
  );
}

export default Heading;
