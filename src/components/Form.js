import React from "react";

const Form = ({ setInputText, todos, inputText, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const todoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form onChange={inputTextHandler}>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button
        disabled={!inputText}
        onClick={todoHandler}
        className="todo-button"
        type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
