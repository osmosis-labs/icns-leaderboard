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
    classNameRow = `${classNameRow} xs:w-[25em] w-[25em] bg-grey-800 `;
  } else if (type === "third") {
    classNameRow = `${classNameRow} xs:w-[25em] w-[27.5em] bg-grey-700 font-bold`;
  } else if (type === "second") {
    classNameRow = `${classNameRow} xs:w-[25em] w-[30em] bg-grey-500 font-bold`;
  } else if (type === "first") {
    classNameRow = `${classNameRow} xs:w-[25em] w-[35em] bg-grey-300 font-bold`;
  }
  return (
    <div className={classNameRow}>
      <p className="text-text-main ml-2">#{rank}</p>
      <p className="text-text-main ml-2">{name}</p>
      <p className="text-text-main ml-2">{score}</p>
    </div>
  );
};
