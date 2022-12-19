import React from "react";
import { ArrowIcon } from "../svg/arrow";

export type OrderBy = "rank" | "name" | "score";
export type Order = "desc" | "asc";
interface HeaderProps {
  onSort: (orderBy: OrderBy, order: Order) => void;
  orderBy: OrderBy;
  order: Order;
}

export const Header = ({ onSort, order, orderBy }: HeaderProps) => {
  const onClickSort = (orderByNew: OrderBy) => {
    let orderTmp = "asc";
    if (orderBy === orderByNew) {
      orderTmp = order === "asc" ? "desc" : "asc";
    }
    onSort(orderByNew, orderTmp as Order);
  };
  const className = "text-text-main ml-2 cursor-pointer flex";
  const classNameOrdered = `${className} font-bold`;
  const classOrder = "transition-all duration-[300ms] pl-1 ml-1 opacity-1";
  const classOrderUp = `${classOrder} text-bold -rotate-[90deg]`;
  const classOrderDown = `${classOrder} text-bold rotate-[90deg]`;
  const classNameNotOrdered =
    "opacity-0 transition-all duration-[300ms] pl-1  ml-1 rotate-[90deg]";
  return (
    <div className="bg-primary-200 grid grid-cols-leaderboard-row shadow-container items-center h-[5em] w-[35em] xs:w-[25em]">
      <span
        className={orderBy === "rank" ? classNameOrdered : className}
        onClick={() => {
          onClickSort("rank");
        }}
      >
        <p>Rank</p>
        <ArrowIcon
          className={
            orderBy === "rank"
              ? order === "asc"
                ? classOrderUp
                : classOrderDown
              : classNameNotOrdered
          }
          color="#FFF"
        />
      </span>
      <span
        className={orderBy === "name" ? classNameOrdered : className}
        onClick={() => {
          onClickSort("name");
        }}
      >
        <p>Name</p>
        <ArrowIcon
          className={
            orderBy === "name"
              ? order === "asc"
                ? classOrderUp
                : classOrderDown
              : classNameNotOrdered
          }
          color="#FFF"
        />
      </span>
      <span
        className={orderBy === "score" ? classNameOrdered : className}
        onClick={() => {
          onClickSort("score");
        }}
      >
        <p>Score</p>
        <ArrowIcon
          className={
            orderBy === "score"
              ? order === "asc"
                ? classOrderUp
                : classOrderDown
              : classNameNotOrdered
          }
          color="#FFF"
        />
      </span>
    </div>
  );
};
