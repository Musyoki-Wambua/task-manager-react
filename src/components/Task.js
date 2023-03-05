import React from 'react';

const Task = () => {
    const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", due: "", status: "CREATED" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((prevState) => [...prevState, data]);
        setNewTask({ title: "", description: "", due: "", status: "CREATED" });
      })
      .catch((error) => console.error(error));
  };
  
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Due:
            <input
              type="text"
              name="due"
              value={newTask.due}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Create</button>
        </form>
        {tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.due}</p>
            <p>{task.status}</p>
          </div>
        ))}
      </div>
    );
};

export default Task;