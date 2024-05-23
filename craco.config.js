const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'react-native$': 'react-native-web',
      'react-refresh/runtime': path.resolve(__dirname, 'src/react-refresh/runtime.js')
    }
  }
};


