import * as Actions from 'constants/actions';

const initialState = {
  error: null,
  isFetching: false,
  isFound: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.FIND_OFFERS_START:
      return {
        ...state,
        isFetching: true
      };

    case Actions.FIND_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFound: true
      };

    case Actions.FIND_OFFERS_FAIL:
      return {
        ...state,
        isFetching: false,
        isFound: false,
        error: payload.message
      };

    default:
      return state;
  }
}