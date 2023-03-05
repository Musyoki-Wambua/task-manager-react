import React from 'react';


function TaskList() {
    
    return (
      <div>
        <h1 className='text-center display-4 my-3 '>All Tasks</h1>
        <ul className="list-unstyled p-3 border">
            {tasks.map((item, index) => {
                return(<li className="border p-3" key={index}>
                    {item.title}
                <button className="btn btn-danger ">Delete</button>
                <button className="btn btn-info float-right mr-2">Edit</button>
              </li>)
            })}
        </ul>
      </div>
    );
}
export default TaskList;