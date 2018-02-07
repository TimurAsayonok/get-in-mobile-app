import { Navigation } from 'react-native-navigation';

/**Auth screens */
import LoginScreenContainer from './auth/LoginScreenContainer';

/** Search screens */
import SearchOffersScreenContainer from './search/SearchOffersScreenContainer';

/** Favorites screens */
import FavoritesScreenContainer from './favorites/FavoritesScreenContainer';

/** More screens */
import MoreScreenContainer from './more/MoreScreenContainer';

/** Chats screens */
import ChatsScreenContainer from './chats/ChatsScreenContainer';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('LoginScreen', () => LoginScreenContainer, store, Provider);
  Navigation.registerComponent('SearchOffersScreen', () => SearchOffersScreenContainer, store, Provider);
  Navigation.registerComponent('FavoritesScreen', () => FavoritesScreenContainer, store, Provider);
  Navigation.registerComponent('MoreScreen', () => MoreScreenContainer, store, Provider);
  Navigation.registerComponent('ChatsScreen', () => ChatsScreenContainer, store, Provider);
};