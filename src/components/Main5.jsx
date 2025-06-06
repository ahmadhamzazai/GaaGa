import React from 'react'
import "../styles/Main5.css"
import { ad_data } from '../data/Advertisement_data';
import { motion } from 'framer-motion';
import { moving_left } from '../Animations/Moving_left';
import { moving_right } from '../Animations/Moving_right';

const Main5 = () => {
  return (
    <>
      <div className="main-5 bg-black">
        <motion.h5 variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}}  className="main-5-1 text-white mx-auto">
          It's Time To Take Your Digital Marketing{" "}
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/content-image-small-size-4.png"
            alt=""
          />{" "}
          To The Next Level{" "}
          <img
            src="https://aimax.wpengine.com/wp-content/uploads/2023/06/group-image.png"
            alt=""
          />{" "}
          We Are Always Here To Help You Grow Your Business
        </motion.h5>



            <motion.div variants={moving_right} initial="hidden" whileInView="show" viewport={{once: true}} className="main-5-2">
                <div className="row">
                    {ad_data?.map((item, index) => {
                        return (
                            <div key={item.id} className="col-xl-3 p-md-5 p-sm-2 col-md-6">
                              <div className="d-flex justify-content-center align-items-center gap-4 text-white">
                                <div className="number cursor-pointer">{item.number}</div>
                                <div className="titles d-flex flex-column">
                                  <div className="title-1">{item.title1}</div>
                                  <div className="title-2">{item.title2}</div>
                                </div>
                              </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>


      </div>
    </>
  );
}

export default Main5
