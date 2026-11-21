"use client";
import { useState } from "react";

const inputClass = "mb-2 block w-full max-w-xs rounded border border-neutral-300 px-3 py-1.5";

export default function CalculatorRoute() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const url = `/api/lab5/calculator?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&operation=${operation}`;
  const calculate = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResult(
        response.ok ? String(data.result) : `Error: ${data.error ?? response.status}`,
      );
    } catch (error) {
      setResult(`Request failed: ${String(error)}`);
    }
  };
  return (
    <div id="wd-calculator-route">
      <h3>Next.js Route Handler: Calculator</h3>
      <input
        id="wd-calculator-route-a"
        className={inputClass}
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-calculator-route-b"
        className={inputClass}
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <select
        id="wd-calculator-route-operation"
        className={inputClass}
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">add</option>
        <option value="subtract">subtract</option>
        <option value="multiply">multiply</option>
        <option value="divide">divide</option>
      </select>
      <a
        id="wd-calculator-route-link"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline"
        href={url}
      >
        Open {url}
      </a>
      <button
        id="wd-calculator-route-fetch"
        type="button"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={calculate}
      >
        Calculate
      </button>
      <p>
        Result: <b id="wd-calculator-route-result">{result}</b>
      </p>
      <hr />
    </div>
  );
}
