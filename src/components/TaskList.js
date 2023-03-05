import React from 'react';


function TaskList() {
    return (
        <ul className='list-unstyled'>
            <li className='border p-3'>
                Name of Task 
                <button className='btn btn-info float-right mr-2'>Edit</button>
                <button className='btn btn-danger float-right'>Delete</button>
            </li>

            <li className='border p-3'>
                Name of Task 
                <button className='btn btn-danger float-right mr-2'>Delete</button>
                <button className='btn btn-info float-right mr-2'>Edit</button>
            </li>
            <li className='border p-3'>
                Name of Task 
                <button className='btn btn-danger float-right mr-2'>Delete</button>
                <button className='btn btn-info float-right mr-2'>Edit</button>
            </li>
            <li className='border p-3'>
                Name of Task 
                <button className='btn btn-danger float-right mr-2'>Delete</button>
                <button className='btn btn-info float-right mr-2'>Edit</button>
            </li>      
        </ul>
    );
}
export default TaskList;