import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { menuImage } from "../data/Menu-images";
import "../styles/Sidebar.css";
import { Particless } from "./Particless";
import { motion } from "framer-motion";
import { moving_right } from "../Animations/Moving_right";
import { moving_left } from "../Animations/Moving_left";
import { Element, Link } from "react-scroll";

const Sidebar = ({ hideSidebar }) => {
  const [option, setOption] = useState("blog");
  const changeColor = {
    color: "#dd4242",
    WebkitTextStrokeColor: "#dd4242"
  };
  const constScale = {
    scale: "1",
    opacity: "1",
  };
  const riseScale = {
    scale: "1.3",
    opacity: "0",
  };
  return (
    <>
      <div
        className="sidebar"
        >
          <Particless />
        <div className="close">
          <GrClose
            size={30}
            style={{
              position: "absolute",
              top: 15,
              right: 30,
            }}
            onClick={hideSidebar}
            className="close-icon"
          />
          <div
            className="close-text text-capitalize"
            style={{
              position: "absolute",
              top: 15,
              right: 30,
            }}
            onClick={hideSidebar}
          >
            close
          </div>
        </div>

        <div className="right-menu">
          <motion.div variants={moving_right} initial="hidden" whileInView="show" viewport={{once: true}} className="images">
            <div className="image image1">
              <img
                src={option === "blog" && menuImage[0] }
                alt=""
                style={option === "blog" ? constScale : riseScale}
              />
            </div>
            <div className="image image2">
              <img
                src={option === "career" && menuImage[1] }
                alt=""
                style={option === "career" ? constScale : riseScale}
              />
            </div>
            <div className="image image3">
              <img
                src={option === "contact" && menuImage[2] }
                alt=""
                style={option === "contact" ? constScale : riseScale}
              />
            </div>
            <div className="image image4">
              <img
                src={option === "services" && menuImage[3] }
                alt=""
                style={option === "services" ? constScale : riseScale}
              />
            </div>
            <div className="image image5">
              <img
                src={option === "projects" && menuImage[4] }
                alt=""
                style={option === "projects" ? constScale : riseScale}
              />
            </div>
          </motion.div>

          <motion.div variants={moving_left} initial="hidden" whileInView="show" viewport={{once: true}} className="menu-sidebar">
            <Link
              to="blog"
              className="option blog"
              onClick={hideSidebar}
              onMouseEnter={() => setOption("blog")}
              style={option === "blog" ? changeColor : {}}
            >
              blog
            </Link>
            <Link
              to="main8"
              className="option career"
              onMouseEnter={() => setOption("career")}
              onClick={hideSidebar}
              style={option === "career" ? changeColor : {}}
            >
              career
            </Link>
            <Link
              to="contact-us"
              className="option contact"
              onClick={hideSidebar}
              onMouseEnter={() => setOption("contact")}
              style={option === "contact" ? changeColor : {}}
            >
              contact
            </Link>
            <Link
              to="services"
              className="option services"
              onMouseEnter={() => setOption("services")}
              onClick={hideSidebar}
              style={option === "services" ? changeColor : {}}
            >
              services
            </Link>
            <Link
              to="projects"
              className="option projects"
              onMouseEnter={() => setOption("projects")}
              onClick={hideSidebar}
              style={option === "projects" ? changeColor : {}}
            >
              projects
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
