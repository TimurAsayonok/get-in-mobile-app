import { Navigation } from 'react-native-navigation';

/**Auth screens */
import LoginScreenContainer from './auth/LoginScreenContainer';

/** Search offers screens */
import SearchOffersScreenContainer from './search/SearchOffersScreenContainer';
import ResultsScreenContainer from './results/ResultsScreenContainer';
import OfferScreenContainer from './offer/OfferScreenContainer';

/** Favorites screens */
import FavoritesScreenContainer from './favorites/FavoritesScreenContainer';

/** More screens */
import MoreScreenContainer from './more/MoreScreenContainer';

/** Chats screens */
import ChatsScreenContainer from './chats/ChatsScreenContainer';

/** Another screens */
import ListScreenContainer from './list/ListScreenContainer';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('LoginScreen', () => LoginScreenContainer, store, Provider);
  Navigation.registerComponent('SearchOffersScreen', () => SearchOffersScreenContainer, store, Provider);
  Navigation.registerComponent('OfferScreen', () => OfferScreenContainer, store, Provider);
  Navigation.registerComponent('ResultsScreen', () => ResultsScreenContainer, store, Provider);
  Navigation.registerComponent('FavoritesScreen', () => FavoritesScreenContainer, store, Provider);
  Navigation.registerComponent('MoreScreen', () => MoreScreenContainer, store, Provider);
  Navigation.registerComponent('ChatsScreen', () => ChatsScreenContainer, store, Provider);
  Navigation.registerComponent('ListScreen', () => ListScreenContainer, store, Provider);
};