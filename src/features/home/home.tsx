import React from "react";
import logoLetter from "../../assets/images/logo_letter.svg";
import { Leaderboard } from "../../components/leaderboard/leaderboard";
import { Title } from "../../components/title/title";
import { Star } from "../../components/star/star";
import { half, randomArray } from "../../helper/random";
import { Rules } from "../../components/rules/rules";
import { COLORS } from "../../helper/settings";
import { Search } from "../../components/search/search";
import { GoTop } from "../../components/go-top/go-top";
import { Total } from "../../components/total/total";
import { Grid } from "../../components/grid/grid";

export const Home = () => {
  const classNameHome = `w-full h-full flex flex-col justify-center items-center min-h-screen pl-[0.125em] pt-[0.125em] overflow-auto z-10`;
  return (
    <div className={classNameHome} id="home">
      <GoTop />

      <div className="bg-black h-[5em] w-[15em] mt-[10em] xs:mt-[5em] flex justify-center items-center shadow-container">
        <img className="" src={logoLetter} alt="logo" />
      </div>
      <Grid
        opt={{
          xl: { rows: 1, columns: 13, nbItem: 3 },
          lg: { rows: 1, columns: 11, nbItem: 3 },
          md: { rows: 1, columns: 9, nbItem: 2 },
          sm: { rows: 1, columns: 7, nbItem: 2 },
          xs: { rows: 1, columns: 5, nbItem: 1 },
        }}
      />
      <div className="relative  h-[15em] xs:h-[10em] w-[65em] lg:w-[55em] md:w-[45em] sm:w-[35em] xs:w-[25em] bg-black flex justify-center items-center shadow-container">
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
      <div className="flex justify-center items-center">
        <Grid
          opt={{
            xl: { rows: 5, columns: 3, nbItem: 2 },
            lg: { rows: 5, columns: 2, nbItem: 1 },
            md: { rows: 5, columns: 1, nbItem: 1 },
            sm: null,
            xs: null,
          }}
        />
        <Rules />
        <Grid
          opt={{
            xl: { rows: 5, columns: 3, nbItem: 2 },
            lg: { rows: 5, columns: 2, nbItem: 1 },
            md: { rows: 5, columns: 1, nbItem: 1 },
            sm: null,
            xs: null,
          }}
        />
      </div>

      <Total />
      <Leaderboard />
      <div className="flex flex-col justify-center items-center">
        <Grid
          opt={{
            xl: { rows: 1, columns: 9, nbItem: 2 },
            lg: { rows: 1, columns: 9, nbItem: 2 },
            md: { rows: 1, columns: 7, nbItem: 2 },
            sm: { rows: 1, columns: 7, nbItem: 2 },
            xs: { rows: 1, columns: 5, nbItem: 1 },
          }}
        />
        <Search />
      </div>
    </div>
  );
};
