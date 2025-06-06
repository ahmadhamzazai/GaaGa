import React, { useState } from 'react'
import Dot from "../assets/Dot.jsx"
import "../styles/Main10.css"
import { GoDotFill } from 'react-icons/go';
import toast, { Toaster } from 'react-hot-toast';
import { FaHeart } from "react-icons/fa";
import { FaHeartCrack } from "react-icons/fa6";

const Main10 = () => {
  const [value, setValue] = useState("")
  const submitValue = () => {
    if(value.trim() === ""){
      toast.error(
        <span className="py-1 px-3 text-black">
          Please enter something <FaHeartCrack color="#dd4242" size={25} />
        </span>
      );
      setValue("")
    }else{
    toast.success(
      <span className="py-1 px-3 text-black">
        Thanks for your reply <FaHeart color="#dd4242" size={25} />
      </span>
    );
    setValue("")
  }
  }
  return (
    <>
    <Toaster/>
      <div name="contact-us" className="footer container-fluid">
        <div className="row footer-row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="m-0 p-0 text-white fw-bold d-flex gap-1 align-items-center gaaga-footer">
              <GoDotFill size={14} />
              <span className="gaa">Gaa</span>Ga
              <GoDotFill size={14} color="#dd4242" />
            </div>

            <p>
              Sodales ut etiam sit amet. Eget nulla facilisi etiam dignissim.
              Aliquam vestibulum morbi blandit cursus risus. Ultrices vitae
              auctor eu augue ut lectus. Ultricies integer quis auctor elit sed
              vulputate mi sit amet.
            </p>
            <div className="subscribe">
              <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
              <div className="sub-bottom">
                <div className="red-circle"></div>
                <button type='button' onClick={submitValue} className="p-0 m-0 bg-transparent border-0">
                  <h5>Subscribe</h5>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-3 col-6">
            <h5>Contact Us</h5>
            <ul>
              <li className="bullet-li">
                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
              </li>
              <li className="bullet-li">Phone : +000 - 123 - 456789</li>
              <li className="bullet-li">Mail : info@example.com</li>
              <li className="bullet-li">Working Hours : 8hrs</li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-3 col-6">
            <h5>Services</h5>
            <ul>
              <li className="bullet-li bullet-li-last">
                <div className="bullet"></div>Branding & Identity
              </li>
              <li className="bullet-li bullet-li-last">
                <div className="bullet"></div>Web Design & Development
              </li>
              <li className="bullet-li bullet-li-last">
                <div className="bullet"></div>Mobile App Development
              </li>
              <li className="bullet-li bullet-li-last">
                <div className="bullet"></div>UI & UX Designing
              </li>
              <li className="bullet-li bullet-li-last">
                <div className="bullet"></div>Digital Marketing
              </li>
            </ul>
          </div>
        </div>
      </div>
        <p className="copyright">
          Copyright ©WedesignTech All Rights Reserved.
        </p>
    </>
  );
}

export default Main10
