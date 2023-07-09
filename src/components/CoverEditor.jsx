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
      <div className="flex flex-row justify-center p-6">
        <div className="flex flex-col justify-center w-1/2">
          <div className="mb-2">Select a textbox and style the text </div>
          <DropdownSelector colors={fontColors} />
          <ValueSelector vType="fSize" />
          <ValueSelector vType="letterSpace" />
        </div>

        <ImageEditor imageInfo={selectedBook} />
      </div>
    </>
  );
}

export default CoverEditor;
