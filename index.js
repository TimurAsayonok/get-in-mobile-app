import { AppRegistry } from 'react-native';
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import Root from './src/root.js';

AppRegistry.registerComponent('GetInMobileApp', () => Root);
