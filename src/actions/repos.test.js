import { expect } from "code";
import configureStore from "redux-mock-store";
import sinon from "sinon";
import * as repoActions from "./repos";
import thunk from "redux-thunk";
import actions from "./actions-list";
import * as repoService from "../services/github";

describe("given repoActions", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  let fetchRepoStub;

  beforeEach(() => {
    fetchRepoStub = sinon.stub(repoService, "fetchRepos");
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should dispatch the action", () => {
    const store = mockStore([]);
    const mockVal = [{}];
    fetchRepoStub.resolves({ data: mockVal });
    return store.dispatch(repoActions.fetchFromGitHub()).then(() => {
      const action = store.getActions()[0];
      expect(action).to.equal({ type: actions.REPOS_FETCH, repos: mockVal });
    });
  });
});
