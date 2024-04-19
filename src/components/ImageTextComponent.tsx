// ImageTextComponent.tsx
import React from 'react';

const ImageTextComponent: React.FC<{ imageUrl: string; text: string }> = ({ imageUrl, text }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4  my-7 flex flex-wrap items-center justify-center ">
      <div className="flex items-center justify-end flex-wrap">
        <img src={imageUrl} alt="" />
        <div className=" md:w-36"></div>
      </div>
      <div className="flex items-center justify-start w-3/4 my-6">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageTextComponent;







