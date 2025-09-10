import Chance from "chance";
const chance = new Chance();

export const getRandomInt = (min: number = 1, max: number = 1000) =>
  chance.floating({ min, max });

export { chance };
