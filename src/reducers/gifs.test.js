import { expect } from "code";
import gifReducer from "./gifs";
import types from "../actions/actions-list";

describe("Given gifReducer", () => {
  it("should return default state", () => {
    expect(gifReducer(undefined, {})).to.equal([]);
  });
  it("should return the gif object", () => {
    const mockAction = { type: types.GIFS_FETCH, gifs: [{}] };
    expect(gifReducer([], mockAction)).to.equal([{}]);
  });
});
