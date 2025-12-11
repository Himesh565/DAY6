import TodoItem from './TodoItem';

function TodoList({ tasks, onDeleteTask }) {
  return (
    <div className="todo-list-container">
      {/* Conditional Rendering: Ternary operator - Show different UI based on tasks.length */}
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">📋 No Tasks Available</p>
          <p className="empty-subtitle">Add a task to get started!</p>
        </div>
      ) : (
        <div className="todo-list">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} onDelete={onDeleteTask} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
