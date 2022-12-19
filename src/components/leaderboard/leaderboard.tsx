import React from "react";
import { useData } from "../../providers/data.provider";
import { Header } from "./header";
import { Row } from "./row";

export const Leaderboard = () => {
  const { data, isLoading } = useData();

  console.log("leaderboard.tsx -> 7: data, isLoading", data, isLoading);
  return (
    <div className="mt-[5em] mb-[5em] flex flex-col justify-center items-center">
      <Header />
      <Row name={"John"} score={350} type="first" rank={1} />
      <Row name={"Doe"} score={300} type="second" rank={2} />
      <Row name={"Bernard"} score={200} type="third" rank={3} />
      <Row name={"Paul"} score={100} rank={4} />
      <Row name={"Ratatam"} score={100} rank={5} />
      <Row name={"Ratatam"} score={100} rank={6} />
      <Row name={"Ratatam"} score={100} rank={7} />
      <Row name={"Ratatam"} score={100} rank={8} />
      <Row name={"Ratatam"} score={100} rank={9} />
      <Row name={"Ratatam"} score={100} rank={10} />
    </div>
  );
};
