import * as React from "react";

export interface LetterDProps {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  className?: string;
}

export const LetterD = ({
  colorOne = "#D9D9D9",
  colorTwo = "#646464",
  colorThree = "#D9D9D9",
  colorFour = "#646464",
  className,
}: LetterDProps) => (
  <svg
    width={500}
    height={500}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path d="M0 0h250v125c0 69.036-55.964 125-125 125H0V0Z" fill={colorOne} />
    <path
      d="M0 500h250V375c0-69.036-55.964-125-125-125H0v250ZM500 250C500 111.929 388.071 0 250 0v125c0 69.036 55.964 125 125 125h125Z"
      fill={colorTwo}
    />
    <path
      d="M500 250C500 111.929 388.071 0 250 0v125c0 69.036 55.964 125 125 125h125Z"
      fill={colorThree}
    />
    <path
      d="M500 250c0 138.071-111.929 250-250 250V375c0-69.036 55.964-125 125-125h125Z"
      fill={colorFour}
    />
  </svg>
);
