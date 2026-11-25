import axios from "axios";

// The server URL is never a literal in the components (see Environment.tsx).
export const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER ?? "http://localhost:4000";
const LAB5_API = `${HTTP_SERVER}/lab5`;
const ASSIGNMENT_API = `${LAB5_API}/assignment`;
const MODULE_API = `${LAB5_API}/module`;
const TODOS_API = `${LAB5_API}/todos`;

export type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  editing?: boolean;
};

// Same-origin Next.js Route Handler (no HTTP_SERVER prefix)
export const fetchHello = async () => {
  const response = await fetch("/api/lab5/hello");
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
};

// Express: welcome
export const fetchWelcomeMessage = async (): Promise<string> => {
  const response = await axios.get(`${LAB5_API}/welcome`);
  return response.data;
};

// Express: assignment object
export const fetchAssignment = async (): Promise<Assignment> => {
  const response = await axios.get(ASSIGNMENT_API);
  return response.data;
};
export const updateTitle = async (title: string): Promise<Assignment> => {
  const response = await axios.get(
    `${ASSIGNMENT_API}/title/${encodeURIComponent(title)}`,
  );
  return response.data;
};
export const updateScore = async (score: number): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}/score/${score}`);
  return response.data;
};
export const updateCompleted = async (
  completed: boolean,
): Promise<Assignment> => {
  const response = await axios.get(`${ASSIGNMENT_API}/completed/${completed}`);
  return response.data;
};

// Express: module object (on your own)
export type LabModule = {
  id: string;
  name: string;
  description: string;
  course: string;
};
export const fetchModule = async (): Promise<LabModule> => {
  const response = await axios.get(MODULE_API);
  return response.data;
};
export const updateModuleName = async (name: string): Promise<LabModule> => {
  const response = await axios.get(
    `${MODULE_API}/name/${encodeURIComponent(name)}`,
  );
  return response.data;
};
export const updateModuleDescription = async (
  description: string,
): Promise<LabModule> => {
  const response = await axios.get(
    `${MODULE_API}/description/${encodeURIComponent(description)}`,
  );
  return response.data;
};

// Express: todos array
export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
export const createTodo = async (): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};
export const removeTodo = async (todo: Todo): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};
export const postTodo = async (todo: Partial<Todo>): Promise<Todo> => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};
export const deleteTodo = async (todo: Todo) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};
export const updateTodo = async (todo: Todo) => {
  const { editing, ...rest } = todo;
  void editing;
  const response = await axios.put(`${TODOS_API}/${todo.id}`, rest);
  return response.data;
};
