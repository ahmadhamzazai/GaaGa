import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { GrMenu } from "react-icons/gr";
import Sidebar from './Sidebar';
import "../styles/Header.css";
import Menu from './Menu';
import Popup from './Popup';





const Header = ({projectsRef}) => {

  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const showHead = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", showHead);

    return () => window.removeEventListener("scroll", showHead);
  }, [lastScrollY]);

  const showSidebar = () => {
    setShow(true);
    document.body.style.overflow = "hidden";
    document.querySelector(".headers").style.height = "100vh";
  };
  const hideSidebar = () => {
    setShow(false);
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    document.querySelector(".headers").style.height = "max-content";
  };
  return (
    <>
      <div
        style={{
          position: showHeader ? "fixed" : "relative",
        }}
        className="d-flex headers justify-content-between align-items-center"
      >
        <div className="logo d-flex justify-content-center align-items-center">
          <div className="dot dot1">
            <GoDotFill />
          </div>

          <div className="m-0 p-0 text-white fw-bold gaaga">
            <span className="gaa">Gaa</span>Ga
          </div>

          <div className="dot">
            <GoDotFill />
          </div>
        </div>
        <div>
          <div
            className={`menu d-flex justify-content-center align-items-center gap-1 ${
              popup ? "hide" : ""
            }`}
            onClick={() => setPopup(true)}
          >
            <GrMenu color="white" className="menu-icon" size={20} />
            <div className="text-uppercase text-white text-menu">menu</div>
          </div>
          <Menu projectsRef={projectsRef}/>
          <Popup popup={popup} setPopup={setPopup} />
        </div>
        <div className="purchase d-flex justify-content-center align-items-center gap-4">
          <div className="right">
            <GoDotFill className="dot" size={15} />
            <button className="bg-transparent border-0 fw-bolder lets-start">
              Lets Start
            </button>
          </div>
          <div className="lines" onClick={showSidebar}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
        {show && (
          <Sidebar showSidebar={showSidebar} hideSidebar={hideSidebar} />
        )}
      </div>
    </>
  );
};

export default Header
