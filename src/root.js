import React, { Component } from 'react';// eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import registerScreens from './containers/index.js';
import configureStore from './store/configureStore';

import { APP_TITLE } from './constants/commons';
import { scale, moderateScale } from './utils/scale';
import { SCREEN_BACKGROUNDCOLOR } from './constants/UIStyles';


export const store = configureStore();

registerScreens(store, Provider);

const goToAuthScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'LoginScreen',
      navigatorStyle: {
        navBarHidden: true,
        screenBackgroundColor: SCREEN_BACKGROUNDCOLOR,
        statusBarColor: SCREEN_BACKGROUNDCOLOR
      },
    },
  });
}

// export const enterToAppScreenTabs = () => {
//   Navigation.startTabBasedApp({
//     tabs: [
//       {
//         label: 'Zadanie',
//         screen: 'TasksScreen', // this is a registered name for a screen
//         icon: require('./images/TabZadania.png'),
//         selectedIcon: require('./images/TabZadaniaSelected.png'), // iOS only
//         title: APP_TITLE
//       },
//       {
//         label: 'Jeszcze',
//         screen: 'MoreScreen',
//         icon: require('./images/TabJeszcze.png'),
//         selectedIcon: require('./images/TabJeszczeSelected.png'), // iOS only
//         title: APP_TITLE
//       }
//     ],
//     tabsStyle: {
//       tabBarSelectedButtonColor: '#1A1919', // change the color of the selected tab icon and text (only selected)
//       tabBarTranslucent: true,
//       tabBarBackgroundColor: '#FAFAFA'
//     },
//     appStyle: {
//       hideBackButtonTitle: true, // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
//       forceTitlesDisplay: true,
//       tabBarSelectedButtonColor: '#1A1919',
//       orientation: 'portrait',
//       tabBarBackgroundColor: '#FAFAFA'
//     }
//   });
// };

goToAuthScreen();

