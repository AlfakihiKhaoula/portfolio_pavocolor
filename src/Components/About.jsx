import React from "react";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <div className="min-h-screen bg-primary py-36 md:pb-40">
      <SectionWrapper className={"space-y-24 px-5"}>
        <div className="flex flex-col md:flex-row  relative gap-10">
          <div className="relative z-30 drop-shadow-2xl md:w-1/2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[512px] relative  z-20"
              style={{
                clipPath: "xywh(0 0 100% 100% round 0% 0% 70% 0%)",
              }}
            />

            <div className="md:block hidden absolute bottom-1/2 right-1/2 translate-y-full translate-x-4/5 z-10 w-[454px] h-[216px] rotate-[130deg] rounded-[50%/50%] bg-brow/40" />
          </div>
          <div className="md:w-1/2 font-rouge flex flex-col justify-center gap-5">
            <h1 className="text-5xl">Multiple Modernisms in the Americas</h1>
            <p className="text-base font-nunito font-semibold">
              For many years these works, along with other beloved paintings and
              sculptures, have been located in galleries 262-65 in the Rice
              Building. We in Arts of the Americas recently re-envisioned and
              reinstalled these galleries, seeking to present art of North
              America in a more lively and engaging manner. <br /> <br />
              Our intention was to contextualize old favorites in new ways,
              introduce a greater variety of objects, and offer more complex and
              interesting narratives that highlight the true breadth and depth
              of our collection.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col md:flex-row  relative gap-10">
          <div className="md:w-1/2 font-rouge flex flex-col justify-center gap-5">
            <img src="/img.jpg" alt="Logo" className="w-[350px]  md:hidden" />
            <h1 className="text-5xl">Andrew James associate curator</h1>
            <p className="text-base font-nunito font-semibold">
              With this reinstallation, it was important to bring works by
              Native American artists into these galleries to create a more
              inclusive, expansive, and simply more accurate presentation of
              American art. <br /> <br /> These additions do not replace our
              dedicated gallery of Native and Indigenous art in the Morton Wing,
              but rather are a complement to it.
            </p>
          </div>

          <div className="w-1/2 hidden md:block gap-5 relative">
            <img
              src="/img.jpg"
              alt="Logo"
              className="w-[350px] rotate-[40deg] absolute -top-9 left-15 -translate-y-1/5  z-20 "
              style={{
                clipPath: "ellipse(25% 50% at 50% 50%)",
              }}
            />
            <img
              src="/img.jpg"
              alt="Logo"
              className="w-[150px] rotate-[40deg] absolute top-20 right-15 -translate-y-1/5  z-20 "
              style={{
                clipPath: "circle(50%)",
              }}
            />
            <div className="md:flex hidden absolute  top-0 z-10 w-[454px] h-[200px] rotate-[130deg] rounded-[50%/50%] border-2 border-red-500 " />

            <div className="md:flex hidden absolute right-0  z-10 w-[400px] h-[200px] rotate-[30deg] rounded-[50%/50%] border-2 border-red-500 " />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
