import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  function handleEdit() {
    onEdit(task);
  }

  function handleDelete() {
    onDelete(task.id);
  }

  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
      <p>Due: {task.due}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
