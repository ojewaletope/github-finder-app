import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubRequest = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// search users

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const { data } = await githubRequest.get(`/search/users?${params}`);
  return data.items;
};

// get user details

export const getUserDetails = async (login: string | undefined) => {
  const params = new URLSearchParams({ sort: "created", per_page: "10" });
  const [user, repos] = await Promise.all([
    githubRequest.get(`/users/${login}`),
    githubRequest.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
