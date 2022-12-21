export interface User {
  name: string;
  points: number;
  rank: number;
  userData: {
    id: string;
    url: string;
    name: string;
    location: string;
    username: string;
    createdAt: string;
    description: string;
    profileImageUrl: string;
    publicMetrics: {
      tweetCount: number;
      listedCount: number;
      followersCount: number;
      followingCount: number;
    };
  };
}

export interface UserError {
  error: string;
}

export interface UserAPI {
  name: string;
  points: number;
  user_data: {
    id: string;
    url: string;
    name: string;
    location: string;
    username: string;
    created_at: string;
    description: string;
    profile_image_url: string;
    public_metrics: {
      tweet_count: number;
      listed_count: number;
      followers_count: number;
      following_count: number;
    };
  };
}

export const reformatLeaderboard = (data: UserAPI[]): User[] => {
  return data.map((user, index) => {
    return {
      rank: index + 1,
      name: user.name,
      points: user.points,
      userData: {
        profileImageUrl: user.user_data.profile_image_url,
        id: user.user_data.id,
        url: user.user_data.url,
        name: user.user_data.name,
        location: user.user_data.location,
        username: user.user_data.username,
        createdAt: user.user_data.created_at,
        description: user.user_data.description,
        publicMetrics: {
          tweetCount: user.user_data.public_metrics.tweet_count,
          listedCount: user.user_data.public_metrics.listed_count,
          followersCount: user.user_data.public_metrics.followers_count,
          followingCount: user.user_data.public_metrics.following_count,
        },
      },
    };
  });
};

export const reformatUser = (
  data: UserAPI | Partial<UserAPI> | string
): User | UserError => {
  if (typeof data === "string") return { error: data };
  if (data.user_data === null) return { error: "User is not found" };
  const user = data as UserAPI;
  return {
    rank: 0,
    name: user.name,
    points: user.points,
    userData: {
      profileImageUrl: user.user_data.profile_image_url,
      id: user.user_data.id,
      url: user.user_data.url,
      name: user.user_data.name,
      location: user.user_data.location,
      username: user.user_data.username,
      createdAt: user.user_data.created_at,
      description: user.user_data.description,
      publicMetrics: {
        tweetCount: user.user_data.public_metrics.tweet_count,
        listedCount: user.user_data.public_metrics.listed_count,
        followersCount: user.user_data.public_metrics.followers_count,
        followingCount: user.user_data.public_metrics.following_count,
      },
    },
  };
};
