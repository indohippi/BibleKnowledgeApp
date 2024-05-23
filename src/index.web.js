import { AppRegistry } from 'react-native';
import App from './App';
import appJson from './App.json';
import 'react-refresh/runtime';  // Ensure this line points to src/react-refresh/runtime.js

AppRegistry.registerComponent(appJson.name, () => App);
AppRegistry.runApplication(appJson.name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});


