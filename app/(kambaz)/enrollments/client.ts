import { axiosWithCredentials, HTTP_SERVER } from "../client";
import type { Enrollment } from "../store/enrollmentsStore";

export const fetchAllEnrollments = async (): Promise<Enrollment[]> => {
  const { data } = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/enrollments`,
  );
  return data;
};

export const enrollInCourse = async (
  userId: string,
  courseId: string,
): Promise<Enrollment> => {
  const { data } = await axiosWithCredentials.post(
    `${HTTP_SERVER}/api/users/${userId}/courses/${courseId}`,
  );
  return data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  await axiosWithCredentials.delete(
    `${HTTP_SERVER}/api/users/${userId}/courses/${courseId}`,
  );
};
