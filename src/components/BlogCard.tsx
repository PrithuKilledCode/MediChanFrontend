import React from "react";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faHandSpock, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface BlogCardProps {
  profileImage: string;
  username: string;
  date: string;
  heading: string;
  text: string;
  blogImage: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  profileImage,
  username,
  date,
  heading,
  text,
  blogImage,
  tags,
}) => {
  return (
    <div className=" p-2 bg-white rounded-lg shadow-md md:p-6 mt-2">
      <div className="flex items-center mb-4">
        <img
          className="h-5 w-5 md:h-10 md:w-10 rounded-full mr-4"
          src={profileImage}
          alt="Profile"
        />
        <div>
          <p className="text-sm text-gray-600">{username}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex flex-row items-start gap md:gap-5">
        <div>
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
          <p className="text-gray-700 mb-4">{text}</p>
        </div>

        <img className=" w-2/5 h-3/5 lg:w-full lg:h-full md:mb-4" src={blogImage} alt="Blog" />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-1 md:px-2 py-1 rounded-full text-xs mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <button className="text-gray-500 mr-2">
            <FontAwesomeIcon icon={faSave} className="h-6 w-6 mx-1" />
          </button>
          <button className="text-gray-500 mr-2">
            <FontAwesomeIcon icon={faHandSpock} className="h-6 w-6 mx-1" />
          </button>
          <button className="text-gray-500">
            <FontAwesomeIcon icon={faCommentDots} className="h-6 w-6 mx-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
