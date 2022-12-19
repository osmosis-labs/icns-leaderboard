import React from "react";

interface RowProps {
  name: string;
  score: number;
  rank: number;
  type?: "first" | "second" | "third" | "basic";
}

export const Row = ({ name, score, type = "basic", rank }: RowProps) => {
  let classNameRow = `grid grid-cols-leaderboard-row shadow-container items-center h-[5em] `;
  if (type === "basic") {
    classNameRow = `${classNameRow} w-[25em] bg-grey-900 `;
  } else if (type === "third") {
    classNameRow = `${classNameRow} w-[27.5em] bg-grey-700`;
  } else if (type === "second") {
    classNameRow = `${classNameRow} w-[30em] bg-grey-500`;
  } else if (type === "first") {
    classNameRow = `${classNameRow} w-[35em] bg-grey-300`;
  }
  return (
    <div className={classNameRow}>
      <p className="text-text-main ml-2">#{rank}</p>
      <p className="text-text-main ml-2">{name}</p>
      <p className="text-text-main ml-2">{score}</p>
    </div>
  );
};

/*

import React from "react";

interface RowProps {
  name: string;
  score: number;
  rank: number;
  type?: "first" | "second" | "third" | "basic";
}

export const Row = ({ name, score, type = "basic", rank }: RowProps) => {
  let classNameName = `h-full text-text-main flex flex-col justify-center p-3`;
  let classNameScore = `h-full text-text-main flex flex-col justify-center p-3`;
  if (type === "basic") {
    classNameName = `${classNameName} w-[15em] `;
    classNameScore = `${classNameScore}  w-[10em]`;
  } else if (type === "third") {
    classNameName = `${classNameName} w-[15.5em]  bg-grey-700`;
    classNameScore = `${classNameScore} w-[10.5em]  bg-grey-700`;
  } else if (type === "second") {
    classNameName = `${classNameName} w-[16.25em]  bg-grey-500`;
    classNameScore = `${classNameScore} w-[11.25em]  bg-grey-500`;
  } else if (type === "first") {
    classNameName = `${classNameName} w-[17.25em] bg-grey-300`;
    classNameScore = `${classNameScore} w-[12.25em] bg-grey-300`;
  }
  return (
    <div className="bg-grey-900 inline-flex shadow-container h-[5em] w-[}">
      <p className={classNameName}>{name}</p>
      <p className={classNameScore}>{score}</p>
    </div>
  );
};

*/
