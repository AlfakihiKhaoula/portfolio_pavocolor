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
          <NewGalleryImages
            img="https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            clipPath={"xywh(0 5px 100% 100% round 0 60%)"}
          />
          <NewGalleryImages
            img="https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            clipPath={"xywh(0 5px 100% 100% round 60% 60% 0 0)"}
          />
          <NewGalleryImages
            img="https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            clipPath={"xywh(0 5px 100% 100% round 60% 0)"}
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default NewGallery;
