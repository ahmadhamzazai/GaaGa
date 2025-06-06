import React, { useState } from 'react'
import Title from './Title'
import Heading_Animation from './Animations/Heading_Animation'
import Sliding from "../components/Sliding.jsx"
import "../styles/Main6.css"
import { services_data } from '../data/Services_data.jsx'
import { motion } from 'framer-motion'
import { parent } from '../Animations/Main2_variants.jsx'
import { child } from '../Animations/Main2_variants.jsx'
import { Element } from 'react-scroll'

const Main6 = () => {
  return (
    <Element name='services' className="servicess">
      <div className="parallax-bg"></div>
      <div className="services-top d-flex flex-column">
        <Title text="Serives" />
        <Heading_Animation text="What We Have to Offer" />
      </div>
      <div className="services-bottom d-flex justify-content-center align-items-center">
        <motion.div variants={parent} initial="hidden" whileInView="show" viewport={{once: true}} className="row justify-content-center align-items-center col-xl-12 col-lg-10 col-md-12 col-sm-10">

          {services_data?.map((column, index) => (
            <motion.div variants={child} className="col-xl-3 col-md-6 services-col">
              <div className="sb-child-top">
                <h3>{column.heading}</h3>
                <p>
                  {column.text}
                </p>
              </div>
              <div className="sb-child-bottom">
                <Sliding content="Know More" className="sliding" />
              </div>
              <img
                src={column.image}
                alt=""
              />
            </motion.div>
          ))}

        </motion.div>
      </div>
    </Element>
  );
}

export default Main6
