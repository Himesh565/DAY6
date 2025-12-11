import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isListVisible, setIsListVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add new task
  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
    };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Toggle list visibility
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app-card">
        {/* Header with dark mode toggle */}
        <div className="app-header">
          <h1 className="app-title">📝 TODO List</h1>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Task Input */}
        <TodoInput onAddTask={handleAddTask} />

        {/* Stats - Conditional Rendering: Show task count only when tasks exist (logical &&) */}
        {tasks.length > 0 && (
          <div className="task-stats">
            <p>Total Tasks: <strong>{tasks.length}</strong></p>
          </div>
        )}

        {/* Toggle List Button - Conditional text based on visibility state (ternary operator) */}
        <button onClick={toggleListVisibility} className="toggle-btn">
          {isListVisible ? '👁️ Hide List' : '👁️‍🗨️ Show List'}
        </button>

        {/* Conditional Rendering: Show list only when isListVisible is true (logical &&) */}
        {isListVisible && <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />}
      </div>
    </div>
  );
}

export default App;
