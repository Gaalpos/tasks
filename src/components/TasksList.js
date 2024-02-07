import React, { useState } from "react";
import Form from "./Form";
import '../css/TasksList.css';
import Task from './Task';

function TasksList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text != '') {
      task.text = task.text.trim();
      const allTasks = [task, ...tasks];
      setTasks(allTasks);
    } else {
      alert("Empty task, please writte something");
    }
  }

  const deleteTask = id => {
    const allTasks = tasks.filter(task => task.id !== id);
    setTasks(allTasks);
  }

  // const setDone = id => {
  //   const allTasks = tasks.map(task => {
  //     if (task.id === id) {
  //       task.done = !task.done;
  //     }
  //     return task;
  //   })
  //   const sortedTasks = updatedTasks.sort((a, b) => {
  //     // Incomplete tasks should come before completed tasks
  //     if (a.done && !b.done) return 1;
  //     if (!a.done && b.done) return -1;
  //     return 0;
  //   });

  //   setTasks(sortedTasks);

  // }

  const setDone = id => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      const sortedTasks = updatedTasks.sort((a, b) => {
        if (a.done && !b.done) return 1;
        if (!a.done && b.done) return -1;
        return 0;
      });
      return sortedTasks;
    });
  }


  return (
    <>
      <Form onSubmit={addTask} />
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              setDone={setDone}
              deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  );
}

export default TasksList;