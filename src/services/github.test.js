import sinon from "sinon";
import { fetchRepos } from "./github";
import Chance from "chance";

describe("Given the fetchRepos service", () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should call fetch with correct endpoint", () => {
    fetchStub.resolves({ json: sinon.spy() });
    const chance = new Chance();
    const searchTerm = chance.string;

    fetchRepos(searchTerm).then(() => {
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(
        fetchStub,
        `${process.env.REACT_APP_GITHUB_URL}${searchTerm}/repos?access_token=${
          process.env.REACT_APP_GITHUB_API
        }`
      );
    });
  });
});
