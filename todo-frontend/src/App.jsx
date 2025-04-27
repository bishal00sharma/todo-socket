import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './App.css'; // Import your CSS here

const socket = io('http://localhost:5000'); // Connect to backend

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  useEffect(() => {
    fetch('http://localhost:5000/fetchAllTasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  // Listen for new tasks
  useEffect(() => {
    socket.on('newTask', (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    return () => {
      socket.off('newTask');
    };
  }, []);

  const addTask = (text) => {
    socket.emit('add', { text });
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="title">Note App</h1>
        <TaskInput onAdd={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
