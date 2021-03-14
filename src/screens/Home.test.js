import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";

it("Home screen renders correctly", () => {
  renderer.create(<Home />);
});

test("Home snapShot", () => {
  const snap = renderer.create(<Home />).toJSON();
  expect(snap).toMatchSnapshot();
});
