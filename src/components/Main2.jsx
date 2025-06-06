import React from 'react'
import Innovation from '../assets/Innovation';
import Ideas from '../assets/Ideas';
import People from '../assets/People';
import "../styles/Main2.css"
import { motion } from 'framer-motion';
import { moving_left } from '../Animations/Moving_left';
import { moving_top } from '../Animations/Moving_top';
import { child, parent } from '../Animations/Main2_variants';

const Main2 = () => {
  return (
    <div className="container-fluid bg-black">
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" main2 d-flex justify-content-center align-items-center mx-auto"
      >
        <motion.div
          variants={child}
          className="main2-child main2-child1 d-flex justify-content-center gap-4 align-items-center"
        >
          <div className="d-flex main2-icons">
            <People />
          </div>
          <div className="d-flex flex-column gap-3">
            <h3 className="text-white fw-bold w-100">Advanced Tools</h3>
            <p className="w-100">
              Scelerisque viverra mauris in aliquam sem fringilla ut.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={child}
          className="main2-child main2-child2 d-flex justify-content-center gap-4 align-items-center"
        >
          <div className="d-flex main2-icons">
            <Innovation />
          </div>
          <div className="d-flex flex-column gap-3">
            <h3 className="text-white fw-bold w-100">Innovation</h3>
            <p className="w-100">
              Sit amet volutpat consequat mauris nunc congue nisi.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={child}
          className="main2-child main2-child2 d-flex justify-content-center gap-4 align-items-center"
        >
          <div className="d-flex main2-icons">
            <Ideas />
          </div>
          <div className="d-flex flex-column gap-3">
            <h3 className="text-white fw-bold w-100">Creative Ideas</h3>
            <p className="w-100">
              Sagittis aliquam malesuada bibendum arcu vitae elem.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Main2
