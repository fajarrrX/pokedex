import React from "react";
import renderer from "react-test-renderer";
import StatusBarComponent from "./StatusBarComponent";

it("StatusBarComponent screen renders correctly", () => {
  renderer.create(<StatusBarComponent />);
});

test("StatusBarComponent snapShot", () => {
  const snap = renderer.create(<StatusBarComponent />).toJSON();
  expect(snap).toMatchSnapshot();
});
