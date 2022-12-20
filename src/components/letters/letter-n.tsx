import * as React from "react";

export interface LetterNProps {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  className?: string;
}

export const LetterN = ({
  colorOne = "#D9D9D9",
  colorTwo = "#646464",
  colorThree = "#D9D9D9",
  colorFour = "#646464",
  className,
}: LetterNProps) => (
  <svg
    width={500}
    height={500}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M250 0h250v250H250V0Z" fill={colorOne} />
    <path d="M250 250h250v250L374 374 250 250Z" fill={colorTwo} />
    <path d="m0 0 250 250v250H0V0Z" fill={colorThree} />
    <path d="M0 250h250v250H0V250Z" fill={colorFour} />
  </svg>
);
