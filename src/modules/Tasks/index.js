import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import store from '../../store';
import { updateTaskStatus } from '../../store/tasks';
import Column from './components/Column';
import StarsButton from '../../components/StarsButton';

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId],
      destColumn = columns[destination.droppableId],
      sourceItems = [...sourceColumn.items],
      destItems = [...destColumn.items],
      [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    const item = Object.entries(destItems).find(
      ([a, b], index) => b.id === result.draggableId
    )[1];

    store.dispatch(
      updateTaskStatus({
        id: result.draggableId,
        content: item,
        targetColumn: destination.droppableId,
      })
    );

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Tasks({ tasks }) {
  const [columns, setColumns] = useState(tasks),
    navigate = useNavigate();
  return (
    <div className="mainContainer">
      <h2>Arrastra las tareas que hayas finalizado</h2>
      <p>
        Una vez lo hayas hecho, pulsa CHECKOUT y verás un listado con todas las
        tareas y aquellas finalizadas estarán tachadas
      </p>
      <div className="tasksContainer">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="tasksWrapper" key={columnId}>
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Column
                    droppableId={columnId}
                    key={columnId}
                    index={index}
                    column={column}
                  />
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <div className="buttonContainer">
        <StarsButton title="Checkout" onHandleClick={() => navigate('/home')} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Tasks);
