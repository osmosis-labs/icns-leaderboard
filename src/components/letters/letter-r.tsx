import * as React from "react";

export interface LetterRProps {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  className?: string;
}

export const LetterR = ({
  colorOne = "#D9D9D9",
  colorTwo = "#646464",
  colorThree = "#D9D9D9",
  colorFour = "#646464",
  className,
}: LetterRProps) => (
  <svg
    width={500}
    height={500}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M0 0h250v250H0V0Z" fill={colorOne} />
    <path
      d="M0 250h250v250H0V250ZM250 0h125c69.036 0 125 55.964 125 125s-55.964 125-125 125H250V0Z"
      fill={colorTwo}
    />
    <path
      d="M0 250h250v250H0V250ZM250 0h125c69.036 0 125 55.964 125 125s-55.964 125-125 125H250V0Z"
      fill={colorThree}
    />
    <path d="m250 250 250 250H250V250Z" fill={colorFour} />
  </svg>
);
