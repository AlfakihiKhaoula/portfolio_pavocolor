import React from "react";

const BigTilte = ({ bgTitle, title }) => {
  return (
    <div className="md:h-72 h-40 overflow-hidden relative">
      <h1 className="text-lightBrownish text-center text-[8vw] md:text-[6vw] font-dm absolute md:top-1/2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold">
        {bgTitle}
      </h1>
      {title && (
        <p className="font-dm font-extralight text-[17vw] text-nowrap  md:leading-48 absolute top-0 left-1/2 -translate-x-1/2 text-brownish/30">
          {title}
        </p>
      )}
    </div>
  );
};

export default BigTilte;
