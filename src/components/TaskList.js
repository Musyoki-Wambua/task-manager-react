import React, { useState, useEffect } from 'react';
import EditTask from './EditTask';
import TaskItem from './TaskItem';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.npoint.io/a0ab707f6789ac581639/tasks')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch tasks');
        }
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message));
  }, []);

  const [filter, setFilter] = useState({ completed: false, dueDate: null });

  function handleFilterChange(event) {
    const name = event.target.name;
    const value = event.target.checked;
    setFilter({ ...filter, [name]: value });
  }

  const filteredTasks = tasks.filter((task) => {
    return (filter.dueDate ? task.due === filter.dueDate : true) &&
           (filter.completed ? task.status === 1 : true) &&
           (task.status === 1 || new Date(task.due) < new Date());
  });

  function handleEdit(task) {
    setSelectedTask(task);
  }

  function handleCancel() {
    setSelectedTask(null);
  }

  const handleDelete = (id) => {
    fetch(`https://api.npoint.io/a0ab707f6789ac581639/tasks${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to delete task');
        }
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => setError(err.message));
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
              {tasks.map((task) => (
                <div className="card my-1"  key={task.id}>
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {task.due
                        ? new Date(task.due).toDateString()
                        : "No due date"}
                    </h6>
                    <p className="card-text">{task.description}</p>
                    <button className={`card-text ${task.status === 1 ? 'completed' : task.status === 2 ? 'canceled': 'incomplete'}`}>
                      Status: {task.status === 1 ? "Completed" : task.status === 2 ? "Canceled" : "Incomplete"}
                    </button>
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
        {error && <p>{error}</p>}
      </div>
    );
    
}

export default TaskList;
