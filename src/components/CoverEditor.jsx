import React, { useContext } from "react";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";
import { Button } from "react-bootstrap";

function CoverEditor() {
  const { selectedBook, updateFontSize, updateFontColor } =
    useContext(BookCoverInfoContext);

  const { bookInfo, fontcolor } = selectedBook;

  return (
    <>
      <div>CoverEditor</div>
      <div>{fontcolor}</div>
      <div>{bookInfo}</div>
      <Button onClick={() => updateFontColor("blue")}>deneme</Button>
    </>
  );
}

export default CoverEditor;
