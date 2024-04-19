import { useState } from "react";

interface EditableTextProps {
  text: string;
  onSave: (id: number, newText: string) => void;
  id: number;
  handleTextChange: (e) => void;
  handleTextSubmit: () => void;
}

function EditableText({ text, onSave, id }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(id, inputText);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <textarea
          className="w-full h-24 px-4 py-2 rounded-md focus:outline-dashed"
          type="text"
          value={inputText}
          onChange={handleChange}
          onBlur={handleSaveClick}
          autoFocus
          multiple // Autofocus on the input field when editing starts
        />
      ) : (
        <span onClick={handleEditClick}>{text}</span>
      )}
    </div>
  );
}
export default EditableText;
