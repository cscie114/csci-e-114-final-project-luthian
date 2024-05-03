// From https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/#2-creating-a-configuration-file-for-jest
const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").default.createTransformer(babelOptions)