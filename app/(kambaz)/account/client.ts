import { axiosWithCredentials, HTTP_SERVER } from "../client";

export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
};

const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: {
  username: string;
  password: string;
}): Promise<User> => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials,
  );
  return response.data;
};

export const signup = async (user: {
  username: string;
  password: string;
}): Promise<User> => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async () => {
  await axiosWithCredentials.post(`${USERS_API}/signout`);
};

export const profile = async (): Promise<User> => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user,
  );
  return response.data;
};

export const findUsersForCourse = async (courseId: string): Promise<User[]> => {
  const response = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${courseId}/users`,
  );
  return response.data;
};

export const errorMessage = (error: unknown, fallback: string) => {
  const data = (error as { response?: { data?: { message?: string } } })
    ?.response?.data;
  return data?.message ?? fallback;
};
