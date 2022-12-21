import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape4 = ({ className }: ShapeProps) => (
  <svg
    width={169}
    height={169}
    viewBox="0 0 169 169"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M168.125 0v167.5H.75V0z" />
  </svg>
);
