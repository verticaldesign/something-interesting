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
  return gifs.map(gif => <GiphyItem key={gif.id} gif={gif} />);
}

const GiphyItem = ({ gif }) => {
  return (
    <li>
      <img src={gif.images.original.url} alt="gif of dog" />
    </li>
  );
};

Giphy.defaultProps = {
  giphyItems: []
};

function mapStateToProps(state) {
  return {
    giphyItems: state.gifs
  };
}
export default connect(
  mapStateToProps,
  { fetchFromGiphy }
)(Giphy);
