"use client";
import { create } from "zustand";

export type Enrollment = { _id: string; user: string; course: string };

type EnrollmentsStore = {
  enrollments: Enrollment[];
  setEnrollments: (enrollments: Enrollment[]) => void;
  addEnrollment: (enrollment: Enrollment) => void;
  removeEnrollment: (userId: string, courseId: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  setEnrollments: (enrollments) => set({ enrollments }),
  addEnrollment: (enrollment) =>
    set((state) => ({
      enrollments: state.enrollments.some(
        (e) => e.user === enrollment.user && e.course === enrollment.course,
      )
        ? state.enrollments
        : [...state.enrollments, enrollment],
    })),
  removeEnrollment: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
}));
