export const fetchGifs = searchTerm => {
  return fetch(
    `${process.env.REACT_APP_GIPHY_URL}?api_key=${
      process.env.REACT_APP_GIPHY_API_KEY
    }&q=${searchTerm}`
  ).then(res => res.json());
};
