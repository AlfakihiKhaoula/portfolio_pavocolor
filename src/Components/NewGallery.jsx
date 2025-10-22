import React from "react";
import NewGalleryImages from "./NewGalleryImages";
import Button from "./Button";
import BigTilte from "./BigTilte";
import SectionWrapper from "./SectionWrapper";

const NewGallery = () => {
  return (
    <div className="bg-dark min-h-screen w-full  pb-36">
      <SectionWrapper>
        <BigTilte bgTitle="New gallery" title={"New gallery"} />
        <div className="flex flex-col md:flex-row justify-evenly px-4 ">
          <NewGalleryImages clipPath={"xywh(0 5px 100% 100% round 0 60%)"} />
          <NewGalleryImages
            clipPath={"xywh(0 5px 100% 100% round 60% 60% 0 0)"}
          />
          <NewGalleryImages clipPath={"xywh(0 5px 100% 100% round 60% 0)"} />
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default NewGallery;
