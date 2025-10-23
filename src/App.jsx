import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewGallery from "./Components/NewGallery";
import About from "./Components/About";
import DomeGallery from "./Components/DomeGallery";
import Button from "./Components/Button";
import ReactLenis, { useLenis } from "lenis/react";
import gsap from "gsap";
const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <main>
        {/* <Navbar /> */}
        <NewGallery />
        <About />

        <div
          className="bg-lightBrownish relative"
          style={{ width: "99vw", height: "100vh" }}
        >
          <DomeGallery
            overlayBlurColor="#e9e9db"
            fit={1}
            maxVerticalRotationDeg={12}
            grayscale={false}
          />
        </div>
      </main>
    </>
  );
};

export default App;
