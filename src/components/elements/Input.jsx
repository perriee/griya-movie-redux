import React from "react";
import { useNavigate } from "react-router-dom";

export const Input = ({name}) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        className="w-[370px] ps-3 pe-9 py-1.5 text-sm text-white bg-[#292929] rounded outline-none"
        placeholder="Search .."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 absolute right-3 cursor-pointer hover:stroke-secondary"
        onClick={() => navigate(`/${name}`)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};
