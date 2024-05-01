// From https://stackoverflow.com/questions/71471942/tdd-with-static-image-results-in-an-image-not-found-error-gatsby
const React = require("react")
const plugin = jest.requireActual("gatsby-plugin-image")

const mockImage = ({ imgClassName, aspectRatio, ...props }) =>
  React.createElement("img", {
    ...props,
    className: imgClassName,
    "data-main-image": true,
  })

module.exports = {
  ...plugin,
  GatsbyImage: jest.fn().mockImplementation(mockImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
}
