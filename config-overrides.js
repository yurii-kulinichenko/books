const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@shared': path.resolve(__dirname, 'src/shared'),
      src: 'src',
    },
  };
  return config;
};
