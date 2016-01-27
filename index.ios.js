/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  WebView,
} from 'react-native';

import NavigatorBar from './CommonJS/NavigationBar'

class AtHIT extends Component {
  render() {
    return  NavigatorBar.renderNavigator();
  }
}

AppRegistry.registerComponent('AtHIT', () => AtHIT);
