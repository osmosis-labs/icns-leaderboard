import { useEffect } from "react";

export const useScrollTop = (id: string) => {
  useEffect(() => {
    setTimeout(() => {
      const elt = document?.querySelector(`#${id}`);
      if (elt) elt.scrollTo(0, 0);
    });
  }, []);
};

export const useScrollDown = (id: string) => {
  useEffect(() => {
    setTimeout(() => {
      const elt = document?.querySelector(`#${id}`);
      if (elt) elt.scrollTo(0, elt.scrollHeight);
    });
  }, []);
};
