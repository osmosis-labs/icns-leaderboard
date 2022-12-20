import * as React from "react";

export interface LetterSProps {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  className?: string;
}

export const LetterS = ({
  colorOne = "#D9D9D9",
  colorTwo = "#646464",
  colorThree = "#D9D9D9",
  colorFour = "#646464",
  className,
}: LetterSProps) => (
  <svg
    width={500}
    height={500}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path
      d="M0 125C0 55.964 55.964 0 125 0h125v250H125C55.964 250 0 194.036 0 125Z"
      fill={colorOne}
    />
    <path d="M0 250h250v250H0V250ZM250 0h250v250H250z" fill={colorTwo} />
    <path
      d="M250 250h125c69.036 0 125 55.964 125 125s-55.964 125-125 125H250V250Z"
      fill={colorThree}
    />
    <path d="M250 0h250v250H250z" fill={colorFour} />
  </svg>
);
