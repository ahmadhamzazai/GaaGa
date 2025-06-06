import React from 'react'
import "../styles/main8.css"
import Heading_Animation from "../components/Animations/Heading_Animation.jsx"
import Sliding from "../components/Sliding.jsx"
import { motion } from 'framer-motion'
import {moving_top} from "../Animations/Moving_top.jsx"

const Main8 = () => {
  return (
    <div name="main8" className="main8">
      <h1>case study</h1>
      <div className="main8-bottom">
        <motion.h2 variants={moving_top} initial="hidden" whileInView="show" viewport={{once: true}}>Get Fresh Energy With New Ideas</motion.h2>
        <Sliding content="Join Now" />
      </div>
    </div>
  );
}

export default Main8
