// import './App.css';
import React from "react";
import { useTodos } from "./useTodos";
import { Modal } from "../Modal";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptySearchResults } from "../EmptySearchResults";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <EmptySearchResults searchText={searchText} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      />

      {openModal && (
        <Modal>
          <TodoForm addTodos={addTodos} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
