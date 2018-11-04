import * as types from "../actions/actions-list";

const defaultState = "";

function updateSearchTerm(state, action) {
  return action;
}

export default function(state = defaultState, action) {
  const actionsHandler = {
    [types.SEARCH_TERM_UPDATE]: updateSearchTerm
  };
  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
