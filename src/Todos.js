import React, { useState, useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Todos() {
  const [todos, setTodos] = useState([
    { text: "Washing", isDone: false },
    { text: "Cleaning", isDone: false },
    { text: "Shopping", isDone: false },
  ]);
  const [newItem, setNewItem] = useState("");
  const completedItems = todos.filter((f) => f.isDone === true);
  const onNewItemAdded = (chore) => {
    setTodos((todos) => [...todos, { text: chore, isDone: false }]);
  };

  const handleChecked = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    setNewItem("");
  }, [todos]);
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="row">
          <div className="row-left">
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleChecked(index)}
            />
            <h1>{todo.text}</h1>
          </div>
          <FiDelete color="red" size={30} onClick={() => handleDelete(index)} />
        </div>
      ))}
      <div className="row">
        <input
          type="text"
          className="new-item-input"
          value={newItem}
          placeholder="New item goes here..."
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => onNewItemAdded(newItem)}>Add to List</button>
      </div>
      <div className="row">
        <p className="todo-status">
          I have completed {completedItems.length} of {todos.length} tasks
        </p>
      </div>
    </div>
  );
}
