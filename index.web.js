import './setupReactRefresh'; // Ensure this is at the top if react-refresh needs to be initialized first

import './setupReactRefresh'; // Ensure this is at the top if react-refresh needs to be initialized first

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
