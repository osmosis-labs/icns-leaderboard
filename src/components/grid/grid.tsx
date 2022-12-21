import React from "react";
import { RandomShape } from "../shapes/random-shape";
import { getArray } from "../../helper/array";
import { random } from "../../helper/random";
import useBreakpoint from "../../hooks/use-breakpoint";

interface GridProps {
  className?: string;
  opt: Opt;
}

interface sizeOpt {
  rows: number;
  columns: number;
  nbItem: number;
}

interface Opt {
  xl: sizeOpt | null;
  lg: sizeOpt | null;
  md: sizeOpt | null;
  sm: sizeOpt | null;
  xs: sizeOpt | null;
}

export const Grid = ({ opt }: GridProps) => {
  const br = useBreakpoint() as keyof Opt;
  let columns = 0;
  let rows = 0;
  let nbItem = 0;

  if (br && opt[br]) {
    columns = opt[br]?.columns ?? 0;
    rows = opt[br]?.rows ?? 0;
    nbItem = opt[br]?.nbItem ?? 0;
  }

  const items: (undefined | number)[] = getArray(columns * rows);
  for (let i = 0; i < nbItem; i++) {
    items[random(0, items.length - 1)] = 1;
  }

  return (
    <div
      className="overflow-hidden grid"
      style={{
        marginTop: `${rows * 0.00067}em`,
        height: `${rows * 5}em`,
        width: `${columns * 5}em`,
        gridTemplateColumns: ` repeat(${columns} , 5em)`,
        gridTemplateRows: ` repeat(${rows} , 5em)`,
      }}
    >
      {items.map((item, index) => {
        if (item)
          return (
            <RandomShape
              key={index}
              className="h-[5em] w-[5em] shadow-container"
            />
          );
        else
          return (
            <span key={index} className="h-[5em] w-[5em] shadow-containe" />
          );
      })}
    </div>
  );
};
