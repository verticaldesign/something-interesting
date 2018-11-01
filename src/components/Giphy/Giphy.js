import React from "react";
import PropTypes from "prop-types";

const Giphy = props => {
  return (
    <section className="giphy">
      <ul className="giphy-list">{renderList(props.giphyItems)}</ul>
    </section>
  );
};

function renderList(gifs) {
  return gifs.map(gif => <GiphyItem key={gif.id} />);
}
Giphy.defaultProps = {
  giphyItems: []
};

export default Giphy;

const GiphyItem = () => {
  return <li />;
};
