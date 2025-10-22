import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewGallery from "./Components/NewGallery";
import About from "./Components/About";
import DomeGallery from "./Components/DomeGallery";
import Button from "./Components/Button";
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <NewGallery />
      <About />
      <div
        className="bg-primary relative"
        style={{ width: "99vw", height: "100vh" }}
      >
        <DomeGallery fit={1} maxVerticalRotationDeg={12} grayscale={false} />
        <div className="bg-black h-46 pb-28 flex items-center justify-center">
          <Button>All Gallery</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
