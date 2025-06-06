import React, { useRef } from "react";
import "../styles/Main.css";
import { GoDotFill } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { GrTwitter } from "react-icons/gr";
import { LiaPinterestP } from "react-icons/lia";
import Svg from "./Svg";
import frontImage from "../assets/front_image.png";
import Bar from "../assets/Bar";
import Sliding from "./Sliding";
import { motion } from "framer-motion";
import { moving_right } from "../Animations/Moving_right";
import { moving_left } from "../Animations/Moving_left";
import { Element } from "react-scroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Main = () => {

  return (
    <>
      <Element name="home" className="front d-flex justify-content-center align-items-center">
        <div className="front-right d-flex justify-content-start align-items-center">
          <div className="social-media">
            <div className="icons d-flex flex-column gap-5 justify-content-center align-items-center">
              <FiFacebook strokeWidth={1} />
              <PiInstagramLogoLight />
              <GrTwitter strokeWidth={1} fill="none" />
              <LiaPinterestP strokeWidth={1} fill="none"/>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3 text-uppercase rotate">
              <div className="text-white ">Scroll</div>
              <div className="bar-moving">
                <Bar width={`55`} height={`2`} />
              </div>
              <div className="dott">
                <div className="dots"></div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start flex-column font-info">
            <motion.div variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}} className="d-flex justify-content-start align-items-center gap-3 fs-3 width">
              <Bar width={`55`} height={`2`} />
              <div className="dott">
                <div className="dots"></div>
              </div>
              <div className="innovative">Innovative Ideas</div>
            </motion.div>
            <div className="d-flex">
              <motion.h2 variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}} className="pb-4">
                We Offer You <span>A Digital</span> Platform{" "}
                <GoDotFill color="#dd4242" size={30} className="h2-dot" />
              </motion.h2>
            </div>
            <motion.p variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}}>
              Vulputate enim nulla aliquet porttitor lacus luctus accumsan
              tortor posuere. Nisl purus in mollis nunc sed id sempe egestas
              quis ips.
            </motion.p>
            <motion.div variants={moving_right} initial="hidden" whileInView="show" viewport={{once: true}} className="d-flex last d-flex justify-content-start align-items-center">
              <div className="d-flex justify-content-start align-items-center gap-2">
                <Sliding content="Get Started" />
              </div>
              <div className="video d-flex justify-content-center align-items-center gap-2">
                <div className="play cursor-pointer d-flex justify-content-center align-items-center">
                  <Svg />
                </div>
                <div className="text-white fw-medium max-content">
                  View Video
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="image-div">
          <img src={frontImage} alt="" />
        </div>
        <div className="front-image"></div>
      </Element>
      
    </>
  );
};

export default Main;
