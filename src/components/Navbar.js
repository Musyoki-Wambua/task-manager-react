import React from 'react';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import AddTask from './AddTask';
import TaskList from './TaskList';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
          <ul className="nav justify-content-center">
          <li className="nav-link">
              <NavLink className="nav-link" to='/task-list'>All Tasks</NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-link" to='/add-task'>Add Tasks</NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-link" to='/login'>Login/Sign-Up</NavLink>
            </li>
          </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Navbar;
