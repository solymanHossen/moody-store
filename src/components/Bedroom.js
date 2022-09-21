import React from 'react';
import { FiFilter } from "react-icons/fi"
import img1 from "../Asset/Rectangle 27.png"

const Bedroom = () => {
  return (
    <div className="container">
      <div className='flex justify-between'>
        <div className="content-ariya">
          <p>New arrivals</p>
          <p>New arrivals</p>
          <p>shop by room</p>
          <p>Bedroom</p>

          <p>Gender </p>
          <div className="flex items-center ">
            <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Men</label>
          </div>
          <div className="flex items-center">
            <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Whomen</label>
          </div>
        </div>

        <div>
          <h1>BEDROOM</h1>
          <div className='pForm mt-8'>ITS EASY TO TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT SELECTION OF ACCESSORIES.</div>
          <div className="flex justify-between mt-9">
            <div className='flex'><FiFilter /><span>filter & sort</span></div>
            <div className='flex gap-14'><span className='text-[red]'>Models</span> <span>products</span></div>
          </div>
          {/* card */}
          <div className="grid grid-cols-3 gap-4 mt-7">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="h-96 w-full" src={img1} alt="img" />
              </a>
              <div className="p-5">

                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-6">Velvet Covvered</h5>
                </a>
                <div className="flex gap-4 mt-5">
                  <div class="rounded-full h-4 w-4 bg-black"></div>
                  <div class="rounded-full h-4 w-4 bg-[red]"></div>
                </div>
                <div className='mt-5'>384$</div>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="h-96 w-full" src={img1} alt="img" />
              </a>
              <div className="p-5">

                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-6">Velvet Covvered</h5>
                </a>
                <div className="flex gap-4 mt-5">
                  <div class="rounded-full h-4 w-4 bg-black"></div>
                  <div class="rounded-full h-4 w-4 bg-[red]"></div>
                </div>
                <div className='mt-5'>384$</div>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="h-96 w-full" src={img1} alt="img" />
              </a>
              <div className="p-5">

                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-6">Velvet Covvered</h5>
                </a>
                <div className="flex gap-4 mt-5">
                  <div class="rounded-full h-4 w-4 bg-black"></div>
                  <div class="rounded-full h-4 w-4 bg-[red]"></div>
                </div>
                <div className='mt-5'>384$</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className='pt-4 pb-4 px-24 py-24 bg-black text-white mt-20 rounded '>load more products</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Bedroom;