import React, { useState } from 'react'
import { menu_options } from '../data/Menu-options';
import { LiaMinusSolid } from 'react-icons/lia';
import { FiChevronRight } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { moving_left } from '../Animations/Moving_left';
import { Link } from 'react-scroll';

const Popup = ({popup, setPopup}) => {
  return (
    <motion.ul variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}} className={`popup ${popup ? "show" : ""}`}>
      <div className="menu-close">
        <IoClose onClick={() => setPopup(false)} className='cross'/>
      </div>
      {menu_options?.map((item, index) => {
        return (
            <li key={item.id}>
              <Link to={item.title}>{item.title}</Link>
              <div className="d-flex justify-content-center align-items-center">
                <div className="barr">
                  <LiaMinusSolid className="minus" />
                </div>
                <div className="arrow">
                  <FiChevronRight className="chevron" />
                </div>
              </div>
            </li>
        );
      })}
    </motion.ul>
  );
}

export default Popup
