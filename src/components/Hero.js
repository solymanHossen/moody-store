import React from 'react';
import hero1 from "../Asset/hero1.png"

const Hero = () => {
  return (
    <section className='bg-[#DBD0CC]'>
   <div className="container">
   <div className="flex items-center">
    <img src={hero1} alt="hero1" />
    <div className="w-full">
      <h3 className='hotDealsWeek mt-6'>HOT DEALS THIS WEEK</h3>
      <h1 className='titleBold mt-6'>SALE UP 50%
MODERN FURNITURE</h1>
     <button className='mt-6 pt-4 pb-4 px-7 py-7 text-sm font-bold bg-none border border-solid border-black'>VIEW NOW</button>
    </div>
   </div>
   </div>
   </section>
  );
};

export default Hero;