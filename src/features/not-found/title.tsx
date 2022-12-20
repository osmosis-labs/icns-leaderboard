import React from "react";
import { LetterF } from "../../components/letters/letter-f";
import { LetterN } from "../../components/letters/letter-n";
import { Container } from "../../components/search/title";
import { randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";

export const Title = () => {
  return (
    <div className="chillax text-text-main text-[6.5em] font-[600] uppercase flex items-center lg:text-[5.5em] md:text-[4.5em] 1.5xs:text-[3.5em] xs:text-[2em]">
      <Container>
        <LetterN
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
      <Container>o</Container>
      <Container>t</Container>
      <Container> </Container>

      <Container>
        <LetterF
          colorOne={randomArray(COLORS)}
          colorTwo={randomArray(COLORS)}
          colorThree={randomArray(COLORS)}
          colorFour={randomArray(COLORS)}
          className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
        />
      </Container>
      <Container>o</Container>

      <Container>u</Container>
      <LetterN
        colorOne={randomArray(COLORS)}
        colorTwo={randomArray(COLORS)}
        colorThree={randomArray(COLORS)}
        colorFour={randomArray(COLORS)}
        className="w-[0.7em] max-h-[0.7em] -translate-y-[0.03em] "
      />
      <Container>d</Container>
    </div>
  );
};
