import { axiosWithCredentials, HTTP_SERVER } from "../client";
import type { Course } from "../store/coursesStore";

const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const fetchAllCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const createCourse = async (course: Partial<Course>): Promise<Course> => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
};

export const updateCourse = async (course: Course): Promise<Course> => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course,
  );
  return data;
};

export const deleteCourse = async (courseId: string) => {
  await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
};
