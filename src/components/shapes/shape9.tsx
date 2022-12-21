import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape9 = ({ className }: ShapeProps) => (
  <svg
    width={168}
    height={168}
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M83.688 168c46.219 0 83.687-37.496 83.687-83.75V.5H0v83.75C0 130.504 37.468 168 83.688 168Z" />
  </svg>
);
