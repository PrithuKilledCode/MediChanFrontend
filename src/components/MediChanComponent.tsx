import React from 'react';
// import { catGif } from '../assets';

const MediChanComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-96 bg-yellow-400">
      {/* Animated M */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
      
        <div className=' lg:mx-24 md:mx-auto md:ml-0 sm:mx-auto sm:ml-0'>
            <h1 className='text-black text-6xl italic font-medium '>The Way U write</h1>
            <h3 className=' text-3xl font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, omnis.</h3>
        </div>
      </div>

      {/* MediChan Title */}
      <div className=" w-1/2 flex flex-row md:w-1/2 text-center md:text-left px-4 items-center justify-center ">
      <svg
          className="w-24 h-44 md:w-48 md:h-56 text-black animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 4a1 1 0 0 1 1-1h3.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 0 1.414l-6.414 6.414a1 1 0 0 1-.707.293H6a1 1 0 0 1-1-1V4zm2 2v9.586L12.586 6H14V4H7z"
          />
        </svg>
        <h1 className=" self-center text-6xl md:text-6xl font-bold text-gray-800 bg-yellow-400 pr-40 underline">MediChan</h1>
        {/* <img src={catGif} alt='gif'/> */}

      </div>
    </div>
  );
};

export default MediChanComponent;