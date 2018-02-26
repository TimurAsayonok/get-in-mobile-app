import { Platform } from 'react-native';

export const api = 'https://protected-depths-73917.herokuapp.com/v1';
// export const api = Platform.select({
//   ios: "http://localhost:3000/v1",
//   android: "http://10.0.2.2:3000/v1"
// });
export const photoURI = '';

/* ENDPOINTS */
/** auth */
export const LOGIN_ENDPOINT = '/login';
export const SIGNUP_ENDPOINT = '/singup';
export const REMIND_PASSWORD_ENDPOINT = '/remind_password';

/** areas */
export const AREAS_ENDPOINT = '/areas/';

/** educations */
export const EDUCATIONS_ENDPOINT = '/educations/';

/** metro stations */
export const METRO_STATIONS_ENDPOINT = '/metro_stations/';

/** offers */
export const GET_OFFERS_ENDPOINT = '/offers/';
export const FIND_OFFERS_ENDPOINT = '/find_offers';

/** user */
export const USER_ENDPOINT = '/user/';
export const GET_CHOSEN_OFFERS_ENDPOINT = '/chosen_offers';
export const CHOSEN_OFFER_ENDPOINT = '/chosen_offer';
export const CHATS_ENDPOINT = '/chats'
