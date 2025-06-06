import React from 'react'
import Title from "../components/Title.jsx"
import Heading_Animation from "../components/Animations/Heading_Animation.jsx"
import Review from './Review.jsx'

const Main7 = () => {
  return (
    <div className="feeback w-100">
      <div className="feedback-top w-100">
        <Title text="Clients Feedback" />
        <div className="p-4 overflow-hidden">
          <Heading_Animation text="Words From Happy Customer"/>
        </div>
      </div>

      <Review />
    </div>
  );
}

export default Main7
