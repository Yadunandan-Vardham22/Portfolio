import React, { useEffect } from "react";
import HeroHeading from "./HeroHeading";
import Scroll from "./Scroll";
import Skills from "../Projects/Skills";
import { useDispatch } from "react-redux";
import { changeScrollVisibility } from "../../store/themeSlice";
import Projects from "../Projects/Projects";
import Info from "./Info";
import Resume from "../Resume/Resume";
import ParticleField from "../../utils/ParticleField";
import { useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((store) => store.theme.themeMode);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) dispatch(changeScrollVisibility(false));
    if (scrollY < 50) dispatch(changeScrollVisibility(true));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* <div className="absolute -top-32  left-0 z-0">
        {themeMode ? <ParticleField numParticles={200} color="white"/> : ""}
      </div> */}
      <div className="relative z-10">
        <HeroHeading />
        <Info />
        <Scroll />
        <Skills />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default Body;
