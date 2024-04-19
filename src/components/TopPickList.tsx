import React from "react";

interface TopPicksListProps {
  items: {
    id: number;
    profileImage: string;
    name: string;
    blogTitle: string;
  }[];
}

const TopPicksList: React.FC<TopPicksListProps> = ({ items }) => {
  return (
    <div className="grid gap-4 mx-5">
      <h2 className=" mt-5 text-gray-600 font-semibold ">Top Pick List</h2>
      {items.map((item) => (
        <>
          <div key={item.id} className="flex items-center rounded-lg w-72">
            <img src={item.profileImage} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="text-md font-normal">{item.name}</p>
              <p className="text-gray-600 font-bold text-lg">{item.blogTitle}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TopPicksList;
