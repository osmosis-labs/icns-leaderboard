import React from "react";
import logoLetter from "../../assets/images/logo_letter.svg";
import { Title } from "../../components/title/title";

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center min-h-screen pl-[0.125em] pt-[0.125em]">
      <div className="bg-black h-[5em] w-[15em]  flex justify-center items-center shadow-container">
        <img className="" src={logoLetter} alt="logo" />
      </div>
      {/* <p className="bg-primary-400 h-[15em] w-[15em]  mt-[5em]  flex justify-center items-center text-text-high">
        Hello
      </p> */}
      <div className="h-[15em] w-[65em] lg:w-[55em] md:w-[45em] 1.5xs:w-[35em] xs:w-[25em] mt-[5em] bg-black flex justify-center items-center shadow-container">
        <Title />
      </div>
    </div>
  );
};
