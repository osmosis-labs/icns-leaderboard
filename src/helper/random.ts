export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomArray = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const half = () => random(1, 2) === 1;
