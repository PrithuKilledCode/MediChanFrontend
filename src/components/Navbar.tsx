import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-white font-semibold">Your Logo</div>
        <div className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Explore</a></li>
            <li><a href="#" className="text-white">Create</a></li>
            <li><a href="#" className="text-white">Notifications</a></li>
            <li><a href="#" className="text-white">Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;