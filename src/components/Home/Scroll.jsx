import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Scroll = () => {

  const scrollVisible = useSelector((store) => store.theme.scrollVisibility)

  return (
    <div className={` w-1/2 mx-auto flex justify-center dark:text-white transition-opacity duration-500 py-10 ${scrollVisible?"opacity-100":"opacity-0"}`}>
      <div>
        <h1 className="text-md  font-roboto">Scroll</h1>
        <motion.div
          className=" ml-4"
          animate={{
            y: ["0%", "50%", "0%"], 
          }}
          transition={{
            duration: 2,
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "loop", 
          }}
        >
          <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "12px" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Scroll;
