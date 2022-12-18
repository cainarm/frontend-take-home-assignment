const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = ["node_modules", path.resolve(__dirname, "../src")];
    config.resolve.alias = {
      ...config.resolve.alias,
      '': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};
