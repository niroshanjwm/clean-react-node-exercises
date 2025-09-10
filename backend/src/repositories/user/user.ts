import { chance, getRandomInt } from "../../utils/fakeData";

export const getUsers = async (): Promise<any> => {
  const waititnTime = getRandomInt();
  await new Promise((resolve) => setTimeout(resolve, waititnTime));
  if (waititnTime > 800) {
    throw new Error("Failed to fetch user data");
  }
  return {
    userId: chance.guid(),
    username: chance.word(),
    email: chance.email(),
    avatar: chance.avatar(),
    birthdate: chance.birthday(),
    registeredAt: chance.date(),
  };
};
