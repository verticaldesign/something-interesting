export const fetchGifs = (searchTerm, offset) => {
  return fetch(
    `${process.env.REACT_APP_GIPHY_URL}?api_key=${
      process.env.REACT_APP_GIPHY_API_KEY
    }&q=${searchTerm}&offset=${offset}`
  ).then(res => res.json());
};
