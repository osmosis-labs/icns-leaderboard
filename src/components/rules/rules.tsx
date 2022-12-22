import React from "react";
import { half, randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { Star } from "../star/star";
import { Title } from "./title";

export const Rules = () => {
  return (
    <div className="h-[25em] xs:h-[35em] w-[35em] xs:w-[25em] flex flex-col items-center justify-center bg-black shadow-container relative">
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
          <b>Base Points:</b>
          <ul>
            <li>- ICNS Launch was on Dec 20, 2022.</li>
            <li>- Registering on Day 1 earns you 365 points.</li>
            <li>- Registering on Day 2 earns you 364 points.</li>
            <li>- And so on...</li>
          </ul>
        </p>
        <p className="text-text-high p-2 w-full">
          <b>Referral Bonus:</b>
          <ul>
            <li>- You will earn 100 points for every person you refer.</li>
            <li>- For every person that they refer (2nd degree), you get 50 points.</li>
            <li>- For every person that they refer (3rd degree), you get 33.3 points.</li>
            <li>- And so on...</li>
          </ul>
        </p>
        <p className="text-text-high p-2 w-full">
          <b>Kickback Points:</b>
          <ul>
            <li>- You earn 100 points for using someone's referral code.</li>
          </ul>
        </p>
        <p className="text-text-high p-2 w-full italic text-[0.8em]">
          <b>Note:</b> For any new Twitter accounts created after December 19, 2022, no
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
