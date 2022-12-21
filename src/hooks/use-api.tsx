import { useQuery } from "react-query";
import { reformatLeaderboard, reformatUser } from "./reformats/leaderboard";
import { useRequest } from "./use-request";

const API_URL = process.env.REACT_APP_API_URL;

export const useTotal = () => {
  const request = useRequest();

  const getter = async () => {
    const response = await request({
      url: `${API_URL}/total`,
      method: "GET",
    });
    return response.data.total;
  };

  const {
    data,
    isLoading: isLdg,
    isFetching,
  } = useQuery(["total", {}], getter, {});

  let total = data ? data : 0;

  return { data: total, isLoading: isFetching || isLdg };
};

export const useLeaderboard = () => {
  const request = useRequest();

  const getter = async () => {
    const response = await request({
      url: `${API_URL}/leaderboard`,
      method: "GET",
    });
    return reformatLeaderboard(response.data);
  };

  const {
    data,
    isLoading: isLdg,
    isFetching,
  } = useQuery(["leaderboard", {}], getter, {});

  let total = data ? data : [];

  return { data: total, isLoading: isFetching || isLdg };
};

export const useUser = (name: string) => {
  const request = useRequest();

  const getter = async ({ queryKey }: { queryKey: string[] }) => {
    const [_, name] = queryKey;
    const response = await request({
      url: `${API_URL}/leaderboard/${name}`,
      method: "GET",
    });
    return reformatUser(response.data);
  };

  const {
    data,
    isLoading: isLdg,
    isFetching,
  } = useQuery(["user", name], getter, {});

  let total = data ? data : {};

  return { data: total, isLoading: isFetching || isLdg };
};
