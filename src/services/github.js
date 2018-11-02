export const fetchRepos = searchTerm => {
  return fetch(
    `${process.env.REACT_APP_GITHUB_URL}${searchTerm}/repos?access_token=${
      process.env.REACT_APP_GITHUB_API
    }`
  ).then(res => res.json());
};
