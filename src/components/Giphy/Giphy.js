import React from "react";
// import PropTypes from "prop-types";
import { fetchFromGiphy } from "../../actions/gifs";
import { connect } from "react-redux";
import SearchTerm from "../common/SearchTerm/SearchTerm";
//import InfiniteScroll from "react-infinite-scroller";
import "./giphy-styles.scss";

export class Giphy extends React.Component {
  // componentDidMount() {
  //   this.props.fetchFromGiphy("dog");
  // }
  state = {
    offset: 33,
    searchTerm: ""
  };
  handleSubmit = term => {
    this.props.fetchFromGiphy(term, this.state.offset);
    this.setState({
      searchTerm: term,
      offset: this.state.offset + 25
    });
  };
  render() {
    return (
      <section className="giphy">
        <SearchTerm handleSubmit={this.handleSubmit} />

        {/* <InfiniteScroll
          pageStart={0}
          loadMore={
            () => {
              console.log("runs");
            }
            //   this.props.fetchFromGiphy(
            //   this.state.term,
            //   this.state.offset
            // )
          }
          hasMore={true || false}
          useWindow={false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        > */}
        <ul className="giphy-list">{renderList(this.props.giphyItems)}</ul>
        <div className="load-more">
          <button onClick={() => this.handleSubmit(this.state.searchTerm)}>
            Load More
          </button>
        </div>
        {/* </InfiniteScroll> */}
      </section>
    );
  }
}

function renderList(gifs) {
  if (gifs.length === 0) {
    return <span className="no-result">Nothing to see here</span>;
  } else {
    return gifs.map(gif => <GiphyItem key={gif.id} gif={gif} />);
  }
}

const GiphyItem = ({ gif }) => {
  return (
    <li>
      <img
        className="gif-image"
        src={gif.images.fixed_height.url}
        alt="gif of dog"
      />
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
