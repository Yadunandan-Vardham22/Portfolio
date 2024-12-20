import React from "react";
import ScatteringText from "./ScatteringText";
import { motion } from "framer-motion";

const HeroHeading = () => {
  return (
    <div className="flex mx-auto w-3/4 mt-36 h-[400px] overflow-auto dark:text-white">
      <div className="w-[65%]">
        <motion.h1
          className="pb-8 font-semibold text-5xl font-fredoka"
          initial={{ x: "-10%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 50,
            duration: 2,
          }}
        >
          Hello, I'm{" "}
          <span className="bg-[#FFFB8F] hollow-text cursor-pointer">
            Yadunandan
          </span>{" "}
          ,
        </motion.h1>
        <motion.h1
          className="pb-5 font-semibold text-5xl font-fredoka"
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 50,
            duration: 2,
          }}
        >
          <span className="hover:bg-[#FFCCE1] dark:hover:bg-black cursor-pointer">
            Front
          </span>{" "}
          -{" "}
          <span className="hover:bg-[#B1F0F7] dark:hover:bg-black  cursor-pointer">
            End
          </span>{" "}
          <span className="hover:bg-[#A7D477] dark:hover:bg-black  cursor-pointer">
            Developer
          </span>
          <motion.span>.</motion.span>
        </motion.h1>

        <ScatteringText />
      </div>
    </div>
  );
};

export default HeroHeading;
