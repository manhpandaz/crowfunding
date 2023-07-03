import React from "react";
import PropTypes from "prop-types";
function ButtonSign({ title, type, icon, classnames, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-x-2 font-semibold w-full p-3 mb-5 border rounded-lg ${classnames}`}>
      {icon
        ? icon || <img src={icon} className={classnames} alt="google" />
        : ""}
      <span>{title}</span>
    </button>
  );
}

ButtonSign.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.node,
};

export default ButtonSign;
