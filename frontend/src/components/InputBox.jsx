import React from "react";

const InputBox = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col my-3 lg:my-7 text-left">
      <label
        className="text-slate-200 text-xl md:text-2xl text-pretty font-medium m-2"
        htmlFor={`${label}`}
      >
        {label}
      </label>
      <input
        className="md:p-3 p-1 md:px-4 px-2 rounded-xl bg-white text-blue-500 md:text-xl text-lg"
        type={`${type}`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

export default InputBox;
