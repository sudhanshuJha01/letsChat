import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-cyan-700  lg:w-2/5  lg:p-7 p-5 rounded-3xl text-center shadow-2xl  shadow-blue-800  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
