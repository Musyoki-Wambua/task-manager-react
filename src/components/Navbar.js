import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
// import Home from './Home';
import Login from './Login';
import AddTask from './AddTask';
import TaskList from './TaskList';
import SignUp from './SignUp';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <NavLink className="navbar-brand" to="/">Home</NavLink> */}
          <ul className="nav justify-content-center">
          <li className="nav-link">
              <NavLink className="nav-link" to='/'>All Tasks</NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-link" to='/add-task'>Add Tasks</NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-link" to='/login'>Login</NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-link" to='/sign-up'>Sign-Up</NavLink>
            </li>
          </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default Navbar;
