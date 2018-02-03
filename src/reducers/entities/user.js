import * as Actions from 'constants/actions';

// import { purgeStoredState } from 'redux-persist'
// import { AsyncStorage } from 'react-native'

const initialState = {
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.LOGIN_USER_SUCCESS:

      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}