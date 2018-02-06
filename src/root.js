import React, { Component } from 'react';// eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';

import { APP_TITLE } from './constants/commons';
import { SCREEN_BACKGROUNDCOLOR } from './constants/UIStyles';
import registerScreens from './containers/index.js';


export const store = configureStore();

const goToAuthScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'LoginScreen',
      navigatorStyle: {
        navBarHidden: true
      },
    },
  });
}

export const enterToAppScreenTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Search',
        screen: 'SearchOffersScreen', // this is a registered name for a screen
        icon: require('images/search.png'),
        selectedIcon: require('images/searchSelected.png'), // iOS only
        title: APP_TITLE
      },
      {
        label: 'Search',
        screen: 'SearchOffersScreen', // this is a registered name for a screen
        icon: require('images/search.png'),
        selectedIcon: require('images/searchSelected.png'), // iOS only
        title: APP_TITLE
      }
    ],
    tabsStyle: {
      tabBarSelectedButtonColor: '#1A1919', // change the color of the selected tab icon and text (only selected)
      tabBarTranslucent: true,
      tabBarBackgroundColor: '#FAFAFA'
    },
    appStyle: {
      hideBackButtonTitle: true, // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
      forceTitlesDisplay: true,
      tabBarSelectedButtonColor: '#1A1919',
      orientation: 'portrait',
      tabBarBackgroundColor: '#FAFAFA'
    }
  });
};

registerScreens(store, Provider);

persistStore(store, null, () => {
  const userStore = store.getState().entities.user;
  if (!!Object.keys(userStore).length) {
    enterToAppScreenTabs();
  }
  else {
    goToAuthScreen();
  }
});