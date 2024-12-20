import React from "react";
import { motion } from "framer-motion";

const Particle = ({ size, xRange, yRange, color,xStart,yStart }) => {
  const animation = {
    initial: {
      x: `${xStart}vw`,
      y:`${yStart}vh`,
      scale: 1,
        opacity:1
    },
    animate: {
        x: [xStart, xStart + xRange, xStart - xRange, xStart],
      y: [yStart, yStart + yRange, yStart - yRange, yStart],
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
    },
  };

  return (
    <motion.div
        className="left-40"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        position: "absolute",
        top:270,
        left:700
      }}
      variants={animation}
      initial="initial"
      animate="animate"
      transition={{
        duration: Math.random() * 5 + 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default Particle;
