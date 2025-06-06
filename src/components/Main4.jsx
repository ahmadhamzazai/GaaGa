import React from 'react'
import Sliding from './Sliding';
import Overlay from './Overlay';
import "../styles/Main3.css"
import { motion } from 'framer-motion';
import { moving_left } from '../Animations/Moving_left';
import { moving_right } from '../Animations/Moving_right';

const Main4 = () => {
  return (
    <>
      <div className='bg-black'>
        <motion.div
          variants={moving_right}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="row d-flex flex-lg-row flex-md-column m-0 justify-content-between"
        >
          <div className="col-lg-5 col-12 p-0">
            <div className=" overlay-styled">
              <h4 className="text-white fw-bolder display-6">All Projects</h4>
              <p className="text-white">
                Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.
                Euismod nisi porta lorem mollis aliquam ut porttitor. In hac
                habitasse platea dictumst. Amet massa vitae tortor condimentum
                lacinia quis.
              </p>
              <div>
                <Sliding content="Read More" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 p-0 row flex-md-row m-0 flex-column">
            <div className="card col-md-6 col-12 mb-md-0 mb-2">
              <div className="overlay-div overlay-div1 position-relative">
                <img
                  src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg"
                  alt=""
                />
                <Overlay contentNumber={3} />
              </div>
            </div>

            <div className="card col-md-6 col-12">
              <div className="overlay-div overlay-div2 position-relative">
                <img
                  src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg"
                  alt=""
                />
                <Overlay contentNumber={4} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Main4
