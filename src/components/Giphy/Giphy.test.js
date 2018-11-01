import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import Giphy from "./Giphy";
import Chance from "chance";

describe("Given Giphy", () => {
  function requiredProps(overrides = {}) {
    return {
      ...overrides
    };
  }
  function renderComponent(props = requiredProps()) {
    return shallow(<Giphy {...props} />);
  }
  it("should exist with className", () => {
    const component = renderComponent();
    expect(component.is("section.giphy")).to.be.true();
  });
  it("should exist with className", () => {
    const component = renderComponent();
    expect(component.find("ul.giphy-list").length).to.be.equal(1);
  });
  describe("When there are 'giphyItems' props ", () => {
    const chance = new Chance();
    const gifs = [{ id: chance.string() }, { id: chance.string() }];
    it("should render that many GifItems", () => {
      const component = renderComponent({ giphyItems: gifs });
      expect(component.find("GiphyItem").length).to.equal(gifs.length);
    });
  });
});
