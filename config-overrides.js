const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new AntdDayjsWebpackPlugin(),
  ];

  return config;
};
