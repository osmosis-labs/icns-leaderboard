import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape6 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M.376 168C92.815 168 167.751 93.007 167.751.5H.376V168Z" />
  </svg>
);
