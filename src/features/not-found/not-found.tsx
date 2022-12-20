import React, { useEffect } from "react";
import logoLetter from "../../assets/images/logo_letter.svg";
import { toast } from "react-toastify";
import { Star } from "../../components/star/star";
import { half, randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { Title } from "./title";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const classNameHome = `w-full h-full flex flex-col justify-center items-center min-h-screen pl-[0.125em] pt-[0.125em] overflow-auto`;

  useEffect(() => {
    toast.error(`You are lost.`);
  }, []);

  const onClickHome = () => {
    navigate(`/`);
  };
  return (
    <div className={classNameHome} id="home">
      <div className="bg-black h-[5em] w-[15em] mt-[5em] xs:mt-[0em] flex justify-center items-center shadow-container">
        <img className="" src={logoLetter} alt="logo" />
      </div>

      <div className=" shadow-container relative h-[15em] xs:h-[10em] w-[65em] lg:w-[55em] md:w-[45em] 1.5xs:w-[35em] xs:w-[25em] mt-[5em] xs:mt-[5em] bg-black flex justify-center items-center shadow-container">
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
      <div className="relative mt-[0em] bg-black h-[5em] w-[25em] lg:w-[25em] flex items-center justify-center shadow-container">
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
        <p className="text-text-high p-2 w-full text-center ">
          Your are lost, go back to home.
        </p>
      </div>
      <Button onClick={onClickHome} className="mt-[10em] mb-[5em]">
        Go to home
      </Button>
    </div>
  );
};
