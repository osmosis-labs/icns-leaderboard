import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape5 = ({ className }: ShapeProps) => (
  <svg
    width={169}
    height={168}
    viewBox="0 0 169 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M84.438.5c46.219 0 83.687 37.5 83.687 83.719 0 46.253-37.496 83.781-83.75 83.781H.75V84.187C.75 37.967 38.218.5 84.438.5Z" />
  </svg>
);
