import React, { createContext, useContext, useEffect, useState } from "react";
const dataMock: User[] = [
  { name: "Josette", score: 900, rank: 1 },
  { name: "Bob", score: 800, rank: 2 },
  { name: "Charlie", score: 700, rank: 3 },
  { name: "Dave", score: 600, rank: 4 },
  { name: "Eve", score: 500, rank: 5 },
  { name: "Frank", score: 400, rank: 6 },
  { name: "Gary", score: 300, rank: 7 },
  { name: "Hannah", score: 200, rank: 8 },
  { name: "Igor", score: 100, rank: 9 },
  { name: "Julia", score: 95, rank: 10 },
  { name: "Karen", score: 85, rank: 11 },
  { name: "Larry", score: 75, rank: 12 },
  { name: "Mike", score: 65, rank: 13 },
  { name: "Nina", score: 55, rank: 14 },
  { name: "Olivia", score: 45, rank: 15 },
  { name: "Alice", score: 35, rank: 16 },
  { name: "Quinn", score: 25, rank: 17 },
  { name: "Rachel", score: 15, rank: 18 },
  { name: "Sam", score: 15, rank: 19 },
  { name: "Tina", score: 14, rank: 20 },
  { name: "Ursula", score: 13, rank: 21 },
  { name: "Victor", score: 12, rank: 22 },
  { name: "Wendy", score: 11, rank: 23 },
  { name: "Xavier", score: 11, rank: 24 },
  { name: "Yvette", score: 10, rank: 25 },
  { name: "Zach", score: 5, rank: 26 },
];

export interface User {
  name: string;
  score: number;
  rank: number;
}

export interface DataContext {
  data: User[];
  isLoading: boolean;
}

export const DataContext = createContext<DataContext>({
  data: [],
  isLoading: false,
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({
  children,
}: {
  children: React.ReactElement | string;
}) => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      window.setTimeout(() => {
        setData(() => dataMock);
        setIsLoading(false);
        setIsFetching(false);
      }, 1000);
    };
    if (data.length === 0 && !isFetching) {
      setIsFetching(() => true);
      fetchData();
    }
  }, [isFetching]);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};
