import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape11 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M168 84.25C125.651 92.48 92.537 125.619 84.312 168 76.088 125.619 42.974 92.481.626 84.25 42.974 76.019 76.087 42.88 84.313.5 92.537 42.88 125.65 76.019 168 84.25Z" />
  </svg>
);
