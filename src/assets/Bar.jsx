import React from 'react'

const Bar = ({width, height}) => {
  return (
    <>
      <div style={{ width: `${width}px` }}>
        <div
          className="bar"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            color: "#4B4C4E",
          }}
        ></div>
      </div>
    </>
  );
}

export default Bar
