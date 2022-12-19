import { User } from "../providers/data.provider";

export const compareName = (userA: User, userB: User) => {
  if (userA.name < userB.name) {
    return -1;
  }
  if (userA.name > userB.name) {
    return 1;
  }
  return 0;
};
