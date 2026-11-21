"use client";
import { useState } from "react";
import { HTTP_SERVER } from "./client";

const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
const inputClass = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  const API = `${HTTP_SERVER}/lab5/todos`;
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <input
        id="wd-todo-id"
        type="number"
        className={inputClass}
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        id="wd-todo-title"
        className={inputClass}
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        id="wd-todo-description"
        className={inputClass}
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <label className="mb-2 flex items-center gap-2">
        <input
          id="wd-todo-completed"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        Completed
      </label>
      <hr />

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={linkClass} href={API}>
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className={linkClass} href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <hr />

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className={linkClass}
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={linkClass} href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={linkClass} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>
      <hr />

      <h4>Updating an Item in an Array</h4>
      <a
        id="wd-update-todo-title"
        className={linkClass}
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>
      <br />
      <br />
      <a
        id="wd-update-todo-completed"
        className={linkClass}
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Complete Todo ID = {todo.id}
      </a>
      <br />
      <br />
      <a
        id="wd-update-todo-description"
        className={linkClass}
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Describe Todo ID = {todo.id}
      </a>
      <hr />
    </div>
  );
}
