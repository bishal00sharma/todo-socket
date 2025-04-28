# 📝 Real-time Todo List App

A simple, real-time **Todo List** application built with **MERN stack** + **Socket.io**.  
Users can **add tasks** and **see updates instantly** without refreshing the page!  

---


## 🛠 Tech Stack

| Frontend | Backend | Database | Real-Time |
|:---|:---|:---|:---|
| React.js | Node.js | MongoDB | Socket.io |
| Vite | Express.js | Mongoose |  |

---

## 📦 Features

- ✅ Add new tasks in real-time
- ✅ View all existing tasks
- ✅ Scrollable task list if too many tasks
- ✅ Simple and clean CSS design
- ✅ Responsive on mobile and desktop
- ✅ WebSocket (Socket.io) for real-time communication
- ✅ MongoDB for task persistence

---

## 📂 Folder Structure

```
todo-backend/
  server.js
  package.json

todo-frontend/
  src/
    components/
      TaskList.jsx
      AddTask.jsx
    App.jsx
    index.jsx
    styles/
      App.css
  package.json
```

---

## ⚙️ How to Run Locally

### 1. Clone the repositories

```bash
git clone https://github.com/your-username/todo-backend.git
git clone https://github.com/your-username/todo-frontend.git
```

---

### 2. Setup backend

```bash
cd todo-backend
npm install
node server.js
```
Or (for auto-restart on changes):

```bash
npm install -g nodemon
nodemon server.js
```

Backend will run at `http://localhost:5000`.

---

### 3. Setup frontend

```bash
cd todo-frontend
npm install
npm run dev
```

Frontend will run at `http://localhost:5173`.

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|:---|:---|:---|
| GET | `/fetchAllTasks` | Fetch all tasks from the database |

---

## 🤝 Contributions

Pull Requests are welcome!  
Feel free to open an issue if you want to suggest a feature or report a bug.

---



---

## 🙏 Acknowledgements

- MongoDB
- Express.js
- React.js
- Node.js
- Socket.io
- Render and Vercel for hosting

---

# 🎉 Thank you for visiting!

If you liked this project, don’t forget to ⭐ star the repo!

---

# ⚡ Quick GitHub Commands

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```
