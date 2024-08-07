import React from "react";

const Task = ({ task, toggleTaskCompletion, deleteTask, setCurrentTask }) => (
  <div className={`task ${task.completed ? "completed" : ""}`}>
    <span className={`status-indicator ${task.completed ? "completed" : "pending"}`}></span>
    <span>
      {task.title} - {task.description}
    </span>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTaskCompletion(task.id)}
    />
  </div>
);

export default Task;
