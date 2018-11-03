import { fetchGifs } from "../services/giphy";
import types from "./actions-list";

export const fetchFromGiphy = (searchTerm, offset) => {
  return async dispatch => {
    const gifsObjs = await fetchGifs(searchTerm, offset);
    return dispatch({ type: types.GIFS_FETCH, gifs: gifsObjs.data });
  };
};
