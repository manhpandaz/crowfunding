import React from "react";

function Input({ errors }) {
  return (
    <input
      id="username"
      name="username"
      type="text"
      className={`border border-strock rounded-lg  w-full mb-5 px-6 py-4 ${
        errors.length > 0 ? "border-error" : "border-strock"
      }`}
      placeholder="Tran Van A"
    />
  );
}

export default Input;
