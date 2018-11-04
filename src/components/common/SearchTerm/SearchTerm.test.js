import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import sinon from "sinon";
import SearchTerm from "./SearchTerm";

describe("Given <SearchTerm>", () => {
  let component;
  function renderComponent(props = {}) {
    return shallow(<SearchTerm {...props} />);
  }
  it("should exist", () => {
    component = renderComponent();
    expect(component.exists()).to.be.true();
  });
  it("should have a text input", () => {
    component = renderComponent();
    expect(component.find("input").length).to.equal(1);
  });
  it("should have a button with text Sort", () => {
    component = renderComponent();
    expect(component.find("button").exists()).to.be.true();
  });

  describe("When handleSubmit is called ", () => {
    let handleSubmitSpy = sinon.spy();
    it("should call handleSubmit", () => {
      component = renderComponent({ handleSubmit: handleSubmitSpy });
      component.find("button").simulate("click", { preventDefault: () => {} });
      sinon.assert.calledOnce(handleSubmitSpy);
    });
  });
});
