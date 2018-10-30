import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import Giphy from "./Giphy";

describe("Given Giphy", () => {
  it("should exist with className", () => {
    const component = shallow(<Giphy />);
    expect(component.is("ul.giphy-list")).to.be.true();
  });
});
