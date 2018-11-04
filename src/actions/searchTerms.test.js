import { expect } from "code";
import Actions from "./actions-list";
import * as searchTermActions from "./searchTerm";

describe("Given searchTermActions", () => {
  it("should return search action", () => {
    expect(searchTermActions.updateSearchTerm()).to.equal({
      type: Actions.SEARCH_TERM_UPDATE
    });
  });
});
