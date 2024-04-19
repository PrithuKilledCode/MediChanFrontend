import React from 'react';
import Cat from "../assets/icon.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className=" justify-start container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex gap-2 items-center ">
          <img src={Cat} alt="" className="h-12 w-12 bg-white rounded-full p-1  " />
          <div className="text-white font-semibold">MediChan</div>
        </div>

        <div className="mt-4 md:mt-0">
          <ul className="hidden md:flex md:flex-row md:space-x-4 md:space-y-0">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Create
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Notifications
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;