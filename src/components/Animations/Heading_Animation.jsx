import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/Heading_Animation.css"



const Heading_Animation = ({ text }) => {
  const letters = text.split("");
  return (
    <h4
      style={{
        display: "flex",
        justifyContent: "center",
        color: "white"
      }}
    >
      {letters?.map((char, index) =>
       
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
              y: -10,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              scale: [1.5, 1],
              y: 0,
              x: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.06,
                type: "tween",
                ease: "easeInOut",
              },
            }}
            viewport={{
                once: true
            }}
            style={{
              marginLeft: char === " " ? "0.9rem" : "0rem",
              color: "white",
            }}
          >
            {char}
          </motion.span>
        
      )}
    </h4>
  );
};

export default Heading_Animation;
