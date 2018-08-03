import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
/**Auth screens */
import LoginScreenContainer from './auth/LoginScreenContainer';
import SignUpScreenContainer from './auth/SignUpScreenContainer';
import RemindPasswordScreenContainer from './auth/RemindPasswordScreen';

/** Search offers screens */
import SearchOffersScreenContainer from './search/SearchOffersScreenContainer';
import ResultsScreenContainer from './results/ResultsScreenContainer';
import OfferScreenContainer from './offer/OfferScreenContainer';

/** ChosenOffers screens */
import ChosenOffersScreenContainer from './chosenOffers/ChosenOffersScreenContainer';

/** More screens */
import MoreScreenContainer from './more/MoreScreenContainer';

/** Chats screens */
import ChatsScreenContainer from './chats/ChatsScreenContainer';

/** Another screens */
import ListScreenContainer from './list/ListScreenContainer';

function sceneCreator(Component, store) {
  return () => {
    return class SceneWrapper extends React.Component {
      static options = {
        ...Component.options,
      }

      render() {
        return <Provider store={store}>{React.createElement(Component, { ...this.props, navigator: Navigation })}</Provider>
      }
    };
  }
}

export default function registerScreens(store) {
  Navigation.registerComponent('screens.LoginScreen', sceneCreator(LoginScreenContainer, store));
  Navigation.registerComponent('screens.SignUpScreen', sceneCreator(SignUpScreenContainer, store));
  Navigation.registerComponent('screens.RemindPasswordScreen', sceneCreator(RemindPasswordScreenContainer, store));
  Navigation.registerComponent('SearchOffersScreen', sceneCreator(SearchOffersScreenContainer, store));
  Navigation.registerComponent('OfferScreen', sceneCreator(OfferScreenContainer, store));
  Navigation.registerComponent('ResultsScreen', sceneCreator(ResultsScreenContainer, store));
  Navigation.registerComponent('ChosenOffersScreen', sceneCreator(ChosenOffersScreenContainer, store));
  Navigation.registerComponent('MoreScreen', sceneCreator(MoreScreenContainer, store));
  Navigation.registerComponent('ChatsScreen', sceneCreator(ChatsScreenContainer, store));
  Navigation.registerComponent('ListScreen', () => ListScreenContainer, store, Provider);
};