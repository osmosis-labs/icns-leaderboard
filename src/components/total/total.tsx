import React from "react";
import { useTotal } from "../../hooks/use-api";
import { Skeleton } from "../skeleton/skeleton";

export const Total = () => {
  const { data, isLoading } = useTotal();

  return (
    <div className="bg-black h-[5em] w-[35em] xs:w-[25em] mt-[5em] xs:mt-[0em] flex justify-center items-center shadow-container">
      {isLoading && <Skeleton height={"2em"} width={"20em"} />}
      {!isLoading && (
        <p className="text-[1.3em] text-text-main">
          {data} ICNS already claimed{" "}
        </p>
      )}
    </div>
  );
};
