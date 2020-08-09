const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new AntdDayjsWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ];

  return config;
};
