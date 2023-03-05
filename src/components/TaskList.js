import React from 'react';


function TaskList() {
    return (
      <div>
        <h1 className='text-center display-4 my-3 '>All Tasks</h1>
        <ul className="list-unstyled p-3 border">
          <li className="border p-3">
            Name of Task
            <button className="btn btn-danger ">Delete</button>
            <button className="btn btn-info float-right mr-2">Edit</button>
          </li>

          <li className="border p-3">
            Name of Task
            <button className="btn btn-danger float-right mr-2">Delete</button>
            <button className="btn btn-info float-right mr-2">Edit</button>
          </li>
          <li className="border p-3">
            Name of Task
            <button className="btn btn-danger float-right mr-2">Delete</button>
            <button className="btn btn-info float-right mr-2">Edit</button>
          </li>
          <li className="border p-3">
            Name of Task
            <button className="btn btn-danger float-right mr-2">Delete</button>
            <button className="btn btn-info float-right mr-2">Edit</button>
          </li>
        </ul>
      </div>
    );
}
export default TaskList;