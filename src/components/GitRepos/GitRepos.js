import React from "react";
//import PropTypes from "prop-types";
import { fetchFromGitHub } from "../../actions/repos";
import { connect } from "react-redux";
import SearchTerm from "../common/SearchTerm/SearchTerm";
import "./git-repos.scss";

export class GitRepos extends React.Component {
  handleSubmit = term => {
    this.props.fetchFromGitHub(term);
  };
  render() {
    return (
      <section className="git-repos">
        <SearchTerm
          handleSubmit={this.handleSubmit}
          defaultText="verticalDesign"
        />
        <ul className="repo-list">{renderList(this.props.repoItems)}</ul>
      </section>
    );
  }
}

function renderList(repos) {
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
}

const RepoItem = ({ repo }) => {
  return (
    <li className="git-repo">
      <h3>{repo.name}</h3>
      <div>
        {isAFork(repo)}
        <a href={repo.url} className="url-link">
          {repo.url}
        </a>
      </div>{" "}
    </li>
  );
};
function isAFork(repo) {
  return repo.fork ? (
    <span role="img" aria-label="diamond">
      💠
    </span>
  ) : (
    ""
  );
}
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
