import React from "react";

export const Footer = () => {
  return (
    <div className="px-14 pt-12 pb-5 bg-main text-center text-white">
      <hr className="pb-6" />
      <div className="flex justify-center items-center text-sm">
        <div className="font-bold">
          Copyright &copy; 2023 |{" "}
          <span className="text-secondary">Griya</span> Movies
        </div>
      </div>
    </div>
  );
};
