import { useState } from 'react';

function TodoInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    // Conditional: Only add if input is not empty (logical && for validation)
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue(''); // Clear input after adding
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new task..."
        className="task-input"
      />
      <button onClick={handleAdd} className="add-btn">
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
