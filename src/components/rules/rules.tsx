import React from "react";
import { half, randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { Star } from "../star/star";
import { Title } from "./title";

export const Rules = () => {
  return (
    <div className="h-[20em] xs:h-[30em] w-[35em] xs:w-[25em] flex flex-col items-center justify-center bg-black shadow-container relative">
      {half() && <Star color={randomArray(COLORS)} size={1} left={-0.5} />}
      {half() && <Star color={randomArray(COLORS)} size={1} right={-0.5} />}
      {half() && <Star color={randomArray(COLORS)} size={1} top={-0.5} />}
      {half() && (
        <Star color={randomArray(COLORS)} size={1} bottom={-0.5} left={-0.5} />
      )}
      {half() && (
        <Star color={randomArray(COLORS)} size={1} top={-0.5} left={-0.5} />
      )}
      {half() && (
        <Star color={randomArray(COLORS)} size={1} bottom={-0.5} right={-0.5} />
      )}
      {half() && (
        <Star color={randomArray(COLORS)} size={1} top={-0.5} right={-0.5} />
      )}
      <Title />
      <div className="h-full mt-[0em] ">
        <p className="text-text-high p-2 w-full">
          You will earn 100 points for using someone's referral
        </p>
        <p className="text-text-high p-2 w-full">
          You will earn 100 points for every person you refer
        </p>
        <p className="text-text-high p-2 w-full">
          You will earn ((1/degree)*100) points for every person you refer (50
          points for every second degree, 33.33 for every third degree, etc.)
        </p>
        <p className="text-text-high p-2 w-full">
          Bonus for early registration: you will earn an additional 100 points
        </p>
        <p className="text-text-high p-2 w-full italic text-[0.8em]">
          Note: For any new Twitter accounts created after December 19, 2022, no
          points will be granted.
        </p>
      </div>
    </div>
  );
};
/*

- You will earn 100 points for using someone's referral
- You will earn 100 points for every person you refer
- You will earn ((1/degree)*100) points for every person you refer (50 points for every second degree, 33.33 for every third degree, etc.)

Bonus for early registration: you will earn an additional 100 points

Note:
- For any new Twitter accounts created after December 19, 2022, no points will be granted.*/
