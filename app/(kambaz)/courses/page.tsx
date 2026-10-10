import { redirect } from "next/navigation";

// There's no standalone Courses listing yet (just /dashboard, which already
// shows your courses, and /courses/[cid] for one course). This route exists
// so the Courses sidebar tile is a real, distinct link that always navigates.
export default function CoursesPage() {
  redirect("/dashboard");
}
