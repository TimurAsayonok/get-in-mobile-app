import * as Actions from 'constants/actions';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.FIND_OFFERS_SUCCESS:
      return payload.payload;

    case Actions.FIND_OFFERS_FAIL:
      return state;

    default:
      return state;
  }
}