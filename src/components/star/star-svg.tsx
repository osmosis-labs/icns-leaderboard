import * as React from "react";

export interface StarSvg {
  color?: string;
  className?: string;
  style: any;
}

export const StarSvg = ({ color = "#2B2B2B", className, style }: StarSvg) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="m25 0 .35 2.747A25.309 25.309 0 0 0 47.253 24.65L50 25l-2.747.35A25.309 25.309 0 0 0 25.35 47.253L25 50l-.35-2.747A25.309 25.309 0 0 0 2.747 25.35L0 25l2.747-.35A25.309 25.309 0 0 0 24.65 2.747L25 0Z"
      fill={color}
    />
  </svg>
);
