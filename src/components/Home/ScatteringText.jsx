import React, { useState } from "react";
import { motion } from "framer-motion";

const ScatteringText = () => {
  const paragraph = `I have 3 years of experience creating seamless web applications using React and modern web technologies.`;

  return (
    <motion.div
      className="relative"
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 50,
        duration: 2,
      }}
    >
      <div className="font-dancing tracking-widest text-3xl leading-[50px] dark:text-[#FFFB8F] font-semibold mt-2 w-[100%]">
        {paragraph.split("").map((char, index) => (
          <motion.span
            className="inline-block"
            key={index}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 0, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 1,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ScatteringText;
