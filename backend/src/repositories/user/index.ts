import { delay } from "../../utils/asyncUtils";
import { chance, getRandomInt } from "../../utils/fakeData";
import { User } from "./types";

const MAX_WAIT_TIME = 800;

export const getUser = async (): Promise<User> => {
  const waitingTime = getRandomInt();

  await delay(waitingTime);

  if (waitingTime > MAX_WAIT_TIME) {
    throw new Error(`Failed to fetch user data timeout after ${waitingTime}ms`);
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
