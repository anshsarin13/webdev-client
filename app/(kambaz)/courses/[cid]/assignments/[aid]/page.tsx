"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = typeof params.cid === "string" ? params.cid : "";
  const aid = typeof params.aid === "string" ? params.aid : "";
  const router = useRouter();
  const isNew = aid === "new";
  const assignment = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === aid),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const [draft, setDraft] = useState<Assignment>(
    assignment ?? {
      _id: "",
      title: "New Assignment",
      course: cid,
      description: "New Assignment Description",
      points: 100,
      due: "",
      available: "",
      until: "",
    },
  );
  const save = () => {
    if (isNew) {
      const { _id, ...rest } = draft;
      void _id;
      addAssignment({ ...rest, course: cid });
    } else {
      updateAssignment(draft);
    }
    router.push(`/courses/${cid}/assignments`);
  };
  if (!isNew && !assignment) {
    return (
      <div id="wd-assignments-editor">
        <p>Assignment not found.</p>
        <Link href={`/courses/${cid}/assignments`}>Back to Assignments</Link>
      </div>
    );
  }
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={draft.title}
        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />

      {!isNew && (
        <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
          Assignment id: {aid}
        </p>
      )}

      <textarea
        id="wd-description"
        value={draft.description}
        onChange={(e) =>
          setDraft({ ...draft, description: e.target.value })
        }
        rows={6}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />

      <table className="w-full border-collapse text-sm">
        <tbody>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td className="p-2">
              <input
                id="wd-points"
                type="number"
                value={draft.points}
                onChange={(e) =>
                  setDraft({ ...draft, points: Number(e.target.value) })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td className="p-2">
              <select
                id="wd-group"
                defaultValue="ASSIGNMENTS"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td className="p-2">
              <select
                id="wd-display-grade-as"
                defaultValue="Percentage"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              >
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td className="p-2">
              <select
                id="wd-submission-type"
                defaultValue="Online"
                className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
              >
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
              </select>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="wd-text-entry" /> Text Entry
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="wd-website-url" defaultChecked />{" "}
                  Website URL
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="wd-media-recordings" /> Media
                  Recordings
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="wd-student-annotation" /> Student
                  Annotation
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="wd-file-upload" /> File Uploads
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td className="p-2">
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td className="p-2">
              <input
                id="wd-due-date"
                type="date"
                value={draft.due}
                onChange={(e) => setDraft({ ...draft, due: e.target.value })}
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td className="p-2">
              <input
                id="wd-available-from"
                type="date"
                value={draft.available}
                onChange={(e) =>
                  setDraft({ ...draft, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td className="w-40 p-2 pr-4 text-right align-top font-medium">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td className="p-2">
              <input
                id="wd-available-until"
                type="date"
                value={draft.until ?? ""}
                onChange={(e) => setDraft({ ...draft, until: e.target.value })}
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-4 border-neutral-300" />

      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="cursor-pointer rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
