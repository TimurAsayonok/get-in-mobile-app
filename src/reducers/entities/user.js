import * as Actions from 'constants/actions';

// import { purgeStoredState } from 'redux-persist'
// import { AsyncStorage } from 'react-native'

const initialState = {
  access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTE3OTIwODQxLCJqdGkiOiI2ZGE0ZDg3NTJmZmU0NDI4OGY1M2NiMjE5MzVmMmI5ZSIsInVzZXJfaWQiOjIsImdyb3VwIjoic2hvcHBlciIsInpvbmVfaWRzIjpbNCwxMl0sInBhcnRuZXJfaWQiOm51bGx9.9pYiPHYOermsJ5RNgTT8HCzgL7IAfRZoHapc-ZKjspQ'
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