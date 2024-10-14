import React, { useState } from "react";

const Btn = ({ label, className , onClick }) => {

  return (
    <button
      onClick={onClick}
      className={`text-2xl bg-blue-600 text-white rounded-2xl p-3 hover:bg-blue-700 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Btn;
