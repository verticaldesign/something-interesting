import React from "react";
// import PropTypes from "prop-types";
import { fetchFromGiphy } from "../../actions/gifs";
import { connect } from "react-redux";
import SearchTerm from '../common/SearchTerm/SearchTerm'

export class Giphy extends React.Component {
  // componentDidMount() {
  //   this.props.fetchFromGiphy("dog");
  // }
  handleSubmit=(term)=>{
    this.props.fetchFromGiphy(term)
  }
  render() {
    return (
      <section className="giphy">
      <SearchTerm handleSubmit={this.handleSubmit}></SearchTerm>
        <ul className="giphy-list">{renderList(this.props.giphyItems)}</ul>
      </section>
    );
  }
}

function renderList(gifs) {
  if(gifs.length=== 0){
    return <span className='no-result'>Nothing to see here</span>
  }else{
  return gifs.map(gif => <GiphyItem key={gif.id} gif={gif} />);
  }
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
