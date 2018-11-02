import { fetchRepos } from "../services/github";
import types from "./actions-list";

export const fetchFromGitHub = searchTerm => {
  return async dispatch => {
    const reposArr = await fetchRepos(searchTerm);
    return dispatch({ type: types.REPOS_FETCH, repos: reposArr });
  };
};
