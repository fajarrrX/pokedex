import React from "react";
import renderer from "react-test-renderer";
import OnBoardingScreen from "./OnBoardingScreen";

it("OnBoardingScreen screen renders correctly", () => {
  renderer.create(<OnBoardingScreen />);
});

test("OnBoardingScreen snapShot", () => {
  const snap = renderer.create(<OnBoardingScreen />).toJSON();
  expect(snap).toMatchSnapshot();
});
