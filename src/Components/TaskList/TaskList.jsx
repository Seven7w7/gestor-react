import React from "react";
import Task from "../Task";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, setCurrentTask }) => (
  <div>
    {tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        setCurrentTask={setCurrentTask}
      />
    ))}
  </div>
);

export default TaskList;
