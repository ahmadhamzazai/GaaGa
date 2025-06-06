import { Background } from '@tsparticles/engine';
import React, { useState } from 'react'

const Dot = ({width, height}) => {
  const [moving, setMoving] = useState(true);

  return (
    <>
      <div className="dott">
        <div
          className={`dotts rounded-pill ${moving && 'dots'}`}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: "#dd4242",
          }}
        ></div>
      </div>
    </>
  );
}

export default Dot
