import * as Actions from 'constants/actions';

import { purgeStoredState } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { persistRootConfig } from 'config/persist';

const initialState = {
  isEntered: false,
  error: '',
  isFetching: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.LOGIN_USER_START:
      return { ...state, isFetching: true };

    case Actions.LOGIN_USER_SUCCESS:
      return { ...state, isFetching: false, isEntered: true };

    case Actions.LOGIN_USER_FAIL:
      return { ...state, isFetching: false, error: payload };

    case Actions.LOGOUT:
      purgeStoredState(persistRootConfig);

      return {
        ...initialState
      };

    default:
      return state;
  }
}