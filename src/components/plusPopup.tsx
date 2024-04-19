import { faCode, faFileText, faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PopupProps {
  onClose: () => void;
  onOptionSelect: (option: string) => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, onOptionSelect }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md absolute top-0 left-10">
      <div className="flex flex-row gap-3 items-center justify-center">
        <div className="flex items-center justify-between">
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </button>
        </div>
        <div className="flex items-center  cursor-pointer" onClick={() => onOptionSelect("code")}>
          <FontAwesomeIcon icon={faCode} className="text-blue-500" />
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => onOptionSelect("heading")}>
          <FontAwesomeIcon icon={faHeading} className="text-blue-500" />
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => onOptionSelect("subheading")}
        >
          <FontAwesomeIcon icon={faFileText} className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};
export default Popup;
