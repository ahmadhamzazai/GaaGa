import React, { useEffect, useState } from "react";
import "../styles/Lift.css";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Lift = () => {
  const [showLift, setShowLift] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight;
      setShowLift(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      className={`lift ${showLift ? "show" : ""}`}
      to="headers"
      smooth={true}
      duration={500}
    >
      <FaLongArrowAltUp />
    </Link>
  );
};

export default Lift;
