import React from "react";

function ButtonSign({ title, icon, classnames }) {
  return (
    <button
      className={`flex items-center justify-center gap-x-2 w-full p-3 mb-5 border rounded-lg ${classnames}`}>
      {icon ? <img src={icon} className={`${classnames}`} alt="google" /> : ""}
      <span>{title}</span>
    </button>
  );
}

export default ButtonSign;
