import { expect } from "code";

import Actions from "./actions-list";

describe("Action List", () => {
  it("should use a unique value for each action", () => {
    const sortedActionValues = Object.values(Actions).sort();

    sortedActionValues.reduce((previous, current) => {
      expect(current).not.equal(previous);

      return current;
    });
  });
});
