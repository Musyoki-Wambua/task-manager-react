import React, { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ task, onDelete, onUpdate }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="task-card" onClick={handleCardClick}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {task.due}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {showDetails && (
        <EditTask task={task} onUpdate={(taskId, data) => onUpdate(taskId, data)} />
      )}
    </div>
  );
};

export default Task;
