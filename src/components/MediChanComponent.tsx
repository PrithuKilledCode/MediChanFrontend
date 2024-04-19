import React, { useState } from "react";
// import { catGif } from '../assets';
import Cat from "../assets/icon.svg";
import LoginModal from "./LoginModal";

const MediChanComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col p-5 md:flex-row items-center justify-center h-[40rem] bg-yellow-400">
      {/* Animated M */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className=" lg:mx-24 md:mx-auto md:ml-0 sm:mx-auto sm:ml-0">
          <h1 className="text-black text-6xl font-medium my-1 ">The Way U write</h1>
          <h3 className=" text-2xl font-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, omnis.
          </h3>
          <button onClick={openModal} className=" bg-black rounded-full w-36 text-white mt-10 p-2 ">
            Get Started
          </button>
        </div>
      </div>

      {/* MediChan Title */}
      <div className=" hidden md:w-1/2 md:flex md:flex-row text-center md:text-left px-4 md:items-center md:justify-center ">
        <h1 className=" self-center text-6xl md:text-6xl font-bold text-gray-800 bg-yellow-400">
          MediChan
        </h1>
        <img
          src={Cat}
          alt=""
          className="hidden md:flex w-72 h-72 rounded-full p-1 animated-bounce  "
        />
        {/* <img src={catGif} alt='gif'/> */}
      </div>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MediChanComponent;
