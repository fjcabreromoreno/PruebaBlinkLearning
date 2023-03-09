import React, { memo } from 'react';

import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="taskCard"
            style={{
              backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
              ...provided.draggableProps.style,
            }}
          >
            <div className="content-card">{item.content}</div>
          </div>
        );
      }}
    </Draggable>
  );
}

export default memo(TaskCard);
