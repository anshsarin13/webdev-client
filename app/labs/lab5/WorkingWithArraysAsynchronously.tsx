"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import * as client from "./client";

const inputClass = "rounded border border-neutral-300 px-2 py-1";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    client
      .fetchTodos()
      .then(setTodos)
      .catch((e) => setErrorMessage(`Could not reach the server: ${String(e)}`));
  }, []);

  const messageFrom = (error: unknown) => {
    const data = (error as { response?: { data?: { message?: string } } })
      ?.response?.data;
    return data?.message ?? String(error);
  };

  // GET /lab5/todos/create and GET /lab5/todos/:id/delete (path based)
  const createTodo = async () => {
    try {
      setTodos(await client.createTodo());
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const removeTodo = async (todo: client.Todo) => {
    try {
      setTodos(await client.removeTodo(todo));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };

  // POST /lab5/todos with a JSON body
  const postTodo = async () => {
    try {
      const created = await client.postTodo({
        title: newTitle || "New Posted Todo",
      });
      setTodos([...todos, created]);
      setNewTitle("");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  // DELETE /lab5/todos/:id
  const deleteTodo = async (todo: client.Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  // PUT /lab5/todos/:id
  const updateTodo = async (todo: client.Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const replaceTodo = (todo: client.Todo) =>
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="ms-3 inline cursor-pointer text-green-600"
          id="wd-create-todo-click"
          title="Create (GET)"
        />
      </h4>
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="mb-2 rounded bg-red-100 p-2 text-red-800"
        >
          {errorMessage}
        </div>
      )}
      <div className="mb-3 flex gap-2">
        <input
          id="wd-new-todo-title"
          className={inputClass}
          placeholder="New todo title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          id="wd-post-todo-click"
          type="button"
          className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white"
          onClick={postTodo}
        >
          Post Todo
        </button>
      </div>
      <ul id="wd-todo-list" className="m-0 list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex flex-wrap items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className={inputClass}
                value={todo.title}
                onChange={(e) =>
                  replaceTodo({ ...todo, title: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
              />
            )}
            <span className="text-sm text-neutral-500">{todo.description}</span>
            <FaPencilAlt
              className="cursor-pointer text-blue-600"
              title="Edit title"
              onClick={() => replaceTodo({ ...todo, editing: !todo.editing })}
            />
            <FaTrash
              className="cursor-pointer text-red-600"
              title="Delete (DELETE)"
              onClick={() => deleteTodo(todo)}
            />
            <button
              type="button"
              className="rounded bg-neutral-200 px-2 py-0.5 text-xs"
              title="Remove (GET path)"
              onClick={() => removeTodo(todo)}
            >
              remove by path
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
