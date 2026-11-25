"use client";
import { useState } from "react";
import { HTTP_SERVER } from "./client";

const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input
        id="wd-path-input-a"
        type="number"
        className="mb-2 mr-2 w-32 rounded border border-neutral-300 px-3 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-path-input-b"
        type="number"
        className="mb-2 w-32 rounded border border-neutral-300 px-3 py-1.5"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-path-parameter-add"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-path-parameter-multiply"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} &times; {b}
        </a>
        <a
          id="wd-path-parameter-divide"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} &divide; {b}
        </a>
      </div>
      <hr />
    </div>
  );
}
