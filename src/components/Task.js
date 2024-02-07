import React from "react";
import '../css/Task.css';
import { MdDelete } from "react-icons/md";


function Task({ id, text, done, setDone, deleteTask }) {
  return (
    <div className={done ? 'task-container done' : 'task-container'}>
      <div className="task-text"
        onClick={() => setDone(id)}>
        {text}
      </div>
      <div className="task-icon-container"
        onClick={() => deleteTask(id)}>
        <MdDelete className="task-icon" onC />
      </div>
    </div >
  )
}

export default Task;