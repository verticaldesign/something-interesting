import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import NavHeader from "./NavHeader";

describe("Given NavHeader", () => {
  it("should exist with className", () => {
    const component = shallow(<NavHeader />);
    expect(component.is("nav.nav-header")).to.be.true();
  });
});
