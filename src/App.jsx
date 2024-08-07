import React, { useState } from "react";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import "./Styles/styles.css"; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState("all");

  const addTask = task => setTasks([...tasks, task]);

  const editTask = task => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    setCurrentTask(null);
  };

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  const toggleTaskCompletion = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const pendingCount = tasks.filter(task => !task.completed).length;
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="app">
      <div className="header">
        <img src="/Profile.png" alt="Profile" className="profile-image" />
        <h1>Gestor de Tareas</h1>
      </div>
      <p>
        Usted tiene{" "}
        <span className={`count ${pendingCount > 0 ? "pending" : ""}`}>
          {pendingCount} pendientes
        </span>{" "}
        y
        <span className={`count ${completedCount > 0 ? "completed" : ""}`}>
          {completedCount} terminadas
        </span>
      </p>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        currentTask={currentTask}
      />
      <div className="filter-container">
        <label>Filtrar por: </label>
        <select
          className="selector"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Completadas</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        setCurrentTask={setCurrentTask}
      />
    </div>
  );
};

export default App;
