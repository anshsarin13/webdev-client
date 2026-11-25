"use client";
import { useState } from "react";
import { fetchHello } from "./client";

export default function HelloRoute() {
  const [message, setMessage] = useState("");
  const load = async () => {
    try {
      const data = await fetchHello();
      setMessage(data.message);
    } catch (error) {
      setMessage(`Request failed: ${String(error)}`);
    }
  };
  return (
    <div id="wd-hello-route">
      <h3>Next.js Route Handler: Hello</h3>
      <a
        id="wd-hello-route-link"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline"
        href="/api/lab5/hello"
      >
        Open /api/lab5/hello
      </a>
      <button
        id="wd-hello-route-fetch"
        type="button"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={load}
      >
        Fetch Hello
      </button>
      <p>
        Response: <b id="wd-hello-route-message">{message}</b>
      </p>
      <hr />
    </div>
  );
}
