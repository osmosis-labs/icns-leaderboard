import React from "react";
import { Container } from "../search/title";
import { randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { LetterA } from "../letters/letter-a";
import { LetterD } from "../letters/letter-d";

export const TitleDataNotFound = () => {
  return (
    <div className="chillax text-text-main text-[4em] font-[600] uppercase flex items-center lg:text-[4em] md:text-[3.5em] sm:text-[3.5em] xs:text-[2em]">
      <Container>
        <LetterD
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
      <Container>a</Container>
      <Container>t</Container>
      <Container>
        <LetterA
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
