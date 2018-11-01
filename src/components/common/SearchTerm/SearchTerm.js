import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchTerm extends Component {
  state = {
    searchTerm: ""
  };
  handleChange = e => {
    console.log(this.state);
    this.setState({ searchTerm: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.inputNumber}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}
SearchTerm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SearchTerm;
