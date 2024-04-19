import React, { useState, ChangeEvent } from "react";

const BlogEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      console.log(files);
      setImages([...images, ...files]);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Write a Blog</h2>
      <textarea
        className="w-full h-40 p-4 border rounded-md mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog content here..."
      />
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="mb-4" />
      <div className="flex flex-wrap">
        {images.map((image, index) => {
          console.log(URL.createObjectURL(image), "=========================");
          return (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Image ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md mr-2 mb-2"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogEditor;
