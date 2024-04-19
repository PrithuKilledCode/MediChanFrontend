import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "" : "hidden"
      } flex items-center justify-center bg-gray-900 bg-opacity-50`}
    >
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold"> {isLoginForm ? "Log In" : "Sign Up"} </h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {isLoginForm ? (
          <>
            <div className="mb-4">
              <button className="bg-blue-500 text-white w-full py-2 px-4 rounded-md mb-2">
                <FontAwesomeIcon icon="google" className="mr-2" />
                Login with Google
              </button>
              <button className="bg-gray-800 text-white w-full py-2 px-4 rounded-md mb-2">
                <FontAwesomeIcon icon="facebook" className="mr-2" />
                Login with Facebook
              </button>
              <button className="bg-black text-white w-full py-2 px-4 rounded-md mb-2">
                <FontAwesomeIcon icon="face-angry" className="mr-2 h-5 w-5" />
                Login with Apple
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white w-full py-2 px-4 rounded-md">
                Log In
              </button>
            </form>
          </>
        ) : (
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white w-full py-2 px-4 rounded-md">
              Sign Up
            </button>
          </form>
        )}
        <div className="mt-4">
          <p className="text-center">
            {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={toggleForm} className="text-blue-500 hover:underline">
              {isLoginForm ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
