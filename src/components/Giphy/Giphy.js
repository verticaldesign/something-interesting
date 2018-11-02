import React from "react";
import PropTypes from "prop-types";
import { fetchFromGiphy } from "../../actions/gifs";
import { connect } from "react-redux";

export class Giphy extends React.Component {
  componentDidMount() {
    this.props.fetchFromGiphy("dog");
  }
  render() {
    return (
      <section className="giphy">
        <ul className="giphy-list">{renderList(this.props.giphyItems)}</ul>
      </section>
    );
  }
}

function renderList(gifs) {
  return gifs.map(gif => <GiphyItem key={gif.id} />);
}

Giphy.defaultProps = {
  giphyItems: []
};

const GiphyItem = () => {
  return <li />;
};
export default connect(
  undefined,
  { fetchFromGiphy }
)(Giphy);
