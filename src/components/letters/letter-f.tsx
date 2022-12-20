import * as React from "react";

export interface LetterFProps {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  className?: string;
}

export const LetterF = ({
  colorOne = "#D9D9D9",
  colorTwo = "#646464",
  colorThree = "#D9D9D9",
  colorFour = "#646464",
  className,
}: LetterFProps) => (
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
      d="M0 250h250v250H0V250ZM250 0h250c0 69.036-55.964 125-125 125S250 69.036 250 0Z"
      fill={colorTwo}
    />
    <path
      d="M250 250c0-69.036 55.964-125 125-125s125 55.964 125 125-55.964 125-125 125-125-55.964-125-125Z"
      fill={colorThree}
    />
    <path
      d="M250 250c0-69.036 55.964-125 125-125s125 55.964 125 125-55.964 125-125 125-125-55.964-125-125Z"
      fill={colorFour}
    />
  </svg>
);
