import React from 'react'
import Sliding from "./Sliding";
import { layout } from '../data/Overlay_data';
import "../styles/Main3.css"


const Overlay = ({contentNumber}) => {
  return (
    <>
      <div className="overlay">
        <h4 className="text-white fw-bolder display-6">{layout[contentNumber].title}</h4>
        <p className="text-white">
          {layout[contentNumber].desc}
        </p>
        <Sliding content="Read More" />
      </div>
    </>
  );
}

export default Overlay
