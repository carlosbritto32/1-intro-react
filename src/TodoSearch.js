import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Escribe tu To do"
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
