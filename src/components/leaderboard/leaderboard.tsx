import React, { useEffect, useState } from "react";
import { compareName } from "../../helper/sort";
import { useData, User } from "../../providers/data.provider";
import { Header, Order, OrderBy } from "./header";
import { Row } from "./row";

export const Leaderboard = () => {
  const { data, isLoading } = useData();
  const [orderBy, setOrderBy] = useState<OrderBy>("rank");
  const [order, setOrder] = useState<Order>("asc");
  const [currentData, setCurrentData] = useState<User[]>([]);
  const [nbRows, setNbRows] = useState<number>(10);

  const onSort = (orderBy: OrderBy, order: Order) => {
    setOrderBy(orderBy);
    setOrder(order);
  };

  console.log(
    "%cleaderboard.tsx -> 19 BLUE: setNbRows, isLoading",
    "background: #2196f3; color:#FFFFFF",
    setNbRows,
    isLoading,
    data,
    currentData
  );

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
  }, [data, orderBy, order]);

  return (
    <div className="mt-[5em] mb-[5em] flex flex-col justify-center items-center">
      <Header onSort={onSort} order={order} orderBy={orderBy} />
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
          />
        );
      })}
    </div>
  );
};
