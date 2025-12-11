function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span className="task-text">{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
