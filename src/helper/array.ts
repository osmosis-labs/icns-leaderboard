import { User } from "../providers/data.provider";
import { normalize } from "./strings";

export const compareName = (userA: User, userB: User) => {
  if (userA.name < userB.name) {
    return -1;
  }
  if (userA.name > userB.name) {
    return 1;
  }
  return 0;
};

export const getArray = (size: number) => [...Array(size)];

export function findIndex<T>(array: Array<T>, callback: (value: T) => boolean) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

export const findUser = (name: string, user: User) => {
  return normalize(user.name).includes(normalize(name as string));
};

export function getLinesAroundIndex<T>(
  index: number,
  lines: T[],
  numLines: number
): T[] {
  const result: T[] = [];
  let startIndex = index - Math.floor(numLines / 2);
  let endIndex = index + Math.floor(numLines / 2);
  if (startIndex < 0) {
    startIndex = 0;
    endIndex = numLines - 1;
  }
  if (endIndex >= lines.length) {
    endIndex = lines.length - 1;
    startIndex = endIndex - (numLines - 1);
    if (startIndex < 0) {
      startIndex = 0;
    }
  }
  for (let i = startIndex; i <= endIndex; i++) {
    result.push(lines[i]);
  }
  return result;
}
