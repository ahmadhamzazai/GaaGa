import React, { useState, useEffect } from "react";
import { MdFormatQuote } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import "../styles/Main7.css";
import { user_data } from "../data/User_data";

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = user_data.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [totalItems]);

  const startIndex = activeIndex % totalItems;
  const endIndex = startIndex + itemsPerPage;
  let displayedData = user_data.slice(startIndex, endIndex);

  if (endIndex > totalItems) {
    displayedData = [
      ...displayedData,
      ...user_data.slice(0, endIndex - totalItems),
    ];
  }

  return (
    <div className="feedback-bottom row flex-md-row flex-sm-column">
      {displayedData.map((user, index) => (
        <div key={user.id} className="col-md-4 col-sm-6 d-flex flex-column">
          <div className="fb-top">
            <div className="quote">
              <MdFormatQuote color="#dd4242" />
            </div>
            <div className="starts d-flex text-white">
              <RiStarSFill color="#FFD700"/>
              <RiStarSFill color="#FFD700"/>
              <RiStarSFill color="#FFD700"/>
              <RiStarSFill color="#FFD700"/>
              <RiStarSFill color="#FFD700"/>
            </div>
          </div>
          <div className="fb-mid">
            <p className="w-100">{user.comment}</p>
          </div>
          <div className="fb-bottom">
            <div className="user">
              <img src={user.image} alt="" />
            </div>
            <div className="title text-secondary">
              <span>{user.name}</span> - {user.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
