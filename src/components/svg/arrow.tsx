import * as React from "react";

export interface ArrowIconProps {
  color: string;
  className?: string;
}

export const ArrowIcon = ({ color = "#D9D9D9", className }: ArrowIconProps) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path
      d="M9.99 1.913 17.079 9l-7.087 7.088M16.094 9H1.722"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="square"
    />
  </svg>
);
