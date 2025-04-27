/**
 * Simple Task Manager Server
 * 
 * - Built using Express, MongoDB (Mongoose), and Socket.io.
 * - Provides HTTP API to fetch all tasks.
 * - Uses WebSocket (Socket.io) for real-time task updates (add task).
 * 
 * Features:
 * - MongoDB stores tasks with a simple schema (text and createdAt timestamp).
 * - REST API to fetch all tasks.
 * - Socket.io events for adding and broadcasting new tasks to all clients.
 * 
 * Usage:
 * - Run the server: node <filename>.js
 * - Server URL: http://localhost:5000
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Create HTTP server and attach Socket.io to it
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } }); // Allow all origins for development

// Middleware
app.use(cors());          // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assignment')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose Schema and Model for a Task
const taskSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }, // Default to current date and time
});

const Task = mongoose.model('assignment_bishal', taskSchema);

// REST API Route: Fetch all tasks
app.get('/fetchAllTasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Retrieve all tasks from MongoDB
    res.json(tasks);                 // Send tasks as JSON response
  } catch (err) {
    res.status(500).send('Server Error'); // Handle server errors
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Client connected');

  // Listen for 'add' event from client to add a new task
  socket.on('add', async (data) => {
    try {
      const newTask = new Task({ text: data.text }); // Create new Task document
      await newTask.save();                          // Save task to MongoDB
      console.log('Task added:', newTask);

      io.emit('newTask', newTask); // Broadcast new task to all connected clients
    } catch (err) {
      console.error('Error saving task:', err);
    }
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server on port 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
