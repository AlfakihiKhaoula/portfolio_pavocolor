import React from "react";
import Ellipse from "/Ellipse.svg";
const Button = () => {
  return (
    <button className="p-5 relative group cursor-pointer translate-y-1/2 ">
      <div className="rounded-[50%/50%] w-48 h-16 border-[0.1px] border-white absolute -rotate-12 left-1/2 -translate-x-1/2 group-hover:rotate-0 transition-all duration-700" />
      <div className="rounded-[50%/50%] w-48 h-16 border-[0.2px] border-white absolute rotate-12 left-1/2 -translate-x-1/2 group-hover:rotate-0 transition-all duration-700" />
      <p className="text-lightBrownish text-xl absolute left-1/2 -translate-x-1/2 text-nowrap top-1/2 translate-y-1/2">
        All gallery
      </p>
    </button>
  );
};

export default Button;
