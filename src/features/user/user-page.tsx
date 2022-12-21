import React, { useEffect, useState } from "react";
import logoLetter from "../../assets/images/logo_letter.svg";
import { Title } from "../../components/title/title";
import { Star } from "../../components/star/star";
import { half, randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Row, RowSkeleton } from "../../components/leaderboard/row";
import { toast } from "react-toastify";
import { Header } from "../../components/leaderboard/header";
import { findUser, getArray, getLinesAroundIndex } from "../../helper/array";
import { TitleUser } from "./title-user";
import userImg from "../../assets/images/user.png";
import { normalize } from "../../helper/strings";
import { useLeaderboard } from "../../hooks/use-api";
import { User } from "../../hooks/reformats/leaderboard";
import { Grid } from "../../components/grid/grid";

export const UserPage = () => {
  let { name: nameParam } = useParams();
  const { data, isLoading } = useLeaderboard();
  const [currentData, setCurrentData] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (nameParam && nameParam !== undefined && data.length > 0) {
      const index = data.findIndex((user) =>
        findUser(nameParam as string, user)
      );
      if (index !== -1) {
        // Need to take 5 rows (must 2 before, 2 after)
        let rows = getLinesAroundIndex<User>(index, data, 5);
        setCurrentData(rows);
      } else {
        toast.info("Sorry, we did not find you.");
      }
    }
  }, [data, nameParam]);

  const onClickHome = () => {
    navigate(`/`);
  };
  const opt = {
    xl: {
      rows: 7,
      columns: 3,
      nbItem: isLoading ? 3 : (7 + 1 * 3) / 5,
    },
    lg: {
      rows: 7,
      columns: 2,
      nbItem: isLoading ? 3 : (7 + 1 * 2) / 4,
    },
    md: null,
    sm: null,
    xs: null,
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center min-h-screen pl-[0.125em] pt-[0.125em] overflow-auto">
      <div className="bg-black h-[5em] w-[15em] mt-[5em] xs:mt-[0em] flex justify-center items-center shadow-container">
        <img className="" src={logoLetter} alt="logo" />
      </div>

      <div className="relative  h-[15em] xs:h-[10em] w-[65em] lg:w-[55em] md:w-[45em] sm:w-[35em] xs:w-[25em] mt-[5em] xs:mt-[5em] bg-black flex justify-center items-center shadow-container">
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
      <div className=" flex justify-center items-center ">
        <Grid opt={opt} />
        <div className="mt-[5em] flex flex-col justify-center items-center ">
          <Header />
          {isLoading && (
            <>
              {getArray(5).map((_, index) => {
                return (
                  <RowSkeleton
                    key={index}
                    type={
                      index === 0
                        ? "first"
                        : index === 1
                        ? "second"
                        : index === 2
                        ? "third"
                        : "basic"
                    }
                  />
                );
              })}
            </>
          )}
          {!isLoading &&
            currentData.length > 0 &&
            currentData.map((user, index: number) => {
              return (
                <Row
                  key={`${user.name} - ${index}`}
                  name={user.name}
                  score={user.points}
                  type={"custom"}
                  rank={user.rank}
                  className={
                    normalize(nameParam ?? "") === normalize(user.name)
                      ? "xs:w-[35em] w-[45em] bg-grey-500 font-bold"
                      : "xs:w-[35em] w-[45em] bg-grey-700 font-bold"
                  }
                  twitterName={user.userData.name}
                  twitterUsername={user.userData.username}
                  twitterImage={user.userData.profileImageUrl}
                />
              );
            })}
          {!isLoading && currentData.length === 0 && (
            <div className="h-[25em] xs:h-[25em] w-[35em] xs:w-[25em] flex flex-col items-center justify-center bg-black shadow-container relative">
              {half() && (
                <Star color={randomArray(COLORS)} size={1} left={-0.5} />
              )}
              {half() && (
                <Star color={randomArray(COLORS)} size={1} right={-0.5} />
              )}
              {half() && (
                <Star color={randomArray(COLORS)} size={1} top={-0.5} />
              )}
              {half() && (
                <Star
                  color={randomArray(COLORS)}
                  size={1}
                  bottom={-0.5}
                  left={-0.5}
                />
              )}
              {half() && (
                <Star
                  color={randomArray(COLORS)}
                  size={1}
                  top={-0.5}
                  left={-0.5}
                />
              )}
              {half() && (
                <Star
                  color={randomArray(COLORS)}
                  size={1}
                  bottom={-0.5}
                  right={-0.5}
                />
              )}
              {half() && (
                <Star
                  color={randomArray(COLORS)}
                  size={1}
                  top={-0.5}
                  right={-0.5}
                />
              )}
              <TitleUser />
              <div className="h-full mt-[0em] w-full ">
                <p className="text-text-high p-2 w-full">
                  The user {nameParam} was not found.
                </p>
                <p className="text-text-high p-2 w-full">
                  The name is case sentisitive, be careful.
                </p>
                <p className="text-text-high p-2 w-full">
                  Either the account has not been registered on ICNS or the
                  twitter account has been created after December 19, 2022.
                </p>
              </div>
              <img className="max-h-[10em] mx-auto mb-2" src={userImg} />
            </div>
          )}
        </div>
        <Grid opt={opt} />
      </div>
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
      </div>
      <Button onClick={onClickHome} className="mt-[0em] mb-[10em]">
        Go to home
      </Button>
    </div>
  );
};
