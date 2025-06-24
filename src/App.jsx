import React from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./utils/BlurBlob";

function App() {
  return (
    <>
      <div className="bg-[#050414]  ">
        <BlurBlob
          position={{ top: "45%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(130,69,236,0.3)_1px,transparent_0)] bg-[size:40px_40px] animate-pulse "></div>

        <div className="relative pt-20">
          <Header />
          <About />
          <Skills />
          <Project />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
