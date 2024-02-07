import React, { useState } from "react";
import '../css/Form.css';
import { v4 as uuidv4 } from 'uuid';


function Form(props) {

  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);

  }


  const handleSend = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    }
    props.onSubmit(newTask);
    e.target.reset();
    setInput("");
  }


  return (
    <form className="task-form"
      onSubmit={handleSend}>
      <input
        className="task-input"
        type="text"
        placeholder="Writte your task here"
        name="text"
        onChange={handleChange}
      />
      <button className='add-task'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default Form;