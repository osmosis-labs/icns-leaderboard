import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape7 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M167.375 168V84.25C167.375 37.996 129.907.5 83.688.5 37.468.5 0 37.996 0 84.25S37.468 168 83.688 168h83.687Z" />
  </svg>
);
