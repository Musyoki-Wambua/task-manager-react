import React from 'react'

function AddTask() {

    return (
        <form className="border p-3 my-3 ">
          <h1 className="text-center display-4">Add New Task</h1>
          <div className="form-group">
            <input type="text" className="form-control" placeholder='Type Of Task' />
          </div>
          <button type="submit" className="btn btn-success btn-block w-100">Submit</button>
        </form>
    );
} export default AddTask