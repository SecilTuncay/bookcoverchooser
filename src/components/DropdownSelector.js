import React, { useContext } from "react";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";

function DropdownSelector(props) {
  const { colors } = props;
  const { updateFontColor } = useContext(BookCoverInfoContext);

  function setColor(e) {
    let tempStr = e.target.value;
    updateFontColor(tempStr);
  }

  return (
    <div>
      <p className="inline-block text-[14px] mr-2">Font Color :</p>
      <div id="dropdownSelector" className="border-l-gray-100 inline-block">
        <select
          onChange={setColor}
          id="properties"
          className="bg-gray-50 
                        border border-gray-300 
                        text-gray-900 text-xs 
                        rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 
                        block px-3 py-1
                       
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[14px]"
        >
          {colors &&
            colors.map((color, index) => {
              return <option key={color.id}>{color.color}</option>;
            })}
        </select>
      </div>
    </div>
  );
}

export default DropdownSelector;
