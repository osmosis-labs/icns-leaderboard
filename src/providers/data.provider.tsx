import React, { createContext, useContext, useEffect, useState } from "react";
const dataMock: User[] = [
  {
    name: "Charlene",
    score: 99,
  },
  {
    name: "Rudolfo",
    score: 39,
  },
  {
    name: "Chickie",
    score: 57,
  },
  {
    name: "Murvyn",
    score: 32,
  },
  {
    name: "Delly",
    score: 37,
  },
  {
    name: "Claude",
    score: 47,
  },
  {
    name: "Georgianna",
    score: 10,
  },
  {
    name: "Rooney",
    score: 71,
  },
  {
    name: "Jacquette",
    score: 70,
  },
  {
    name: "Dalila",
    score: 82,
  },
  {
    name: "Ainsley",
    score: 72,
  },
  {
    name: "Thomasina",
    score: 44,
  },
  {
    name: "Griz",
    score: 92,
  },
  {
    name: "Maximilien",
    score: 8,
  },
  {
    name: "Adelind",
    score: 37,
  },
  {
    name: "Goober",
    score: 69,
  },
  {
    name: "Halsy",
    score: 99,
  },
  {
    name: "Cymbre",
    score: 18,
  },
  {
    name: "Willetta",
    score: 18,
  },
  {
    name: "Gallagher",
    score: 20,
  },
  {
    name: "Kristyn",
    score: 23,
  },
  {
    name: "Augustina",
    score: 28,
  },
  {
    name: "Poppy",
    score: 62,
  },
  {
    name: "Connor",
    score: 31,
  },
  {
    name: "Maude",
    score: 59,
  },
  {
    name: "Helen-elizabeth",
    score: 45,
  },
  {
    name: "Betsey",
    score: 89,
  },
  {
    name: "Jerrie",
    score: 2,
  },
  {
    name: "Lawton",
    score: 22,
  },
  {
    name: "Emmi",
    score: 89,
  },
  {
    name: "Fernanda",
    score: 42,
  },
  {
    name: "Kory",
    score: 90,
  },
  {
    name: "Aurlie",
    score: 64,
  },
  {
    name: "Mahmud",
    score: 64,
  },
  {
    name: "Isis",
    score: 13,
  },
  {
    name: "Dell",
    score: 27,
  },
  {
    name: "Tessi",
    score: 29,
  },
  {
    name: "Julianna",
    score: 17,
  },
  {
    name: "Aymer",
    score: 57,
  },
  {
    name: "Gamaliel",
    score: 14,
  },
  {
    name: "Erinn",
    score: 53,
  },
  {
    name: "Matti",
    score: 88,
  },
  {
    name: "Sarajane",
    score: 4,
  },
  {
    name: "Jayson",
    score: 57,
  },
  {
    name: "Marylou",
    score: 32,
  },
  {
    name: "Arny",
    score: 47,
  },
  {
    name: "Cyb",
    score: 24,
  },
  {
    name: "Agnesse",
    score: 46,
  },
  {
    name: "Pincus",
    score: 71,
  },
  {
    name: "Ashien",
    score: 68,
  },
  {
    name: "Tobiah",
    score: 85,
  },
  {
    name: "Linnell",
    score: 91,
  },
  {
    name: "Elset",
    score: 29,
  },
  {
    name: "Rhonda",
    score: 55,
  },
  {
    name: "Eldin",
    score: 6,
  },
  {
    name: "Neal",
    score: 64,
  },
  {
    name: "Wilhelmine",
    score: 70,
  },
  {
    name: "Beryl",
    score: 95,
  },
  {
    name: "Allix",
    score: 25,
  },
  {
    name: "Cathe",
    score: 83,
  },
  {
    name: "Charla",
    score: 64,
  },
  {
    name: "Ignacio",
    score: 20,
  },
  {
    name: "Lin",
    score: 2,
  },
  {
    name: "Violet",
    score: 22,
  },
  {
    name: "Franciskus",
    score: 98,
  },
  {
    name: "Babbie",
    score: 83,
  },
  {
    name: "Yalonda",
    score: 19,
  },
  {
    name: "Allissa",
    score: 82,
  },
  {
    name: "Maribel",
    score: 100,
  },
  {
    name: "Gwendolen",
    score: 23,
  },
  {
    name: "Yorgo",
    score: 55,
  },
  {
    name: "Juan",
    score: 16,
  },
  {
    name: "Thalia",
    score: 9,
  },
  {
    name: "Quinn",
    score: 73,
  },
  {
    name: "Robbi",
    score: 88,
  },
  {
    name: "Anthiathia",
    score: 90,
  },
  {
    name: "Thebault",
    score: 81,
  },
  {
    name: "Arlie",
    score: 95,
  },
  {
    name: "Vasilis",
    score: 55,
  },
  {
    name: "Chelsea",
    score: 61,
  },
  {
    name: "Romola",
    score: 71,
  },
  {
    name: "Viviyan",
    score: 57,
  },
  {
    name: "Micheil",
    score: 83,
  },
  {
    name: "Warde",
    score: 14,
  },
  {
    name: "Siffre",
    score: 56,
  },
  {
    name: "Carilyn",
    score: 19,
  },
  {
    name: "Janel",
    score: 64,
  },
  {
    name: "Ravi",
    score: 98,
  },
  {
    name: "Blondelle",
    score: 96,
  },
  {
    name: "Harp",
    score: 62,
  },
  {
    name: "Malinda",
    score: 7,
  },
  {
    name: "Maryl",
    score: 15,
  },
  {
    name: "Reba",
    score: 90,
  },
  {
    name: "Dorelia",
    score: 91,
  },
  {
    name: "Abbie",
    score: 64,
  },
  {
    name: "Aguistin",
    score: 85,
  },
  {
    name: "Lily",
    score: 12,
  },
  {
    name: "Kennan",
    score: 25,
  },
  {
    name: "Micheil",
    score: 77,
  },
  {
    name: "Kassey",
    score: 91,
  },
];

export interface User {
  name: string;
  score: number;
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
      console.log("data.provider.tsx -> 431: use");
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
