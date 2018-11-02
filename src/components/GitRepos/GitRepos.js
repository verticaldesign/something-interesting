import React from "react";
//import PropTypes from "prop-types";
import { fetchFromGitHub } from "../../actions/repos";
import { connect } from "react-redux";

export class GitRepos extends React.Component {
  componentDidMount() {
    this.props.fetchFromGitHub("verticalDesign");
  }
  render() {
    return (
      <section className="git-repos">
        <ul className="repo-list">{renderList(this.props.repoItems)}</ul>
      </section>
    );
  }
}

function renderList(repos) {
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
}

const RepoItem = ({ repo }) => {
  return <li>{repo.name}</li>;
};

GitRepos.defaultProps = {
  repoItems: []
};
function mapStateToProps(state) {
  return {
    repoItems: state.repos
  };
}

export default connect(
  mapStateToProps,
  { fetchFromGitHub }
)(GitRepos);
