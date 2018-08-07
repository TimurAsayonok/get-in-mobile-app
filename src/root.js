import { Navigation } from 'react-native-navigation';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';
import registerScreens from './containers/index.js';


export const store = configureStore();

export const goToAuthScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'screens.LoginScreen',
            options: {
              topBar: {
                visible: false
              },
              layout: {
                orientation: ['portrait']
              }
            }
          }
        }]
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
                  id: 'SearchOffersScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Search',
                      }
                    }
                  }
                }
              }],
              options: {
                bottomTab: {
                  icon: require('images/search.png'),
                  selectedIcon: require('images/searchSelected.png'),
                  testID: 'TAB_SEARCH',
                  text: 'Search',
                  textColor: '#9B9B9B',
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.ChosenOffersScreen',
                  id: 'ChosenOffersScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Chosen'
                      }
                    }
                  }
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/favoriteTab.png'),
                  selectedIcon: require('images/favoritesSelectedTab.png'),
                  testID: 'TAB_CHOSEN',
                  text: 'Chosen',
                  textColor: '#9B9B9B',
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.ChatsScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Chats'
                      }
                    }
                  }
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/chatsTab.png'),
                  selectedIcon: require('images/chatsTabSelected.png'),
                  testID: 'TAB_CHATS',
                  text: 'Chats',
                  textColor: '#9B9B9B',
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'screens.MoreScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'More'
                      }
                    }
                  }
                },
              }],
              options: {
                bottomTab: {
                  icon: require('images/moreTab.png'),
                  selectedIcon: require('images/moreTabSelected.png'),
                  testID: 'TAB_MORE',
                  text: 'More',
                  textColor: '#9B9B9B',
                }
              }
            }
          }
        ],
        options: {
          layout: {
            orientation: ['portrait']
          },
          bottomTabs: {
            titleDisplayMode: 'alwaysShow' 
          }
        }
      }
    }
  });
}

registerScreens(store);


Navigation.events().registerAppLaunchedListener(() => {
  persistStore(store, null, () => {
    const userStore = store.getState().entities.user;
    if (!!Object.keys(userStore).length) {
      enterToAppScreenTabs();
    } else {
      goToAuthScreen();
    }
  });
});