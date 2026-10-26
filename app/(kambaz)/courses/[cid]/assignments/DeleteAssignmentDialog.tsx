"use client";

export default function DeleteAssignmentDialog({
  show,
  title,
  onYes,
  onNo,
}: {
  show: boolean;
  title: string;
  onYes: () => void;
  onNo: () => void;
}) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      id="wd-delete-assignment-dialog"
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="border-b border-neutral-200 px-4 py-3">
          <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
        </div>
        <div className="px-4 py-3">
          Are you sure you want to remove the assignment &ldquo;{title}&rdquo;?
        </div>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
          <button
            type="button"
            onClick={onNo}
            id="wd-delete-assignment-no"
            className="cursor-pointer rounded bg-neutral-300 px-3 py-1.5 text-sm font-medium"
          >
            No
          </button>
          <button
            type="button"
            onClick={onYes}
            id="wd-delete-assignment-yes"
            className="cursor-pointer rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
