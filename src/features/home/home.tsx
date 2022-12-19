import React from "react";
import logoLetter from "../../assets/images/logo_letter.svg";
import { Leaderboard } from "../../components/leaderboard/leaderboard";
import { Title } from "../../components/title/title";
import { Star } from "../../components/star/star";
import { half, randomArray } from "../../helper/random";
const COLORS = ["#F4CC3E", "#00B86E", "#FB5232", "#5A4CFA", "#FF77F3"];

export const Home = () => {
  const classNameHome = `w-full h-full flex flex-col justify-center items-center min-h-screen pl-[0.125em] pt-[0.125em] overflow-auto`;
  return (
    <div className={classNameHome}>
      <div className="bg-black h-[5em] w-[15em] mt-[5em]  xs:mt-[0em] flex justify-center items-center shadow-container">
        <img className="" src={logoLetter} alt="logo" />
      </div>

      <div className="relative  h-[15em] xs:h-[10em] w-[65em] lg:w-[55em] md:w-[45em] 1.5xs:w-[35em] xs:w-[25em] mt-[5em] xs:mt-[5em] bg-black flex justify-center items-center shadow-container">
        {half() && <Star color={randomArray(COLORS)} size={2} left={-1} />}
        {half() && <Star color={randomArray(COLORS)} size={2} right={-1} />}
        {half() && <Star color={randomArray(COLORS)} size={2} top={-1} />}
        {half() && (
          <Star color={randomArray(COLORS)} size={2} bottom={-1} left={-1} />
        )}
        {half() && (
          <Star color={randomArray(COLORS)} size={2} top={-1} left={-1} />
        )}
        {half() && (
          <Star color={randomArray(COLORS)} size={2} bottom={-1} right={-1} />
        )}
        {half() && (
          <Star color={randomArray(COLORS)} size={2} top={-1} right={-1} />
        )}

        <Title />
      </div>

      <Leaderboard />
    </div>
  );
};
