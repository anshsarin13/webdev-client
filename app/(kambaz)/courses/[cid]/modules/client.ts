import { axiosWithCredentials, HTTP_SERVER } from "../../../client";
import type { CourseModule } from "../../../store/modulesStore";

export const findModulesForCourse = async (
  courseId: string,
): Promise<CourseModule[]> => {
  const { data } = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${courseId}/modules`,
  );
  return data;
};

export const createModuleForCourse = async (
  courseId: string,
  module: { name: string },
): Promise<CourseModule> => {
  const { data } = await axiosWithCredentials.post(
    `${HTTP_SERVER}/api/courses/${courseId}/modules`,
    module,
  );
  return data;
};

export const updateModule = async (
  module: CourseModule,
): Promise<CourseModule> => {
  // "editing" is UI state and never goes to the server.
  const { editing, ...rest } = module;
  void editing;
  const { data } = await axiosWithCredentials.put(
    `${HTTP_SERVER}/api/modules/${module._id}`,
    rest,
  );
  return data;
};

export const deleteModule = async (moduleId: string) => {
  await axiosWithCredentials.delete(`${HTTP_SERVER}/api/modules/${moduleId}`);
};
