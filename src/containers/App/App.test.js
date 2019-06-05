import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Layout from "../../hoc/Layout/Layout";

describe("<App/>", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("contains <Layout/>", () => {
    const app = shallow(<App />);
    expect(app.find(Layout)).toHaveLength(1);
  });
});
