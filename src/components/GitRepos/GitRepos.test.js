import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import { GitRepos } from "./GitRepos";
import Chance from "chance";
import sinon from "sinon";

describe("Given GitRepos", () => {
  function requiredProps(overrides = {}) {
    return {
      fetchFromGithub: sinon.spy(),
      ...overrides
    };
  }
  function renderComponent(props = requiredProps()) {
    return shallow(<GitRepos {...props} />);
  }
  it("should exist with className", () => {
    const component = renderComponent();
    expect(component.is("section.git-repos")).to.be.true();
  });
  it("should exist with className", () => {
    const component = renderComponent();
    expect(component.find("ul.repo-list").length).to.be.equal(1);
  });
  // describe("When there are 'giphyItems' props ", () => {
  //   const chance = new Chance();
  //   const gifs = [{ id: chance.string() }, { id: chance.string() }];
  //   it("should render that many GifItems", () => {
  //     const component = renderComponent({
  //       fetchFromGithub: sinon.spy(),
  //       giphyItems: gifs
  //     });
  //     expect(component.find("GiphyItem").length).to.equal(gifs.length);
  //   });
  // });
});
