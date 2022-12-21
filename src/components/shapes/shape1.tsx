import * as React from "react";

export interface ShapeProps {
  className?: string;
}

export const Shape1 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M.625 0H168v167.5C75.561 167.5.625 92.439.625 0Z" />
  </svg>
);
