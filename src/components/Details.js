import React from 'react';
import img1 from "../Asset/Rectangle 13.png"

const Details = () => {
  return (
    <div className="container">
      <div className="relative ">
      <img src={img1} alt="img1" />
      <div className="pt-16 pb-16 px-32 py-32 bg-[#ffffff] w-1/3 relativeCss bg-opacity-75 ">
        <p>BEDSHEET SETS</p>
        <p>$50.00
          $220.00</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <button className='mainBtn'>
          VIEW DETAILS
        </button>
      </div>
    </div>
    </div>
  );
};

export default Details;