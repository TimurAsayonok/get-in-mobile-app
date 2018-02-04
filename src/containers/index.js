import { Navigation } from 'react-native-navigation';

/**Auth screens */
import LoginScreenContainer from './auth/LoginScreenContainer';

/** Search screens */
import SearchOffersScreenContainer from './search/SearchOffersScreenContainer';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('LoginScreen', () => LoginScreenContainer, store, Provider);
  Navigation.registerComponent('SearchOffersScreen', () => SearchOffersScreenContainer, store, Provider);
};