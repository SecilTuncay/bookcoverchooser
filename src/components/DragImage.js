import React from "react";

export default function DragImage() {
  function handleDragStart(event) {
    // This method runs when the dragging starts
    console.log("Started");
  }

  function handleDrag(event) {
    // This method runs when the component is being dragged
    console.log("Dragging...");
  }

  function handleDragEnd(event) {
    // This method runs when the dragging stops
    console.log("Ended");
  }
  return (
    <div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        The Little Prince
      </div>
    </div>
  );
}
