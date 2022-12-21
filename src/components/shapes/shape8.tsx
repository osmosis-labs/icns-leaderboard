import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape8 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M84.063.5C37.843.5.375 37.996.375 84.25S37.843 168 84.063 168h83.687V.5H84.063Z" />
  </svg>
);
