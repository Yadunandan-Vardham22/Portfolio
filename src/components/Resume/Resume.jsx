import React from "react";
import ResumeContainer from "./ResumeContainer";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import ParticleField from "../../utils/ParticleField";

const Resume = () => {
  const themeMode = useSelector((store) => store.theme.themeMode);
  return (
    <div className="relative">
      <div className="w-[100%] bg-[#A89BF3] h-[70vh] shadow-md mt-12 dark:bg-black">
        <div className=" relative py-10 mx-auto w-[85%] mb-12 rounded-3xl bg-[#A89BF3] overflow-hidden">
          <ResumeContainer />
          <Contact />
          <div className="absolute top-0 w-56 h-52 bg-gradient-to-br from-[#D0C5FA] z-0 rounded-br-full"></div>
          <div className="absolute top-[60%] w-56 h-52 bg-gradient-to-br from-[#7F7CE0] z-0 rounded-tr-full"></div>
          <div className="absolute right-0 top-[60%] bg-gradient-to-br from-[#D0C5FA] z-0 rounded-tl-full w-56 h-52 "></div>
          <div className="absolute top-0 right-0 w-56 h-52 bg-gradient-to-br from-[#7F7CE0] z-0  rounded-bl-full"></div>
        </div>
        {/* <div className="absolute -top-32  left-0 z-0">
          {themeMode ? <ParticleField numParticles={100} color="#7F7CE0"/> : ""}
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
