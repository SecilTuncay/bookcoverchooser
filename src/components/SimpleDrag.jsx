import React from "react";
import { Draggable } from "drag-react";

function SimpleDrag() {
  function handleDrop(data, event) {
    // This method runs when the data drops
    console.log(data); // 'bar'
  }
  return (
    <div id="dropArea">
      <Draggable>
        <div>Drag me!</div>
      </Draggable>
      <Draggable>
        <div>Drag me2</div>
      </Draggable>
    </div>
  );
}

export default SimpleDrag;
