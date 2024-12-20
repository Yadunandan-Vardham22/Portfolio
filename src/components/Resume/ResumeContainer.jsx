import React from "react";
import { motion } from "framer-motion";


const ResumeContainer = () => {
  
  return (
    <div>
      <div className="w-3/4 mx-auto flex justify-center">
        <motion.button
          className="w-56  mt-12 mb-12 h-[70px] bg-black text-white font-bold font-poppins tracking-wider rounded-lg"
          style={{ wordSpacing: "8px" }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Download Resume
        </motion.button>
   
      </div>
    </div>
  );
};

export default ResumeContainer;
