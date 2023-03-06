import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <Routes>
                <Route path="/add-task" component={AddTask} />
                <Route path="/task-list" component={TaskList} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />

              </Routes>

            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
