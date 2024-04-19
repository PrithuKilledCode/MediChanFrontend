import React, { useState } from "react";

const ImageSizePopup = ({
  onClose,
  showPopup,
  setSize,
  size,
  imgIndex,
  setImageIndex,
  updateItem,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform action with selected size
    onClose(false);
  };

  return (
    <div className="bg-black rounded-lg p-4 absolute top-0 left-auto right-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">Change Image Size</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-4">
          <button
            type="button"
            className={`w-10 h-10 rounded-full border text-white  ${
              size === "small" ? "bg-blue-500 border-transparent" : "border-gray-300"
            }`}
            onClick={() => {
              setSize("small");
              setImageIndex(imgIndex);
              updateItem(imgIndex, "small");
            }}
          >
            S
          </button>
          <button
            type="button"
            className={`w-10 h-10 rounded-full border text-white  ${
              size === "medium" ? "bg-blue-500 border-transparent" : "border-gray-300"
            }`}
            onClick={() => {
              setSize("medium");
              setImageIndex(imgIndex);
              updateItem(imgIndex, "medium");
            }}
          >
            M
          </button>
          <button
            type="button"
            className={`w-10 h-10 rounded-full border text-white ${
              size === "large" ? "bg-blue-500 border-transparent" : "border-gray-300"
            }`}
            onClick={() => {
              setSize("large");
              setImageIndex(imgIndex);
              updateItem(imgIndex, "large");
            }}
          >
            L
          </button>
        </div>
        <div className="text-right">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSizePopup;
