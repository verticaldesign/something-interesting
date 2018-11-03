import types from "../actions/actions-list";

function fetchGifs(state, action) {
  return [...state, ...action.gifs];
}

export default function(state = [], action) {
  const actionHandlers = {
    [types.GIFS_FETCH]: fetchGifs
  };
  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
}
