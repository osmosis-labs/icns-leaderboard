import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { findUser } from "../../helper/array";
import { half, randomArray } from "../../helper/random";
import { COLORS } from "../../helper/settings";
import { useData } from "../../providers/data.provider";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { Star } from "../star/star";
import { Title } from "./title";

export const Search = () => {
  const { data, isLoading } = useData();
  const navigate = useNavigate();

  const [value, setValue] = useState<string>("");

  const onChange = ({ value }: { name?: string; value: string }) => {
    setValue(value);
  };

  const onValideSearch = () => {
    if (value.length > 2) {
      const dataFinded = data.find((user) => findUser(value, user));
      setValue("");
      console.log("search.tsx -> 19: valuie", dataFinded);
      if (dataFinded) {
        toast.info(
          `${dataFinded.name} has been found! You are redirecting to his page.`
        );
        navigate(`/${dataFinded.name}`);
      } else {
        toast.info("Sorry, we did not find you.");
      }
    }
  };
  let classSearch = `mb-[5em] flex flex-col justify-center items-center`;

  return (
    <div className={classSearch}>
      <div className="h-[10em] xs:h-[10em] w-[35em] xs:w-[25em] flex flex-col items-center justify-center bg-black shadow-container relative">
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
          <Star color={randomArray(COLORS)} size={1} top={-0.5} right={-0.5} />
        )}
        <Title />
        <div className="h-full mt-[0em] ">
          <p className="text-text-high p-2 w-full">
            Look for yourself and see your rank.
          </p>
        </div>
      </div>

      <Input
        className="mt-[0em]"
        onChange={onChange}
        value={value}
        name="name"
        placeholder="Your twitter"
      />
      <Button
        onClick={onValideSearch}
        className="mt-[0em] mb-[5em]"
        disabled={isLoading || value.length <= 2}
      >
        Search
      </Button>
    </div>
  );
};
