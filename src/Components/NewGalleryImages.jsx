import React from "react";

const NewGalleryImages = ({ clipPath }) => {
  return (
    <img
      src="/img.jpg"
      alt="img"
      className="select-none"
      style={{
        clipPath: clipPath,
      }}
    />
  );
};

export default NewGalleryImages;
