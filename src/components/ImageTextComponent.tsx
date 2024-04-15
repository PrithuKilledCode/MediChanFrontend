// ImageTextComponent.tsx
import React from 'react';

const ImageTextComponent: React.FC<{ imageUrl: string; text: string }> = ({ imageUrl, text }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={imageUrl} alt="Image" className="w-full md:max-w-lg" />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageTextComponent;
In this component, the imageUrl prop is used to specify the URL of the image, and the text prop is used to specify the text content. The image is displayed on the left side (taking up half of the width on medium screens and above), and the text is displayed on the right side. The component's width is set to the width of the screen. Adjust the image size and text styling as needed for your design.






