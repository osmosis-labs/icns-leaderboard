import React from "react";
import { randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";

import { LetterS } from "../letters/letter-s";

export const Container = ({
  children,
}: {
  children: React.ReactElement | string;
}) => {
  return (
    <span className="flex items-center justify-center m-1 ">{children}</span>
  );
};

export const Title = () => {
  return (
    <div className="chillax text-text-main text-[2.5em] font-[600] uppercase flex items-center lg:text-[2.5em] md:text-[2.5em] sm:text-[2em] xs:text-[1.5em]">
      <Container>
        <LetterS
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
      <Container>e</Container>

      <Container>a</Container>
      <Container>r</Container>
      <Container>c</Container>
      <Container>h</Container>
    </div>
  );
};
