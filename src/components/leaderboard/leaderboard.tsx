import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compareName, getArray } from "../../helper/array";
import { half, randomArray } from "../../helper/random";
import { scrollDown } from "../../helper/scroll";
import { COLORS } from "../../helper/settings";
import { Button } from "../button/button";
import { Star } from "../star/star";
import { Header, Order, OrderBy } from "./header";
import { Row, RowSkeleton } from "./row";
import userImg from "../../assets/images/user.png";
import { TitleNotFound } from "./title-not-found";
import { TitleDataNotFound } from "./title-data-not-found";
import { useLeaderboard } from "../../hooks/use-api";
import { User } from "../../hooks/reformats/leaderboard";

export const Leaderboard = () => {
  const { data, isLoading } = useLeaderboard();
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
    } else if (orderBy === "twitter") {
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

      {currentData.map((user, index) => {
        return (
          <Row
            key={`${user.name} - ${index}`}
            name={user.name}
            score={user.points}
            type={
              user.rank === 1
                ? "first"
                : user.rank === 2
                ? "second"
                : user.rank === 3
                ? "third"
                : "basic"
            }
            rank={user.rank}
            onClick={onClickRow}
            twitterName={user.userData.name}
            twitterUsername={user.userData.username}
            twitterImage={user.userData.profileImageUrl}
          />
        );
      })}

      {!isLoading && currentData.length === 0 && (
        <div className="h-[30em] xs:h-[20em] w-[35em] xs:w-[25em] flex flex-col items-center justify-center bg-black shadow-container relative">
          {half() && <Star color={randomArray(COLORS)} size={1} left={-0.5} />}
          {half() && <Star color={randomArray(COLORS)} size={1} right={-0.5} />}
          {half() && <Star color={randomArray(COLORS)} size={1} top={-0.5} />}
          {half() && (
            <Star
              color={randomArray(COLORS)}
              size={1}
              bottom={-0.5}
              left={-0.5}
            />
          )}
          {half() && (
            <Star color={randomArray(COLORS)} size={1} top={-0.5} left={-0.5} />
          )}
          {half() && (
            <Star
              color={randomArray(COLORS)}
              size={1}
              bottom={-0.5}
              right={-0.5}
            />
          )}
          {half() && (
            <Star
              color={randomArray(COLORS)}
              size={1}
              top={-0.5}
              right={-0.5}
            />
          )}
          <TitleDataNotFound />
          <TitleNotFound />
          <div className="h-full mt-[0em] w-full "></div>
          <img
            className="max-h-[10em] mx-auto mb-[5em] xs:mb-[1em]"
            src={userImg}
          />
        </div>
      )}
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
