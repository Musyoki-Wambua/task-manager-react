import React, { useState } from 'react';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { title, description, due, status: 0 };
      fetch("https://64057fb98eee833dd80c72c2--sweet-custard-a26aff.netlify.app/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Task added:", data);
          setTitle("");
          setDescription("");
          setDue("");
        })
        .catch((err) => console.error(err));

  };

  return (
    <form className="border p-3 my-3" onSubmit={handleSubmit}>
      <h1 className="text-center display-4">Add New Task</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type Of Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Due Date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success btn-block w-100">
        Submit
      </button>
    </form>
  );
}

export default AddTask;
