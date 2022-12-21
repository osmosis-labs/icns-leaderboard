import React from "react";
import { Shape1 } from "./shape1";
import { Shape2 } from "./shape2";
import { randomArray } from "../../helper/random";
import { Shape12 } from "./shape12";
import { Shape11 } from "./shape11";
import { Shape10 } from "./shape10";
import { Shape9 } from "./shape9";
import { Shape8 } from "./shape8";
import { Shape7 } from "./shape7";
import { Shape6 } from "./shape6";
import { Shape5 } from "./shape5";
import { Shape4 } from "./shape4";
import { Shape3 } from "./shape3";

const shapes = [
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8,
  Shape9,
  Shape10,
  Shape11,
  Shape12,
];

export interface RandomShapeProps {
  className?: string;
}

export const RandomShape = ({ className }: RandomShapeProps) => {
  const Shape = randomArray(shapes);
  const colors = [
    "hover:fill-yellow-light",
    "hover:fill-red-light",
    "hover:fill-green-light",
    "hover:fill-pink-light",
    "hover:fill-purple-light",
  ];
  const colorsGray = [
    "fill-grey-400",
    "fill-grey-500",
    "fill-grey-600",
    "fill-grey-700",
    "fill-grey-800",
    "fill-grey-900",
  ];
  const classNameShape = `h-[5em] w-[5em] duration-300 transition-colors ${randomArray(
    colors
  )} ${randomArray(colorsGray)}`;

  const classNameRandomShape = `${className} h-[5em] w-[5em]`;
  return (
    <span className={classNameRandomShape}>
      <Shape className={classNameShape} />
    </span>
  );
};
