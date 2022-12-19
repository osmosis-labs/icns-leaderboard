import React from "react";
import { StarSvg } from "./star-svg";

interface StarProps {
  size: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  color?: string;
}

export const Star = ({ size, top, left, bottom, right, color }: StarProps) => {
  return (
    <StarSvg
      style={{
        height: `${size}em`,
        width: `${size}em`,
        top: top ? `${top}em` : "",
        left: left ? `${left}em` : "",
        bottom: bottom ? `${bottom}em` : "",
        right: right ? `${right}em` : "",
      }}
      color={color}
      className="absolute"
    />
  );
};
