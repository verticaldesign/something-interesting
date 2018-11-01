import { expect } from "code";
import configureStore from "redux-mock-store";
import sinon from "sinon";
import * as gifActions from "./gifs";
import thunk from "redux-thunk";
import actions from "./actions-list";
import * as gifService from "../services/giphy";

describe("given gifActions", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  let fetchGifStub;

  beforeEach(() => {
    fetchGifStub = sinon.stub(gifService, "fetchGifs");
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should dispatch the action", () => {
    const store = mockStore([]);
    const mockVal = [];
    fetchGifStub.resolves({ data: mockVal });
    return store.dispatch(gifActions.fetchFromGiphy()).then(() => {
      const action = store.getActions()[0];
      expect(action).to.equal({ type: actions.GIFS_FETCH, gifs: mockVal });
    });
  });
});
