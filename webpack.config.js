const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "utility",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    externals: ["rxjs"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
