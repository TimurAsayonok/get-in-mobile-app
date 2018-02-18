import * as Actions from 'constants/actions';

// import { purgeStoredState } from 'redux-persist'
// import { AsyncStorage } from 'react-native'

const initialState = {
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.LOGIN_USER_SUCCESS:
    case Actions.SIGN_UP_USER_SUCCESS:

      return {
        ...state,
        ...payload.payload,
        chosenOffers: payload.payload.favorite_offers
      };

    case Actions.ADD_CHOSEN_OFFER_SUCCESS:
      console.log(payload);

      return {
        ...state,
        chosenOffers: payload.payload
      };
    case Actions.LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}