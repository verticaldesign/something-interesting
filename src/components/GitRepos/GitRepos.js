import React from "react";
//import PropTypes from "prop-types";
import { fetchFromGitHub } from "../../actions/repos";
import { connect } from "react-redux";

export class GitRepos extends React.Component {
  componentDidMount() {
    //this.props.fetchFromGitHub("dog");
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
  return repos.map(repo => <RepoItem key={repo.id} />);
}

GitRepos.defaultProps = {
  repoItems: []
};

const RepoItem = () => {
  return <li />;
};
export default connect(
  undefined,
  { fetchFromGitHub }
)(GitRepos);
