import React from 'react';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';

const NewsLetter = () => {
  return (
   <div className="container">
    <div className="flex justify-between">
      <div>
      <p>SING UP FOR THE NEWSLETTER</p>
      <p>Subscribe for the latest stories and promotions</p>
      </div>
      <div className='flex items-center  border  w-1/2 h-10'>
       <input type="text" placeholder='Enter your e-mail address ' className='pt-4 pb-4 px-7 w-full' />
       <button className=' px-7 py-7 bg-black text-white '><BsFillChatSquareDotsFill/></button>
      </div>
    </div>
   </div>
  );
};

export default NewsLetter;