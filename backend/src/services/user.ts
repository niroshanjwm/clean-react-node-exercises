import { getUsers } from "../repositories/user/user";

export const generateUsers = async (length: number) => {
  try {
    const getUsersPromise = Array.from({ length }, () => getUsers());
    return await Promise.all(getUsersPromise);
  } catch (error) {
    console.log("Error generating users:", error);
    return [];
  }
};
