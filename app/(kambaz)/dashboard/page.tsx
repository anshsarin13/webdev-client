"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { useAccountContext } from "../account/AccountContext";
import * as coursesClient from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const addEnrollment = useEnrollmentsStore((state) => state.addEnrollment);
  const removeEnrollment = useEnrollmentsStore(
    (state) => state.removeEnrollment,
  );
  const [error, setError] = useState("");
  const run = async (action: () => Promise<void>) => {
    try {
      await action();
      setError("");
    } catch (e) {
      const data = (e as { response?: { data?: { message?: string } } })
        ?.response?.data;
      setError(data?.message ?? "Request failed. Is the server running?");
    }
  };
  const onAddCourse = () =>
    run(async () => {
      const { _id, ...fields } = course;
      void _id;
      const created = await coursesClient.createCourse(fields);
      addCourse(created);
      // The server enrolls the signed-in creator, so mirror that here.
      if (currentUser) {
        addEnrollment({
          _id: `${currentUser._id}-${created._id}`,
          user: currentUser._id,
          course: created._id,
        });
      }
    });
  const onUpdateCourse = () =>
    run(async () => {
      const updated = await coursesClient.updateCourse(course);
      updateCourse(updated);
    });
  const onDeleteCourse = (courseId: string) =>
    run(async () => {
      await coursesClient.deleteCourse(courseId);
      deleteCourse(courseId);
    });
  const onEnroll = (courseId: string) =>
    run(async () => {
      if (!currentUser) return;
      const enrollment = await enrollmentsClient.enrollInCourse(
        currentUser._id,
        courseId,
      );
      addEnrollment(enrollment);
    });
  const onUnenroll = (courseId: string) =>
    run(async () => {
      if (!currentUser) return;
      await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
      removeEnrollment(currentUser._id, courseId);
    });
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId,
    );
  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(c._id))
      : courses;
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between gap-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="wd-enrollments-btn"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-neutral-400 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Toggle (sample)
          </button>
        </div>
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      {error && (
        <div id="wd-dashboard-error" className="mb-2 rounded bg-red-100 p-2 text-red-800">
          {error}
        </div>
      )}
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            {...c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrolled={currentUser ? isEnrolled(c._id) : null}
            onEnroll={() => onEnroll(c._id)}
            onUnenroll={() => onUnenroll(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
