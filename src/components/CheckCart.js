import React from 'react';
import img1 from "../Asset/Rectangle 27.png"

const CheckCart = () => {
  return (
  <div className="container">
    <p className='text-center'>HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM/duvet cover sets</p>
    <div className="grid grid-cols-3 gap-4">
      <img src={img1} alt="img1" className='h-[512px] w-full'/>
      <img src={img1} alt="img1" className='h-[512px] w-full'/>
      <div className="flex flex-col">
        <p>Checked Duvet Cover Set</p>
        <p>345$</p>
        <p>Light khaki green/white checks</p>
        <img src={img1} alt="img1" className='h-20 w-14 border ' />
        <p>Not available in stores</p>

      </div>
    </div>
  </div>
  );
};

export default CheckCart;