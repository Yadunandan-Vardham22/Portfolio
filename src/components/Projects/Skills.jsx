import React, { useState, useRef, useEffect } from "react";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import vs from "../../assets/vs.png";
import redux from "../../assets/redux.png";
import router from "../../assets/router.png";
import tailwind from "../../assets/tailwind.png";
import firebase from "../../assets/firebase.png";
import { motion } from "framer-motion";

const Skills = () => {
  const images = [html, css, js, react, tailwind, vs, redux, router, firebase];

  const marqueeRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth);
    }
  }, []);
  return (
    <div className="mx-auto w-3/4 h-[30vh] mb-4 dark:text-white">
      <h1 className="mb-16 flex justify-center text-2xl font-poppins">
        Technologies i use on daily basis.
      </h1>
      <div className="overflow-hidden w-full">
        <motion.div
          ref={marqueeRef}
          className="flex w-fit gap-16"
          animate={{
            x: [0, -contentWidth / 2],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-20 h-20 mx-4 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
