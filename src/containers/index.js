import { Navigation } from 'react-native-navigation';

/**Lodin */
import LoginScreenContainer from './auth/LoginScreenContainer';


export default function registerScreens(store, Provider) {
  Navigation.registerComponent('LoginScreen', () => LoginScreenContainer, store, Provider);
};