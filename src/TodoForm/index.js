import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodos, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe el To Do"
      />

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
