"use client";
import { useState } from "react";
import { TodosProvider, useTodosContext } from "./todosContext";

function TodoListBody() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const add = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };
  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (React Context)</h3>
      <div className="mb-2 flex gap-2">
        <input
          id="wd-context-todo-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          className="rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="button"
          id="wd-context-todo-add"
          onClick={add}
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} id={`wd-context-todo-${todo.id}`} className="mb-2 flex gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoListBody />
    </TodosProvider>
  );
}
