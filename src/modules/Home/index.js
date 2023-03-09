import { connect } from 'react-redux';

function Home({ tasks }) {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}
    >
      <h2>Lista de tareas</h2>
      <ul>
        {Object.entries(tasks).map(([columnId, task]) =>
          task.items.map((item) => (
            <li
              key={item.id}
              style={{
                textDecoration:
                  task.name === 'Finalizado' ? 'line-through' : '',
              }}
            >
              {item.content}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Home);
