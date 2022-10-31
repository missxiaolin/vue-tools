const { defineConfig } = require("@vue/cli-service");
// 头部引入
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: (config) => {
    const plugins = [];
    plugins.push(new NodePolyfillPlugin());
  },
});
