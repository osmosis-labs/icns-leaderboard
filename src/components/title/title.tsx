import React from "react";
import { randomArray } from "../../helper/random";
import { LetterA } from "../letters/letter-a";
import { LetterB } from "../letters/letter-b";
import { LetterD } from "../letters/letter-d";

const COLORS = ["#F4CC3E", "#00B86E", "#FB5232", "#5A4CFA", "#FF77F3"];

const Container = ({ children }: { children: React.ReactElement | string }) => {
  return (
    <span className="flex items-center justify-center m-1 ">{children}</span>
  );
};

export const Title = () => {
  return (
    <div className="chillax text-text-main text-[6.5em] font-[600] uppercase flex items-center lg:text-[5.5em] md:text-[4.5em] 1.5xs:text-[3.5em] xs:text-[2em]">
      <Container>l</Container>
      <Container>e</Container>
      <Container>
        <LetterA
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
      <Container>d</Container>
      <Container>e</Container>
      <Container>r</Container>
      <Container>
        <LetterB
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
      <Container>o</Container>
      <Container>a</Container>
      <Container>r</Container>
      <Container>
        <LetterD
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
    </div>
  );
};
