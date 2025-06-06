import React from 'react'
import { motion } from 'framer-motion';
import { moving_right } from '../Animations/Moving_right';
import Bar from '../assets/Bar';
import Dot from '../assets/Dot';
import '../styles/Main3.css'

const Title = ({text}) => {
  return (
    <div>
      <motion.div
        variants={moving_right}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="d-flex justify-content-center align-items-center gap-sm 3 gap-2 fs-3 w-100"
      >
        <Bar width={`55`} height={`2.1`} />
        <Dot width={13} height={13} />
        <div className="text-secondary gallery-text d-flex justify-content-center align-items-center">
          {text}
        </div>
        <Dot width={13} height={13} />
        <Bar width={`55`} height={`2.1`} />
      </motion.div>
    </div>
  );
}

export default Title
