import React, { useState, useEffect } from 'react';
// import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9292/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  const [filter, setFilter] = useState({ completed: false, dueDate: null });

  function handleFilterChange(event) {
    const name = event.target.name;
    const value = event.target.checked
    setFilter({ ...filter, [name]: value });
  }

  const filteredTasks = tasks
  .filter((task) => (filter.due ? task.due === filter.dueDate : true))
  .filter((task) => (filter.completed ? task.completed === filter.completed : true))
  .filter((task) => (task.completed || new Date(task.due) < new Date()));
//   console.log(filteredTasks)
     console.log(filteredTasks.completed)
     console.log(filteredTasks.due)

  const handleTaskUpdate = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };
return (
  <div class="container px-4 text-center">
    <div class="row gx-5">
      <div class="col-4">
        <div class="p-3">
          <label htmlFor="completed">Completed:</label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            checked={filter.completed}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div class="col-4">
        <div class="p-3">
          <div>
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="checkbox"
              id="dueDate"
              name="dueDate"
              checked={filter.dueDate}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 ">
        {tasks.map((task) => (
          <div className="card" key={task.id} >
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {task.due ? new Date(task.due).toDateString() : 'No due date'}
                </h6>
                <p className="card-text">{task.description}</p>
              </div>
              <div class="card-buttons mb-2">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger ms-3">Delete</button>
              </div>
          </div>
        ))}
        </div>   
  </div>
);

}

export default TaskList;
