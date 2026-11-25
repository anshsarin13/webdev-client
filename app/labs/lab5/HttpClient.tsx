"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const fetchWelcomeOnClick = async () => {
    try {
      setWelcomeOnClick(await client.fetchWelcomeMessage());
    } catch (error) {
      setWelcomeOnClick(`Could not reach the server: ${String(error)}`);
    }
  };
  useEffect(() => {
    client
      .fetchWelcomeMessage()
      .then(setWelcomeOnLoad)
      .catch((error) =>
        setWelcomeOnLoad(`Could not reach the server: ${String(error)}`),
      );
  }, []);
  return (
    <div id="wd-http-client">
      <h3>Asynchronous Communication</h3>

      <h4>Requesting on Click</h4>
      <button
        id="wd-request-on-click"
        type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={fetchWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p>
        Response from server: <b id="wd-welcome-on-click">{welcomeOnClick}</b>
      </p>
      <hr />

      <h4>Requesting on Load</h4>
      <p>
        Response from server: <b id="wd-welcome-on-load">{welcomeOnLoad}</b>
      </p>
      <hr />
    </div>
  );
}
