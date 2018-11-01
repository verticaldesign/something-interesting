import sinon from "sinon";
import { expect } from "code";
import { fetchGifs } from "./giphy";
import Chance from "chance";

describe("Given the fetchGif service", () => {
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

    fetchGifs(searchTerm).then(() => {
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(
        fetchStub,
        `${process.env.REACT_APP_GIPHY_URL}?api_key=${
          process.env.REACT_APP_GIPHY_API_KEY
        }&q=${searchTerm}`
      );
    });
  });
});
