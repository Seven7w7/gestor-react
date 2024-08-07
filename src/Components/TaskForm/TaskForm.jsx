import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, currentTask }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    setTask(currentTask ? {
      title: currentTask.title,
      description: currentTask.description,
    } : { title: "", description: "" });
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = task;
    if (title.trim() && description.trim()) {
      currentTask
        ? editTask({ ...currentTask, title, description })
        : addTask({ id: Date.now(), title, description, completed: false });
      setTask({ title: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Titulo de la tarea</h2>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
      />
      <h2>Descripción de la tarea</h2>
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">
        {currentTask ? "Editar Tarea" : "Crear nueva Tarea"}
      </button>
    </form>
  );
};

export default TaskForm;
