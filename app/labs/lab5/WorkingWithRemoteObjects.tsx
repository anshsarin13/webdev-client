"use client";
import { useState } from "react";
import { HTTP_SERVER } from "./client";

const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
const inputClass = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "CS5610",
    name: "Web Development",
    description: "Build full stack web applications with Next.js and Express",
    course: "CS5610",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className={linkClass}
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className={linkClass}
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <input
        id="wd-assignment-title"
        className={inputClass}
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <a
        id="wd-update-assignment-title"
        className={linkClass}
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <br />
      <br />
      <input
        id="wd-assignment-score"
        type="number"
        className={inputClass}
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <a
        id="wd-update-assignment-score"
        className={linkClass}
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <br />
      <br />
      <label className="mb-2 flex items-center gap-2">
        <input
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <a
        id="wd-update-assignment-completed"
        className={linkClass}
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <hr />

      <h4>Module (On Your Own)</h4>
      <div className="mb-3 flex flex-wrap gap-2">
        <a id="wd-retrieve-module" className={linkClass} href={MODULE_API_URL}>
          Get Module
        </a>
        <a
          id="wd-retrieve-module-name"
          className={linkClass}
          href={`${MODULE_API_URL}/name`}
        >
          Get Module Name
        </a>
      </div>
      <input
        id="wd-module-name"
        className={inputClass}
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-name"
        className={linkClass}
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <br />
      <br />
      <input
        id="wd-module-description"
        className={inputClass}
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <a
        id="wd-update-module-description"
        className={linkClass}
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <hr />
    </div>
  );
}
