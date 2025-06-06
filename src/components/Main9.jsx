import React from 'react'
import "../styles/Main9.css"
import Title from "../components/Title.jsx"
import Heading_Animation from "../components/Animations/Heading_Animation.jsx"
import Sliding from "../components/Sliding.jsx"
import { moving_right } from '../Animations/Moving_right.jsx'
import { moving_left } from '../Animations/Moving_left.jsx'
import { motion } from 'framer-motion'

const Main9 = () => {
  return (
    <div name="blog" className="blogdiv">
      <div className="blog-top">
        <Title text="Blog" />
        <Heading_Animation text="Digital World News" />
      </div>
      <div className="blog-bottom">
        <motion.div variants={moving_right} initial="hidden" whileInView="show" viewport={{once: true}} className="blog-left">
          <div className="blog-image">
            <img
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-12.jpg"
              alt=""
            />
          </div>
          <div className="blog-data">
            <p className="date">JUNE, 22 2023</p>
            <h6>Creative & small business ideas</h6>
            <p>
              Phasellus faucibus scelerisque eleifend done. Sit amet aliquam
              id...
            </p>
            <Sliding content="Read More" />
          </div>
        </motion.div>

        <motion.div variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}} className="blog-right">
          <div className="blog-image">
            <img
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-3.jpg"
              alt=""
            />
          </div>
          <div className="blog-data">
            <p className="date">June 19, 2023</p>
            <h6>Small ideas make great brands</h6>
            <p>
              Tempor orci eu lobortis elementum nibh jaln tellus molestie nunc...
            </p>
            <Sliding content="Read More" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main9
