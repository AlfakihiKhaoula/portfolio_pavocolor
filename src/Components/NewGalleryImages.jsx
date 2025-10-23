import React from "react";

const NewGalleryImages = ({ img, clipPath }) => {
  return (
    <img
      src={img}
      alt="img"
      className="select-none w-72
      "
      style={{
        clipPath: clipPath,
      }}
    />
  );
};

export default NewGalleryImages;
