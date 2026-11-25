"use client";
import { useState } from "react";
import { HTTP_SERVER } from "./client";

const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const calculator = `${HTTP_SERVER}/lab5/calculator`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-input-a"
        type="number"
        className="mb-2 mr-2 w-32 rounded border border-neutral-300 px-3 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-input-b"
        type="number"
        className="mb-2 w-32 rounded border border-neutral-300 px-3 py-1.5"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-query-parameter-add"
          className={linkClass}
          href={`${calculator}?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className={linkClass}
          href={`${calculator}?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className={linkClass}
          href={`${calculator}?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} &times; {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className={linkClass}
          href={`${calculator}?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} &divide; {b}
        </a>
      </div>
      <hr />
    </div>
  );
}
