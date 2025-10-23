import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionWrapper from "./SectionWrapper";
import ImageTrail from "./ImageTrail";
import { Info } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    const q = gsap.utils.selector(el);

    gsap.to(icon1.current, {
      x: 25,
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
        end: "top 40%",
        scrub: true,
      },
    });

    gsap.to(icon2.current, {
      x: -25,
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
        end: "top 40%",
        scrub: true,
      },
    });

    // Animate heading words
    gsap.fromTo(
      q(".word-h1"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Animate paragraph words
    gsap.fromTo(
      q(".word-p"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.to(q(".word-h1, .word-p"), {
      color: "#1a1a1a",
      duration: 1.2,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
  }, []);

  // Helper to wrap each word in a span
  const wrapWords = (text, className) =>
    text.split(" ").map((word, i) => (
      <span key={i} className={`${className} inline-block mr-2`}>
        {word}
      </span>
    ));

  return (
    <div className="min-h-screen bg-primary relative">
      <SectionWrapper className="space-y-24 px-5 relative">
        {/* Animated text */}
        <div
          className="flex flex-col items-center justify-center absolute left-1/2 top-1/2 
                     -translate-x-1/2 -translate-y-1/2 z-20 select-none space-y-16 text-gray-400 text-center"
        >
          <div className="flex items-center gap-12">
            <Info ref={icon1} color="#b88d72" size={30} />
            <h1 className="font-semibold uppercase font-dm text-2xl flex flex-wrap justify-center text-[#b88d72]">
              About our company
            </h1>
            <Info ref={icon2} color="#b88d72" size={30} />
          </div>
          <p
            ref={containerRef}
            className="font-dm max-w-4xl text-3xl font-bold flex flex-wrap justify-center text-brown"
          >
            {wrapWords(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia beatae nam quisquam accusamus eum corrupti, quas ad sequi?",
              "word-p"
            )}
          </p>
        </div>

        {/* Image Trail */}
        <div className="h-[90vh] relative overflow-hidden z-10">
          <ImageTrail
            items={[
              "https://picsum.photos/id/287/300/300",
              "https://picsum.photos/id/1001/300/300",
              "https://picsum.photos/id/1025/300/300",
              "https://picsum.photos/id/1026/300/300",
              "https://picsum.photos/id/1027/300/300",
              "https://picsum.photos/id/1028/300/300",
              "https://picsum.photos/id/1029/300/300",
              "https://picsum.photos/id/1030/300/300",
            ]}
            variant={1}
          />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
