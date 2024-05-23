const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'react-native$': 'react-native-web',
    },
    configure: (webpackConfig, { env, paths }) => {
      // Override the default Webpack configuration here
      // Move react-refresh to a symlink inside src directory
      webpackConfig.resolve.alias['react-refresh/runtime'] = path.resolve(__dirname, 'src/react-refresh/runtime.js');
      return webpackConfig;
    },
  },
};

