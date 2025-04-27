import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  );
};

export default TaskInput;
