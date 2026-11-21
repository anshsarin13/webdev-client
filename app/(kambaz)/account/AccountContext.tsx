"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as accountClient from "./client";
import * as coursesClient from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";
import { useCoursesStore } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export type User = accountClient.User;

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  // false until the session, courses and enrollments have been requested once
  ready: boolean;
  reloadEnrollments: () => Promise<void>;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);

  const reloadEnrollments = async () => {
    try {
      setEnrollments(await enrollmentsClient.fetchAllEnrollments());
    } catch (error) {
      console.error("Could not load enrollments", error);
    }
  };

  useEffect(() => {
    // Restore the session after a refresh, then load the shared data.
    const load = async () => {
      const [user, courses, enrollments] = await Promise.all([
        accountClient.profile().catch(() => null),
        coursesClient.fetchAllCourses().catch(() => null),
        enrollmentsClient.fetchAllEnrollments().catch(() => null),
      ]);
      setCurrentUser(user);
      if (courses) setCourses(courses);
      if (enrollments) setEnrollments(enrollments);
      setReady(true);
    };
    load();
  }, [setCourses, setEnrollments]);

  return (
    <AccountContext.Provider
      value={{ currentUser, setCurrentUser, ready, reloadEnrollments }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
