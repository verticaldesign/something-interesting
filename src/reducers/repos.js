import types from "../actions/actions-list";

function fetchRepos(state, action) {
  return [...action.repos];
}

export default function(state = [], action) {
  const actionHandlers = {
    [types.REPOS_FETCH]: fetchRepos
  };
  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
}
