import React, { useRef, useState } from "react";

interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  const tagListRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const scrollLeft = () => {
    if (tagListRef.current) {
      tagListRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (tagListRef.current) {
      tagListRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 bg-white">
      <button
        className="absolute left-0 top-0 bottom-0 bg-gray-100 text-gray-600 px-2 py-1 flex items-center"
        onClick={scrollLeft}
      >
        {"<"}
      </button>
      <div className="flex overflow-x-hidden  space-x-2 h-10" ref={tagListRef}>
        <div className=" w-12"></div>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center justify-center text-gray-700  text-sm font-medium"
          >
            {tag}
          </span>
        ))}
        <div className="w-12"></div>
      </div>
      <button
        className="absolute right-0 top-0 bottom-0 bg-gray-100 text-gray-600 px-2 py-1 flex items-center"
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default TagList;
