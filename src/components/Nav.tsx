import React, { useState } from "react";
import Cat from "../assets/icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBarChart,
  faBell,
  faPaperPlane,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faPage4, faPagelines, faSearchengin } from "@fortawesome/free-brands-svg-icons";
const Nav: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <nav className="flex justify-between items-center bg-gray-800 py-4 px-6">
      <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center ">
          <img src={Cat} alt="" className="h-12 w-12 bg-white rounded-full p-1  " />
          <div className="text-white font-semibold">MediChan</div>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="hidden bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 md:flex"
        />
      </div>
      <div className="flex items-center gap-3 ">
        <FontAwesomeIcon icon={faPenToSquare} color="white" className="h-5 w-5" />
        <h3 className="text-white">Write</h3>
        <FontAwesomeIcon icon={faBell} color="white" className="h-5 w-5" />
        <FontAwesomeIcon icon={faSearchengin} color="white" className="flex md:hidden h-5 w-5" />

        <img
          className="h-8 w-8 rounded-full"
          src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="Profile"
          onClick={toggleModal}
        />
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
          onClick={toggleModal}
        >
          <div
            className="bg-white shadow-md p-4 absolute w-72  top-16 right-7"
            onBlurCapture={toggleModal}
          >
            <ul>
              <li className="py-2 px-4 flex flex-row gap-2 cursor-pointer hover:bg-gray-200 items-center">
                <FontAwesomeIcon icon={faUser} /> <h3>Profile</h3>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex flex-row gap-2 items-center ">
                <FontAwesomeIcon icon={faAddressBook} />
                <h3>Library</h3>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex flex-row gap-2 items-center ">
                <FontAwesomeIcon icon={faPaperPlane} />
                <h3>Stories</h3>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex flex-row gap-2 items-center ">
                <FontAwesomeIcon icon={faBarChart} />
                <h3>Stats</h3>
              </li>
              <li className="border-b-gray-300 border-b-[1px]"></li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex flex-row gap-2 items-center ">
                <h3>Settings</h3>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex flex-row gap-2 items-center ">
                <h3>Help</h3>
              </li>
              <li className="border-b-gray-300 border-b-[1px]"></li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 items-center ">
                <h3>SignOut</h3>
                <h4 className="text-thin text-sm text-gray-400 mt-2">abc@gmail.com</h4>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
