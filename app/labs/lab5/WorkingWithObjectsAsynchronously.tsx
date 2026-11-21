"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

const buttonClass = "rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white";
const inputClass = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<client.Assignment | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    client
      .fetchAssignment()
      .then(setAssignment)
      .catch((e) => setError(`Could not reach the server: ${String(e)}`));
  }, []);
  const run = async (action: () => Promise<client.Assignment>) => {
    try {
      setAssignment(await action());
      setError("");
    } catch (e) {
      setError(`Request failed: ${String(e)}`);
    }
  };
  return (
    <div id="wd-working-with-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      {error && <p className="text-red-700">{error}</p>}
      {assignment && (
        <>
          <input
            id="wd-assignment-title-async"
            className={inputClass}
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
          <textarea
            id="wd-assignment-description-async"
            className={inputClass}
            rows={2}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
          <input
            id="wd-assignment-score-async"
            type="number"
            className={inputClass}
            value={assignment.score}
            onChange={(e) =>
              setAssignment({ ...assignment, score: Number(e.target.value) })
            }
          />
          <label className="mb-2 flex items-center gap-2">
            <input
              id="wd-assignment-completed-async"
              type="checkbox"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
            />
            Completed
          </label>
          <div className="mb-2 flex flex-wrap gap-2">
            <button
              id="wd-update-assignment-title-click"
              type="button"
              className={buttonClass}
              onClick={() => run(() => client.updateTitle(assignment.title))}
            >
              Update Title
            </button>
            <button
              id="wd-update-assignment-score-click"
              type="button"
              className={buttonClass}
              onClick={() => run(() => client.updateScore(assignment.score))}
            >
              Update Score
            </button>
            <button
              id="wd-update-assignment-completed-click"
              type="button"
              className={buttonClass}
              onClick={() =>
                run(() => client.updateCompleted(assignment.completed))
              }
            >
              Update Completed
            </button>
          </div>
          <pre className="max-w-xl overflow-auto bg-neutral-100 p-2 text-sm">
            {JSON.stringify(assignment, null, 2)}
          </pre>
        </>
      )}
      <hr />
    </div>
  );
}
