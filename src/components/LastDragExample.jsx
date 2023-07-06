import React from "react";
import { useEffect } from "react";
import { Draggable } from "@syncfusion/ej2-base";

function LastDragExample() {
  useEffect(() => {
    let bookNameDrag = new Draggable(document.getElementById("bookName"), {
      clone: false,
      dragArea: "#dragAreaOf",
    });
    let authorNameDrag = new Draggable(document.getElementById("authorName"), {
      clone: false,
      dragArea: "#dragAreaOf",
    });
  }, []);

  return (
    <div id="container">
      <div id="dragAreaOf">Drag Area</div>
      <input
        readOnly
        id="bookName"
        type="text"
        name="name"
        value="The Little Prince"
      />
      <input
        id="authorName"
        type="text"
        name="name"
        value="Anton de Expert dferdd"
      />
    </div>
  );
}

export default LastDragExample;
