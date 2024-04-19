import React, { useState, ChangeEvent } from "react";
import Nav from "../../components/Nav";
import ImageSizePopup from "../../components/ImageSizePopUp";
import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { log } from "console";
import EditableText from "../../components/EditableTextComponent";
import Popup from "../../components/plusPopup";

interface ImageBlock {
  type: "image";
  file: File;
  size?: "small" | "medium" | "large";
}

interface TextBlock {
  type: "text";
  content: string;
}

type BlogBlock = ImageBlock | TextBlock;

const BlogEditor: React.FC = () => {
  const [blocks, setBlocks] = useState<BlogBlock[]>([]);
  const [content, setContent] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageBlogArr, setImageBlogArr] = useState<ImageBlock[]>([]);
  const [active, setActive] = useState(false);
  // const [editableText, setEditableText] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);

    if (e.key === "Enter") {
      handleTextSubmit();
    }
  };
  const handleOptionSelect = (option: string) => {
    console.log("Option selected:", option);
    // Implement logic for handling the selected option
  };
  const fileTypes = ["JPG", "PNG", "GIF"];
  const handleTextSubmit = () => {
    if (content.trim() !== "") {
      const textBlock: TextBlock = {
        type: "text",
        content: content,
      };
      setBlocks([...blocks, textBlock]);
      setContent("");
    }
  };
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const handleChange = (file: File | null) => {
    console.log(file, "===================");
    if (file === null) return;
    if (file) {
      setSelectedFiles((prev) => [...prev, file]);
      const ImgArr = [file];
      console.log("Selected files", selectedFiles);
      const filesArr = Array.from(selectedFiles);
      console.log(filesArr);
      const imageBlocks: ImageBlock[] = ImgArr.map((file) => ({
        type: "image",
        file: file,
        size: size,
      }));
      setImageBlogArr([...imageBlogArr, ...imageBlocks]);
      setBlocks([...blocks, ...imageBlocks]);
      setImageIndex(filesArr.length);
      setShowPopup(true);
    }
  };
  const updateItem = (id: number, size: "small" | "medium" | "large") => {
    console.log(id, size, "==================func called");
    // Find the index of the item with the given id
    const updatedItems = [...blocks];
    updatedItems[id] = { ...updatedItems[id], size: size };
    console.log(updatedItems, "=====================updated items");
    // Update state with the new array
    setBlocks([...updatedItems]);

    // Create a new array with the updated item
  };
  const handleSave = (id: number, newText: string) => {
    const updatedItems = [...blocks];
    updatedItems[id] = { ...updatedItems[id], content: newText };
    console.log(updatedItems, "=====================updated items");
    // Update state with the new array
    setBlocks([...updatedItems]);
  };

  return (
    <>
      <Nav />
      <div className=" mx-auto flex flex-col justify-center items-center w-full">
        {/* <h2 className="text-2xl font-semibold mb-4">Write a Blog</h2> */}
        <div className="flex-col w-full">
          <div className="flex justify-center w-full">
            <input
              type="text"
              className=" h-36  w-1/3 font-bold text-3xl focus:outline-none"
              placeholder="Title..."
            />
          </div>
          {blocks.map((block, index) => {
            if (block.type === "image") {
              return (
                <div className="flex justify-center items-center">
                  <div className="relative flex justify-center items-center">
                    {imageIndex === index && showPopup ? (
                      <ImageSizePopup
                        onClose={setShowPopup}
                        showPopup={showPopup}
                        size={size}
                        setSize={setSize}
                        imgIndex={index}
                        setImageIndex={setImageIndex}
                        updateItem={updateItem}
                      />
                    ) : null}
                    <img
                      key={index}
                      onClick={() => {
                        console.log(index);
                        console.log(block.size);
                        // setSize(block.size!);
                        setShowPopup(true);
                        setImageIndex(index);
                      }}
                      src={URL.createObjectURL(block.file)}
                      alt={`Image ${index + 1}`}
                      className={`object-cover rounded-md mr-2 mb-2 ${
                        block.size === "medium" ? "  h-2/3  w-2/4" : null
                      }  ${block.size === "small" ? " h-1/3  w-1/3" : null}  ${
                        block.size === "large" ? " h-full w-full" : null
                      }  `}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div className=" flex w-full justify-center ">
                  <div key={index} className=" p-4 rounded-md mr-2 mb-2 w-1/3">
                    <EditableText
                      text={block.content}
                      onSave={handleSave}
                      id={index}
                      handleTextChange={handleTextChange}
                      handleTextSubmit={handleTextSubmit}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>

        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          className=" hidden"
        />
        <div className="flex w-4/5 justify-center gap-4 mt-3">
          <div className="relative">
            <button
              className=" relative h-8 w-8 rounded-full bg-blue-600 text-white font-6xl font-semibold"
              onClick={() => setActive(!active)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            {active && (
              <Popup onClose={() => setActive(false)} onOptionSelect={handleOptionSelect} />
            )}
          </div>
          <textarea
            className=" w-1/2 h-40 p-4 rounded-md mb-4 select-none active:border-none active:none focus:outline-dashed focus:shadow-outline"
            value={content}
            onChange={handleTextChange}
            placeholder="Write your blog content here..."
            onKeyDown={(e) => handleTextChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default BlogEditor;
