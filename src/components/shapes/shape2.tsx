import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape2 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M168.125 0v167.5H.75C.75 75.061 75.687 0 168.125 0Z" />
  </svg>
);
