import React, { useState, useEffect } from 'react';
import EditTask from './EditTask';
import TaskItem from './TaskItem';

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

  // const [filteredTasks, setFilteredTasks] = useState([]);

  // useEffect(() => {
  //   setFilteredTasks(tasks.filter((task) => {
  //     return (filter.due ? task.due === filter.dueDate : true) &&
  //            (filter.completed ? task.completed === filter.completed : true) &&
  //            (task.completed || new Date(task.due) < new Date());
  //   }));
  // }, [tasks, filter]);  

  function handleFilterChange(event) {
    const name = event.target.name;
    const value = event.target.checked;
    setFilter({ ...filter, [name]: value });
  }
  
  const filteredTasks = tasks.filter((task) => {
    return (filter.dueDate ? task.due === filter.dueDate : true) &&
           (filter.completed ? task.completed === filter.completed : true) &&
           (task.completed || new Date(task.due) < new Date());
  });

  function handleEdit(task) {
    setSelectedTask(task);
  }

  function handleCancel() {
    setSelectedTask(null);
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/tasks/${id}`, { method: 'DELETE' })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container px-4 text-center">
      <h1>Task List</h1>
      <div className="row gx-5">
        <div className="col-4">
          <div className="p-3">
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
        <div className="col-4">
          <div className="p-3">
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
      <div>
        {selectedTask ? (
          <EditTask
            task={selectedTask}
            onUpdate={handleEdit}
            onCancel={handleCancel}
          />
        ) : (
          <div className="row row-cols-1 ">
            {filteredTasks.map((task) => (
              <div className="card" key={task.id}>
                <div className="card-body h-100">
                  <h5 className="card-title">{task.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {task.due
                      ? new Date(task.due).toDateString()
                      : "No due date"}
                  </h6>
                  <p className="card-text">{task.description}</p>
                </div>
                <div className="card-buttons mb-2">
                  <button
                    className="btn btn-primary ms-3"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-3 "
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="row row-cols-1 ">
        {filteredTasks.map((task) => (
          <div className="card" key={task.id}>
            <div className="card-body h-100">
              <h5 className="card-title">{task.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {task.due ? new Date(task.due).toDateString() : "No due date"}
              </h6>
              <p className="card-text">{task.description}</p>
            </div>
            <div className="card-buttons mb-2">
              <button class="btn btn-primary ms-3" onClick={handleEdit}>
                Edit
              </button>
              <button
                className="btn btn-danger ms-3 "
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
