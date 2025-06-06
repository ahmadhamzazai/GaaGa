import React from 'react'

const Svg = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <svg
          viewBox="0 0 512 512"
          width="60"
          height="60"
          className="rounded-circle shadow"
        >
          <circle cx="256" cy="256" r="208" fill="#dd4242" />
          <polygon points="220,180 340,256 220,332" fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default Svg
