import * as types from "../actions/actions-list";

const defaultState = "";

// function addCount(state, action) {
//   return state + 1;
// }
// function reduceCount(state, action) {
//   return state - 1;
// }
// function incrementWithAmount(state, action) {
//   return state + action.amt;
// }

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
