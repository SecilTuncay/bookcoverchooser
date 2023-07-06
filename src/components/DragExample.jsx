import React from "react";
import { Draggable, Droppable } from "react-drag-and-drop";

function DragExample() {
  function handleDrop(data, event) {
    // This method runs when the data drops
    console.log(data); // 'bar'
  }
  return (
    <div>
      <Droppable types={["foo"]} onDrop={handleDrop} id="dropArea">
        eee
        <Draggable type="foo" data="bar">
          <div>Drag me!</div>
        </Draggable>
        <Draggable type="foo" data="bar3">
          <div>Drag me2</div>
        </Draggable>
      </Droppable>
    </div>
  );
}

export default DragExample;
