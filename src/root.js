import React, { Component } from 'react';// eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';

import { APP_TITLE } from './constants/commons';
import { SCREEN_BACKGROUNDCOLOR } from './constants/UIStyles';
import registerScreens from './containers/index.js';


export const store = configureStore();

export const goToAuthScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'screens.LoginScreen',
          }
        }],
        options: {
          topBar: {
            visible: false
          }
        }
      }
    }
  });
}

export const enterToAppScreenTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.SearchOffersScreen',
                  id: 'SearchOffersScreen'
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/search.png'),
                  selectedIcon: require('images/searchSelected.png'),
                  testID: 'TAB_SEARCH',
                  text: 'Search',
                  textColor: '#9B9B9B',
                },
                topBar: {
                  title: {
                    text: 'Search'
                  }
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.ChosenOffersScreen',
                  id: 'ChosenOffersScreen'
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/favoriteTab.png'),
                  selectedIcon: require('images/favoritesSelectedTab.png'),
                  testID: 'TAB_CHOSEN',
                  text: 'Chosen',
                  textColor: '#9B9B9B',
                },
                topBar: {
                  title: {
                    text: 'Chosen'
                  }
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.ChatsScreen',
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/chatsTab.png'),
                  selectedIcon: require('images/chatsTabSelected.png'),
                  testID: 'TAB_CHATS',
                  text: 'Chats',
                  textColor: '#9B9B9B',
                },
                topBar: {
                  title: {
                    text: 'Chats'
                  }
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.MoreScreen',
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/moreTab.png'),
                  selectedIcon: require('images/moreTabSelected.png'),
                  testID: 'TAB_MORE',
                  text: 'More',
                  textColor: '#9B9B9B',
                },
                topBar: {
                  title: {
                    text: 'More'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
}

registerScreens(store, Provider);

persistStore(store, null, () => {
  const userStore = store.getState().entities.user;
  Navigation.events().registerAppLaunchedListener(() => {
    if (!!Object.keys(userStore).length) {
      enterToAppScreenTabs();
    }
    else {
      goToAuthScreen();
    }
  });
});