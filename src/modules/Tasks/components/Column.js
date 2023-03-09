import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TaskCard from './TaskCard';

const Column = ({ droppableId, column }) => {
  return (
    <Droppable droppableId={droppableId} key={droppableId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="taskColumn"
            style={{
              background: snapshot.isDraggingOver ? 'lightblue' : column.color,
            }}
          >
            {column?.items?.map((item, index) => {
              return <TaskCard key={item.id} item={item} index={index} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default memo(Column);
