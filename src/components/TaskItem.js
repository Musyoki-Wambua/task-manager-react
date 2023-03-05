import React, {useState} from 'react';

const TaskItem = (task,onUpdate) => {
    const [description, setDescription] = useState(task.description);
    const [due, setDue] = useState(task.due);
  
    function handleUpdate() {
      fetch(`http://localhost:9292/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: description,
          due: due
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        onUpdate(data);
      })
      .catch(error => console.error(error));
    } 
  
    
    return (
        <div>
             <div>
      <h2>{task.title}</h2>
      <label htmlFor={`description-${task.id}`}>Description:</label>
      <input
        type="text"
        id={`description-${task.id}`}
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <br />
      <label htmlFor={`due-${task.id}`}>Due:</label>
      <input
        type="text"
        id={`due-${task.id}`}
        value={due}
        onChange={event => setDue(event.target.value)}
      />
      <br />
      <p>Status: {task.status}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>            
        </div>
    );
};

export default TaskItem;