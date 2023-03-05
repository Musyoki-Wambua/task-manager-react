import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import AddTask from './AddTask';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <AddTask />
          </div>
        </div>
      </div>   
    </div>
  );
}export default App;
