import React from 'react';
import {HiSearch} from "react-icons/hi"
import {BiUser} from "react-icons/bi"
import {BsCart,BsHeart} from "react-icons/bs"
import{GrDeliver} from "react-icons/gr"
import{ImEnter, ImHeadphones} from "react-icons/im"

const NavBar = () => {
  return (
    <section className='bg-[#FFFFFF] pb-0'>
      <div className="container">
        <div className="flex justify-between items-center border-b-2 pb-5 border-[#323334]">
        <div className='title1'>MOODY STUDIO</div>
        <div className="flex gap-9">
          <HiSearch className='h-8 w-8'/>
          <BiUser className='h-8 w-8'/>
          <div className='relative'>
          <BsCart className='h-8 w-8'/>
          <span className='absolute left-2/3 bottom-0  bg-[#F2994A] p-1 rounded-[50%]'>1</span>
          </div>
          <BsHeart className='h-8 w-8'/>
        </div>
        </div>
          <div className="main-nav-item">
            <ul className='flex justify-around pt-10 pb-10 border-b-2 border-[#323334] '>
              <li className='cursor-pointer  hover:bg-sky-200'>HOME</li>
              <li className='cursor-pointer'>STORE</li>
              <li className='cursor-pointer'>ACCESSORIES</li>
              <li className='cursor-pointer'>BRAND</li>
              <li className='cursor-pointer'>PAGES</li>
              <li className='cursor-pointer'>ABOUT US</li>
              <li className='cursor-pointer'>NEWS</li>
              <li className='cursor-pointer'>CONTACT US </li>
            </ul>
          </div>
          <div className="flex justify-between mx-5 pt-9 py-5">
            <div className='flex gap-4'>
            <GrDeliver/><span className='title2'>FREE SHIPPING</span>
            </div>
            <div className='flex gap-4'>
            <ImEnter/> <span className='title2'>100% MONEY BACK</span>
            </div>
            <div className='flex gap-4'>
            <ImHeadphones/> <span className='title2'>SUPPORT 24/7</span>
            </div>
          </div>
      </div>
    </section>
  );
};

export default NavBar;