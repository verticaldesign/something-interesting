import { expect } from "code";
import repoReducer from "./repos";
import types from "../actions/actions-list";

describe("Given repoReducer", () => {
  it("should return default state", () => {
    expect(repoReducer(undefined, {})).to.equal([]);
  });
  it("should return the repo object", () => {
    const mockAction = { type: types.REPOS_FETCH, repos: [{}] };
    expect(repoReducer([], mockAction)).to.equal([{}]);
  });
});
