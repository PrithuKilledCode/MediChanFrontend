import React from "react";

type Props = {};
const PeopleToFollowList = ({ people }) => {
  return (
    <div className="lg:w-96 mx-auto mt-5">
      <h2 className="mx-3 font-semibold mb-4">People to Follow</h2>
      {people.map((person) => (
        <div
          key={person.id}
          className="flex items-center justify-between bg-white p-4 mb-4 border-b-gray-300 border-b-[1px]"
        >
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={person.profileImage}
              alt={person.name}
            />
            <div>
              <p className="text-lg font-semibold">{person.name}</p>
              <p className="text-gray-600">{person.bio}</p>
            </div>
          </div>
          <button className=" border-2 border-blue-950 text-black px-4 py-2 rounded-full">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default PeopleToFollowList;
