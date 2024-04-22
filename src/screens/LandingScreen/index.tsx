import React from "react";
import Nav from "../../components/Nav";
import BlogCard from "../../components/BlogCard";
import TagList from "../../components/TaglistComponent";
import TopPicksList from "../../components/TopPickList";
import { Link } from "react-router-dom";
import PeopleToFollowList from "../../components/PeopleToFollowList";

const BlogTags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mx-5 my-4 w-72">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

type Props = {};
const people = [
  {
    id: 1,
    name: "John Doe",
    profileImage:
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1713419191~exp=1713422791~hmac=3378a8e7601eba367e88395e05253785ea7190b716dac980d87f7e779fe90f85&w=1480",
    bio: "Software Engineer | JavaScript Enthusiast",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImage:
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1713419191~exp=1713422791~hmac=3378a8e7601eba367e88395e05253785ea7190b716dac980d87f7e779fe90f85&w=1480",
    bio: "UX Designer | Creative Thinker",
  },
  {
    id: 3,
    name: "Michael Johnson",
    profileImage:
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1713419191~exp=1713422791~hmac=3378a8e7601eba367e88395e05253785ea7190b716dac980d87f7e779fe90f85&w=1480",
    bio: "Data Scientist | Python Lover",
  },
  // Add more people as needed
];

const profileImage =
  "data:image/jpeg;base64,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";
const username = "John Doe";
const date = "April 17, 2024";
const heading = "Lorem ipsum dolor sit amet";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adip";
const blogImage =
  "data:image/jpeg;base64,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";
const tags = ["React", "Tailwind CSS", "TypeScript"];
const tagLists = [
  "React",
  "TailwindCSS",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "docker",
  "Django",
];
const items = [
  {
    id: 1,
    profileImage:
      "https://media3.giphy.com/media/unQ3IJU2RG7DO/200w.gif?cid=6c09b9523rnwdtcladpazop4r43zvo3vbof0hmw44nv6jnw6&ep=v1_gifs_search&rid=200w.gif&ct=g",
    name: "John Doe",
    blogTitle: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    profileImage:
      "https://media3.giphy.com/media/unQ3IJU2RG7DO/200w.gif?cid=6c09b9523rnwdtcladpazop4r43zvo3vbof0hmw44nv6jnw6&ep=v1_gifs_search&rid=200w.gif&ct=g",
    name: "Jane Smith",
    blogTitle: "Consectetur adipiscing elit",
  },
  {
    id: 3,
    profileImage:
      "https://media3.giphy.com/media/unQ3IJU2RG7DO/200w.gif?cid=6c09b9523rnwdtcladpazop4r43zvo3vbof0hmw44nv6jnw6&ep=v1_gifs_search&rid=200w.gif&ct=g",
    name: "Joe Smith",
    blogTitle: "Consectetur adipiscing elit Lorem ipsum",
  },
  // Add more items as needed
];

const LandingScreen = (props: Props) => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap md:grid md:grid-cols-2 md:grid-rows-1 gap-4 w-full h-full">
        <div className=" w-full lg:ml-80 lg:w-4/5 border-r-[1px] border-r-gray p-4">
          <TagList tags={tagLists} />
          <div className="flex-col justify-center items-center">
            <BlogCard
              profileImage={profileImage}
              username={username}
              date={date}
              heading={heading}
              text={text}
              blogImage={blogImage}
              tags={tags}
            />
            <BlogCard
              profileImage={profileImage}
              username={username}
              date={date}
              heading={heading}
              text={text}
              blogImage={blogImage}
              tags={tags}
            />
            <BlogCard
              profileImage={profileImage}
              username={username}
              date={date}
              heading={heading}
              text={text}
              blogImage={blogImage}
              tags={tags}
            />
            <BlogCard
              profileImage={profileImage}
              username={username}
              date={date}
              heading={heading}
              text={text}
              blogImage={blogImage}
              tags={tags}
            />
          </div>
        </div>
        <div className=" w-full lg:w-1/4 lg:ml-52 md:ml-2">
          <TopPicksList items={items} />
          <h2 className=" my-6 mx-5 font-semibold">Select from Categories</h2>
          <BlogTags tags={tagLists} />
          {/* <Link to="/"> */}
          <h3 className=" text-green-800 text-sm mx-4">See More Topics</h3>
          {/* </Link> */}
          <PeopleToFollowList people={people} />
          <h3 className=" text-green-800 text-sm mx-4">See More People</h3>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
