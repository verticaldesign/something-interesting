import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchTerm extends Component {
  state = {
    searchTerm: this.props.defaultText || ""
  };
  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //this.props.handleSubmit(this.state.searchTerm);
    this.props.children(this.state.searchTerm);
  };

  render() {
    return (
      <form className="search-form">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}
SearchTerm.defaultProps = {
  defaultText: ""
};
SearchTerm.propTypes = {
  defaultText: PropTypes.string
};

export default SearchTerm;
