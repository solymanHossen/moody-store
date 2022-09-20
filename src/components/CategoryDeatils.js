import React from 'react';
import img1 from "../Asset/image 4.png"


const CategoryDeatils = () => {
  return (
   <div className="container">
    <div className="flex">
      <div className="flex items-center bg-[ #FAFAFA]">
        <img src={img1} alt="img1" />
        <div>
          <p className='title1'>INY VINTAGE CHAIR</p>
          <button className='mainBtn mt-10'>VIEW DETAILS</button>
        </div>
      </div>
      <div className="flex items-center bg-[#EAE9E7]">
        <img src={img1} alt="img1" />
        <div>
          <p className='title1'>INY VINTAGE CHAIR</p>
          <button className='mainBtn mt-10'>VIEW DETAILS</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CategoryDeatils;