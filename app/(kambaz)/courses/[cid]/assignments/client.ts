import { axiosWithCredentials, HTTP_SERVER } from "../../../client";
import type { Assignment } from "../../../store/assignmentsStore";

export const findAssignmentsForCourse = async (
  courseId: string,
): Promise<Assignment[]> => {
  const { data } = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${courseId}/assignments`,
  );
  return data;
};

export const findAssignmentById = async (
  assignmentId: string,
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/assignments/${assignmentId}`,
  );
  return data;
};

export const createAssignmentForCourse = async (
  courseId: string,
  assignment: Omit<Assignment, "_id">,
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.post(
    `${HTTP_SERVER}/api/courses/${courseId}/assignments`,
    assignment,
  );
  return data;
};

export const updateAssignment = async (
  assignment: Assignment,
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.put(
    `${HTTP_SERVER}/api/assignments/${assignment._id}`,
    assignment,
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axiosWithCredentials.delete(
    `${HTTP_SERVER}/api/assignments/${assignmentId}`,
  );
};
