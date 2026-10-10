import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />

      <textarea
        id="wd-description"
        defaultValue="The assignment is available online. Submit a link to the landing page of your deployed Next.js app."
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
                defaultValue={100}
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
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
