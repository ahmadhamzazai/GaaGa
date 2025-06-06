import React from 'react'
import "../styles/Sliding.css"

const Sliding = ({content}) => {
  return (
    <>
      <div className="d-flex sliding justify-content-center gap-2 align-items-center">
        <div className="stick stick-right"></div>
        <div className="circle"></div>
        <div className='sliding-text'>{content}</div>
        <div className="stick stick-left"></div>
      </div>
    </>
  )
}

export default Sliding
