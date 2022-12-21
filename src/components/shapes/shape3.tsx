import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape3 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <rect
      x={168.001}
      y={0.5}
      width={167.5}
      height={167.375}
      rx={83.688}
      transform="rotate(90 168.001 .5)"
    />
  </svg>
);
