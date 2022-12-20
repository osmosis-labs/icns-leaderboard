import React, { useEffect, useState } from "react";
import logoLetter from "../../assets/images/logo_letter.svg";
import { Title } from "../../components/title/title";
import { Star } from "../../components/star/star";
import { half, randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { useNavigate, useParams } from "react-router-dom";
import { useData, User as UserData } from "../../providers/data.provider";
import { Button } from "../../components/button/button";
import { Row, RowSkeleton } from "../../components/leaderboard/row";
import { toast } from "react-toastify";
import { Header } from "../../components/leaderboard/header";
import { findUser, getArray, getLinesAroundIndex } from "../../helper/array";
import { TitleUser } from "./title-user";
import userImg from "../../assets/images/user.png";
import { normalize } from "../../helper/strings";

export const User = () => {
  let { name } = useParams();
  const { data, isLoading } = useData();
  const [currentData, setCurrentData] = useState<UserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (name && name !== undefined && data.length > 0) {
      const index = data.findIndex((user) => findUser(name as string, user));
      if (index !== -1) {
        // Need to take 5 rows (must 2 before, 2 after)
        let rows = getLinesAroundIndex<UserData>(index, data, 5);
        setCurrentData(rows);
      } else {
        toast.info("Sorry, we did not find you.");
      }
    }
  }, [data, name]);

  const onClickHome = () => {
    navigate(`/`);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center min-h-screen pl-[0.125em] pt-[0.125em] overflow-auto">
      <div className="bg-black h-[5em] w-[15em] mt-[5em] xs:mt-[0em] flex justify-center items-center shadow-container">
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
          currentData.map(
            ({ name: userName, rank, score }: UserData, index: number) => {
              return (
                <Row
                  key={`${userName} - ${index}`}
                  name={userName}
                  score={score}
                  type={"custom"}
                  rank={rank}
                  className={
                    normalize(name ?? "") === normalize(userName)
                      ? "xs:w-[25em] w-[35em] bg-grey-500 font-bold"
                      : "xs:w-[25em] w-[35em] bg-grey-700 font-bold"
                  }
                />
              );
            }
          )}
        {!isLoading && currentData.length === 0 && (
          <div className="h-[25em] xs:h-[25em] w-[35em] xs:w-[25em] flex flex-col items-center justify-center bg-black shadow-container relative">
            {half() && (
              <Star color={randomArray(COLORS)} size={1} left={-0.5} />
            )}
            {half() && (
              <Star color={randomArray(COLORS)} size={1} right={-0.5} />
            )}
            {half() && <Star color={randomArray(COLORS)} size={1} top={-0.5} />}
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
                The user {name} was not found.
              </p>
              <p className="text-text-high p-2 w-full">
                Go back to home and try to find it.
              </p>
            </div>
            <img className="max-h-[10em] mx-auto mb-2" src={userImg} />
          </div>
        )}
      </div>
      <Button onClick={onClickHome} className="mt-[5em] mb-[10em]">
        Go to home
      </Button>
    </div>
  );
};
