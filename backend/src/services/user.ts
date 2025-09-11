import { getUser } from "../repositories/user";
import { User } from "../repositories/user/types";

export const generateUsers = async (length: number): Promise<User[]> => {
  if (length <= 0) {
    return [];
  }
  const userPromises = Array.from({ length }, () => getUser());
  return Promise.all(userPromises);
};
