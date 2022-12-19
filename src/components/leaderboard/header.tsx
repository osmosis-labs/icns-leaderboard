import React from "react";

export const Header = () => {
  return (
    <div className="bg-primary-200 grid grid-cols-leaderboard-row shadow-container items-center h-[5em] w-[35em] xs:w-[25em]">
      <p className="text-text-main ml-2">Rank</p>
      <p className="text-text-main ml-2">Name</p>
      <p className="text-text-main ml-2 ">Score</p>
    </div>
  );
};
