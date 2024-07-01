import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          toggleTask={() => toggleTask(index)}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
