import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compareName, getArray } from "../../helper/array";
import { scrollDown } from "../../helper/scroll";
import { useData, User } from "../../providers/data.provider";
import { Button } from "../button/button";
import { Header, Order, OrderBy } from "./header";
import { Row, RowSkeleton } from "./row";

export const Leaderboard = () => {
  const { data, isLoading } = useData();
  const [orderBy, setOrderBy] = useState<OrderBy>("rank");
  const [order, setOrder] = useState<Order>("asc");
  const [currentData, setCurrentData] = useState<User[]>([]);
  const [nbRows, setNbRows] = useState<number>(10);
  const navigate = useNavigate();

  const onSort = (orderBy: OrderBy, order: Order) => {
    setOrderBy(orderBy);
    setOrder(order);
  };

  useEffect(() => {
    if (!data || data.length === 0) return;
    const dataTMP = [...data].sort();
    if (orderBy === "name") {
      // need to sort
      const cmp = (a: User, b: User) =>
        order === "asc" ? compareName(a, b) : -compareName(a, b);
      dataTMP.sort(cmp);
      const dataSorted = dataTMP.slice(0, nbRows);
      setCurrentData(dataSorted);
    } else {
      //Already sorted by score or rank asc
      if (order === "asc") {
        //juste take xxx first elements
        const dataSorted = dataTMP.slice(0, nbRows);
        setCurrentData(dataSorted);
      } else {
        //juste take xxx last elements and reorder it
        const dataSorted = dataTMP.slice(-nbRows);
        setCurrentData(dataSorted.reverse());
      }
    }
  }, [data, orderBy, order, nbRows]);

  const onClickMore = () => {
    let nextNbRow = 0;
    if (nbRows < 11) nextNbRow = 20;
    else if (nbRows < 26) nextNbRow = 50;
    else nextNbRow = nbRows + 100;

    if (nextNbRow >= data.length) nextNbRow = data.length - 1;
    setNbRows(() => nextNbRow);
    scrollDown("html");
  };

  const onClickRow = (name: string) => {
    navigate(`/${name}`);
  };

  let classNameLeader = `mb-[5em] flex flex-col justify-center items-center`;
  if (nbRows % 2 === 1) classNameLeader = `${classNameLeader} mt-[10em] `;
  else classNameLeader = `${classNameLeader} mt-[5em] `;

  return (
    <div className={classNameLeader}>
      <Header onSort={onSort} order={order} orderBy={orderBy} />
      {isLoading &&
        getArray(10).map((_, index) => {
          return (
            <RowSkeleton
              key={index}
              type={
                index === 0
                  ? "first"
                  : index === 1
                  ? "second"
                  : index === 2
                  ? "third"
                  : "basic"
              }
            />
          );
        })}
      {currentData.map(({ name, rank, score }: User, index) => {
        return (
          <Row
            key={`${name} - ${index}`}
            name={name}
            score={score}
            type={
              rank === 1
                ? "first"
                : rank === 2
                ? "second"
                : rank === 3
                ? "third"
                : "basic"
            }
            rank={rank}
            onClick={onClickRow}
          />
        );
      })}
      <Button
        onClick={onClickMore}
        className="mt-[5em]"
        disabled={nbRows === data.length - 1 || isLoading}
      >
        Load more
      </Button>
    </div>
  );
};
