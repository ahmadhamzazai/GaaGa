import React, { useRef } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Main2 from "../components/Main2";
import Main3 from "../components/Main3";
import Main4 from "../components/Main4";
import Main5 from "../components/Main5";
import Main6 from "../components/Main6";
import Main7 from "../components/Main7";
import Main8 from "../components/Main8";
import Main9 from "../components/Main9";
import Main10 from "../components/Main10";
import Lift from "../components/Lift";

const Home = () => {
  return (
    <>
      <div className="position-relative">
        <Header />
        <div className="main" style={{ width: "100vw" }}>
          <Main />
          <Main2 />
          <Main3 />
          <Main4 />
          <Main5 />
          <Main6 />
          <Main7 />
          <Main8 />
          <Main9 />
          <Main10 />
        </div>
      </div>
      <Lift/>
    </>
  );
};

export default Home;
