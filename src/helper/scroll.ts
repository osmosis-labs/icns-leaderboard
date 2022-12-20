export const scrollDown = (id: string) => {
  const elt = document?.querySelector(id);
  if (elt) {
    window.setTimeout(() => {
      elt.scrollTop = elt.scrollHeight;
    }, 100);
  }
};

export const scrollTop = (id: string) => {
  const elt = document?.querySelector(id);
  if (elt) {
    window.setTimeout(() => {
      elt.scrollTop = 0;
    }, 100);
  }
};
