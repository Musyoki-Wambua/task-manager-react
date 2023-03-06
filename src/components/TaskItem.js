import React from "react";

const TaskItem = ({ task, onEdit }) => {
  function handleClick() {
    onEdit(task);
  }

  return (
    <div className="task-card" onClick={handleClick}>
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
      <p>Due: {task.due}</p>
      <p>Status: {task.status}</p>
      <button>Edit</button>
    </div>
  );
};

export default TaskItem;
