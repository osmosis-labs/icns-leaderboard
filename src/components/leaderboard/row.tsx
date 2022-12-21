import React from "react";
import { Image } from "../image/image";
import { Skeleton } from "../skeleton/skeleton";

interface RowProps {
  name: string;
  score: number;
  rank: number;
  twitterName: string;
  twitterUsername: string;
  twitterImage: string;
  type?: "first" | "second" | "third" | "basic" | "custom";
  className?: string;
  onClick?: (name: string) => void;
}

export const Row = ({
  name,
  score,
  type = "basic",
  rank,
  className,
  onClick,
  twitterImage,
  twitterName,
  twitterUsername,
}: RowProps) => {
  const onClickRow = () => {
    if (onClick) {
      onClick(name);
    }
  };
  let classNameRow = `grid grid-cols-leaderboard-row shadow-container items-center h-[5em] `;
  let classNameRowHover = `cursor-pointer transition-all duration-150`;
  if (type === "basic" || !type) {
    classNameRow = `${classNameRow} xs:w-[25em] w-[25em] bg-grey-800 `;
    classNameRowHover = `${classNameRowHover} hover:w-[26em]`;
  } else if (type === "third") {
    classNameRow = `${classNameRow} xs:w-[25em] w-[27.5em] bg-grey-700 font-bold`;
    classNameRowHover = `${classNameRowHover} hover:xs:w-[26em] hover:w-[28.5em]`;
  } else if (type === "second") {
    classNameRow = `${classNameRow} xs:w-[25em] w-[30em] bg-grey-500 font-bold`;
    classNameRowHover = `${classNameRowHover}  hover:xs:w-[26em] hover:w-[31em]`;
  } else if (type === "first") {
    classNameRow = `${classNameRow} xs:w-[25em] w-[35em] bg-grey-300 font-bold`;
    classNameRowHover = `${classNameRowHover}  hover:xs:w-[26em] hover:w-[36em]`;
  } else if (type === "custom") {
    classNameRow = `${classNameRow} ${className}`;
    classNameRowHover = `${classNameRowHover} `;
  }
  if (onClick) {
    classNameRow = `${classNameRow} ${classNameRowHover}`;
  }
  return (
    <div className={classNameRow} onClick={onClickRow}>
      <p className="text-text-main ml-2">#{rank}</p>
      <p className="text-text-main ml-2 truncate hover:text-clip">{name}</p>
      <div className="text-text-main ml-2 grid grid-cols-[2em_1fr] items-center">
        <Image className="h-[2em] bg-grey-600" src={twitterImage} />

        <a
          target="_blank"
          className="ml-[6px] truncate hover:text-clip"
          href={`https://twitter.com/${twitterUsername}`}
        >
          {twitterName}
        </a>
      </div>
      <p className="text-text-main ml-2">{score}</p>
    </div>
  );
};

export const RowSkeleton = ({ type = "basic" }: Partial<RowProps>) => {
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
      <Skeleton height="1.2em" width="1.5em" className="ml-2 opacity-75" />
      <Skeleton height="1.2em" width="10em" className="ml-2 opacity-75" />
      <div className="text-text-main ml-2 grid grid-cols-[2em_1fr] items-center">
        <Skeleton height="2em" width="2em" className="ml-2 opacity-75" />
        <Skeleton height="1.2em" width="3em" className="opacity-75 ml-[12px]" />
      </div>
      <Skeleton height="1.2em" width="3em" className="ml-2 opacity-75" />
    </div>
  );
};
