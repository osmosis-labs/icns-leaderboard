export const normalize = (str: string): string => {
  if (str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  } else {
    return "";
  }
};
