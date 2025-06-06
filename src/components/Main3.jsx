import React from "react";
import Dot from "../assets/Dot";
import Bar from "../assets/Bar";
import Overlay from "./Overlay";
import "../styles/Main3.css";
import Heading_Animation from "./Animations/Heading_Animation";
import { motion } from "framer-motion";
import { moving_left } from "../Animations/Moving_left";
import { moving_right } from "../Animations/Moving_right";
import { Element } from "react-scroll";
import Title from "./Title";

const Main3 = () => {
  return (
    <Element
      id="projects"
      name="projects"
      style={{ overflow: "hidden", width: "100%" }}
      className="gallery pb-3 d-flex container-fluid bg-black justify-content-center align-items-center flex-column"
    >
      <div className="gallery-top w-100 d-flex justify-content-center align-items-center flex-column">
        <Title text="Gallery"/>
        <div>
          <Heading_Animation text="Our Project Portfolio" />
        </div>
      </div>
      <motion.div
        variants={moving_left}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gallery-bottom"
      >
        <div className="gallery-right position-relative">
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
            alt=""
          />
          <Overlay contentNumber={0} />
        </div>
        <div className="gallery-left">
          <div className="position-relative one">
            <img
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-2.jpg"
              alt=""
            />
            <Overlay contentNumber={1} />
          </div>
          <div className="position-relative two">
            <img
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-6.jpg"
              alt=""
            />
            <Overlay contentNumber={2} />
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

export default Main3;
