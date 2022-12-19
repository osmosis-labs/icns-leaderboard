import * as React from "react";

export interface LetterAProps {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  className?: string;
}

export const LetterA = ({
  colorOne = "#D9D9D9",
  colorTwo = "#646464",
  colorThree = "#D9D9D9",
  colorFour = "#646464",
  className,
}: LetterAProps) => (
  <svg
    width={500}
    height={500}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path
      d="M250 0c138.071 0 250 111.929 250 250H375c-69.036 0-125-55.964-125-125V0Z"
      fill={colorOne}
    />
    <path
      d="M0 250C0 111.929 111.929 0 250 0v125c0 69.036-55.964 125-125 125H0Z"
      fill={colorTwo}
    />

    <path
      d="M0 250h125c69.036 0 125 55.964 125 125v125H0V250Z"
      fill={colorThree}
    />

    <path
      d="M250 375c0-69.036 55.964-125 125-125h125v250H250V375Z"
      fill={colorFour}
    />
  </svg>
);
