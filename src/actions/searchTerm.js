import types from "./actions-list";

export const updateSearchTerm = () => {
  return { type: types.SEARCH_TERM_UPDATE };
};
