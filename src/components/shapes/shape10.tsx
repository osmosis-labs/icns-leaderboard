import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape10 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M167.375 0c0 92.508-74.936 167.5-167.375 167.5C0 74.992 74.936 0 167.375 0Z" />
  </svg>
);
