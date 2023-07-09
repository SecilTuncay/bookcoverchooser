import React, { useContext } from "react";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";
import { Button } from "react-bootstrap";
import DropdownSelector from "./DropdownSelector";
import ValueSelector from "./ValueSelector";
import ImageEditor from "./ImageEditor";

function CoverEditor() {
  let fontColors = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "yellow" },
    { id: 4, color: "pink" },
    { id: 5, color: "purple" },
  ];
  const { selectedBook } = useContext(BookCoverInfoContext);

  const { fontcolor, fontsize, letterspacing } = selectedBook;

  return (
    <>
      <div className="flex flex-row justify-start p-6">
        <div className="flex flex-col justify-start align-top w-1/2">
          <div className="mb-2">
            <p className="text-blue-950">
              Select a textbox and style the text{" "}
            </p>
            <DropdownSelector colors={fontColors} />
            <ValueSelector vType="fSize" />
            <ValueSelector vType="letterSpace" />
          </div>
        </div>

        <ImageEditor imageInfo={selectedBook} />
      </div>
    </>
  );
}

export default CoverEditor;
