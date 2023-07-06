import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function DraggableCont() {
  return (
    <DragDropContext onDragEnd={() => console.log("drag drop ocurred!")}>
      <div>
        <h1>Draggable</h1>

        <Droppable droppableId="dropContainer" type="group">
          {(provided) => (
            <div
              id="dropArea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Draggable key={1} draggableId="bookname" index={1}>
                {(provided) => (
                  <div
                    id="bookName"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    The Little Prince
                  </div>
                )}
              </Draggable>
              <Draggable key={2} draggableId="authorName" index={2}>
                {(provided) => (
                  <div
                    id="authorName"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    Saint De Expert
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
