import React, { useState } from "react";

const EditTask = ({ task, onUpdate, onClose }) => {
  const [ title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description);
  const [due, setDue] = useState(task.due);
  const [updated, setUpdated] = useState(false);


  function handleUpdate(taskId, data) {
    fetch(`http://localhost:9292/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        onUpdate(taskId, data)
        setUpdated(true); 

      })
      .catch((error) => console.error(error));
  }

  function updateTask() {
    handleUpdate(task.id, {
      title: title,
      description: description,
      due: due,
    });
  }

  if (updated) {
    return null; 
  }

  return (
    <div>
      <div>
      <span htmlFor={`title-${task.id}`}>Title:</span>
        <input
          type="text"
          id={`title-${task.id}`}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor={`description-${task.id}`}>Description:</label>
        <input
          type="text"
          id={`description-${task.id}`}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label htmlFor={`due-${task.id}`}>Due:</label>
        <input
          type="date"
          id={`due-${task.id}`}
          value={due}
          onChange={(event) => setDue(event.target.value)}
        />
        <br />
        <p>Status: {task.status}</p>
        <button onClick={updateTask}>Update</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditTask;
