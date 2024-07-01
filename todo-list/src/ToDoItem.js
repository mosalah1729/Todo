import React from 'react';

function ToDoItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      <span
        onClick={toggleTask}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default ToDoItem;
